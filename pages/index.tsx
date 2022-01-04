import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

export interface PasswordProps {
  password: string;
}

const Password = ({ password }: PasswordProps) => {
  const [maybePassword, setMaybePassword] = useState("");
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

  return (
    <div className="complete-container">
      <main className="container">
        <div className="password-div">
          <h1 className="title">
            Enter Password
            </h1>
          <div className="password-entry">
            <input type="text" value={maybePassword} onChange={e => handlePassword(e.target.value)} onKeyDown={handleKeyDown} />
          </div>
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
