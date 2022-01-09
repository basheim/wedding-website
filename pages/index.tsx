import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

export interface PasswordProps {
  password: string;
}

const Password = ({ password }: PasswordProps) => {
  const [maybePassword, setMaybePassword] = useState("");
  const [passwordDisplay, setPasswordDisplay] = useState(false);
  const router = useRouter();
  const cookie = "auth=congratsyougotintoourweddingwebsite";

  useEffect(() => {
    const initialCookies = document.cookie.split(';');
    if (initialCookies.includes(cookie)) {
      router.push("/home");
    }
  }, []);

  const handlePassword = (newPassword: string) => {
    setMaybePassword(newPassword);
  }

  const handleKeyDown = async (event: any) => {
    if (event.key === 'Enter' && password === maybePassword) {
      document.cookie = `${cookie}; path=/`;
      document.cookie = `${cookie}; path=/home`;
      await router.push('/home');
    }
  }

  const handleButtonClick = () => {
    setPasswordDisplay(true);
  }

  return (
    <div className="complete-container">
      <div className="background-image" style={{opacity: passwordDisplay ? 0.7 : 1}}/>
      <main className="container">
        <div className="password-div">
          {passwordDisplay ?
            <input autoFocus className="password-entry" hidden={!passwordDisplay} type="text" value={maybePassword} onChange={e => handlePassword(e.target.value)} onKeyDown={handleKeyDown} /> :
            <button className="enter-button" onClick={handleButtonClick} hidden={passwordDisplay}>ENTER</button>
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      password: "dustoffyourfancypants"
    }
  };
}

export default Password;
