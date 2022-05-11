import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import { CookieAuth, getAuthorizedCookie } from '../lib/firebase';
import { hasCookie } from '../lib/firebase';

const Password = () => {
  const [maybePassword, setMaybePassword] = useState("");
  const [passwordDisplay, setPasswordDisplay] = useState(false);
  const [validateCookieRequest, setValidateCookieRequest] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!validateCookieRequest) {
      const initialCookies = document.cookie.split(';');
      hasCookie(initialCookies).then((status) => {
        if (status) {
          router.push("/home");
        }
      });
      setValidateCookieRequest(true);
    }
  }, []);

  const handlePassword = (newPassword: string) => {
    setMaybePassword(newPassword.toLowerCase());
  }

  const handleKeyDown = async (event: any) => {
    if (event.key === 'Enter') {
      const auth: CookieAuth = await getAuthorizedCookie(maybePassword);
      if (auth.isAuthorized) {
        document.cookie = `${auth.cookie?.trim()}; path=/`;
        document.cookie = `${auth.cookie?.trim()}; path=/home`;
        await router.push('/home');
      }
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
              <input autoFocus className="password-entry no-select" hidden={!passwordDisplay} type="text" value={maybePassword} onChange={e => handlePassword(e.target.value)} onKeyDown={handleKeyDown} /> :
              <button className="enter-button" onClick={handleButtonClick} hidden={passwordDisplay}>ENTER</button>
          }
        </div>
      </main>
    </div>
  )
}

export default Password;
