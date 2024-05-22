import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { Input } from './components/Input';
import logo from './assets/logo.png';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setErrorState] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (cpf: string, password: string, setError: (error: string) => void): Promise<void> => {
    try {
      const response = await fetch('http://localhost:5136/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
      navigate('/calendar');
    } catch (err: any) {
      console.error('Error during login:', err);  
      setError(err.message);
    }
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(username, password, setErrorState);
  };
  return (
    <section className={style["center"]}>
      <img src={logo} alt="" height={189} width={189} />
      <h1 className={style["title"]}>Welcome!</h1>
      <div className={style["window"]}>
        <h1 className={style["title"]} style={{ marginTop: 51, marginLeft: 27 }}>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 13 }}>
            <Input placeholder="CPF" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className={style["social"]} style={{ background: '#000', marginTop: 15 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Apple Logo">
                  <rect width="24" height="24" fill="black" />
                  <path id="path4" d="M21.2806 18.424C20.9327 19.2275 20.521 19.9672 20.044 20.6472C19.3938 21.5743 18.8614 22.216 18.4511 22.5724C17.815 23.1573 17.1336 23.4568 16.4039 23.4739C15.88 23.4739 15.2482 23.3248 14.5128 23.0224C13.775 22.7214 13.0969 22.5724 12.4769 22.5724C11.8267 22.5724 11.1293 22.7214 10.3834 23.0224C9.63638 23.3248 9.03456 23.4824 8.57444 23.498C7.87466 23.5278 7.17716 23.2197 6.48093 22.5724C6.03656 22.1848 5.48075 21.5204 4.8149 20.5791C4.10051 19.5739 3.51317 18.4084 3.05304 17.0795C2.56026 15.6442 2.31323 14.2543 2.31323 12.9087C2.31323 11.3673 2.6463 10.0379 3.31342 8.92385C3.83772 8.029 4.53522 7.32312 5.4082 6.80493C6.28118 6.28674 7.22443 6.02267 8.24024 6.00578C8.79605 6.00578 9.52493 6.1777 10.4307 6.51559C11.3339 6.85462 11.9139 7.02655 12.1681 7.02655C12.3582 7.02655 13.0025 6.82552 14.0947 6.42473C15.1275 6.05305 15.9992 5.89916 16.7133 5.95978C18.6484 6.11595 20.1022 6.87876 21.069 8.25303C19.3384 9.30163 18.4823 10.7703 18.4993 12.6544C18.515 14.122 19.0474 15.3432 20.0937 16.3129C20.5679 16.7629 21.0974 17.1107 21.6866 17.3578C21.5588 17.7283 21.4239 18.0832 21.2806 18.424ZM16.8425 0.960131C16.8425 2.11039 16.4223 3.18439 15.5847 4.17847C14.5738 5.36023 13.3512 6.04311 12.0253 5.93536C12.0084 5.79736 11.9986 5.65213 11.9986 5.49951C11.9986 4.39526 12.4793 3.21349 13.333 2.24724C13.7592 1.75801 14.3013 1.35122 14.9586 1.02671C15.6145 0.707053 16.2349 0.530273 16.8184 0.5C16.8354 0.653772 16.8425 0.807554 16.8425 0.960116V0.960131Z" fill="white" />
                </g>
              </svg>
              <p style={{ marginLeft: 10, color: '#fff' }}>
                Continue with Apple
              </p>
            </button>
            <button className={style["social"]} style={{ background: '#fff', marginTop: 15 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2615C23.04 11.446 22.9668 10.6619 22.8309 9.90918H12V14.3576H18.1891C17.9225 15.7951 17.1123 17.013 15.8943 17.8285V20.714H19.6109C21.7855 18.7119 23.04 15.7637 23.04 12.2615Z" fill="#4285F4" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z" fill="#34A853" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.185C5.33523 13.495 5.20455 12.7579 5.20455 12C5.20455 11.242 5.33523 10.505 5.56523 9.81499V6.83545H1.72318C0.944318 8.38795 0.5 10.1443 0.5 12C0.5 13.8557 0.944318 15.612 1.72318 17.1645L5.56523 14.185Z" fill="#FBBC05" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335" />
              </svg>
              <p style={{ marginLeft: 10, color: '#000' }}>
                Continue with Google
              </p>
            </button>
          </div>
          <hr style={{ marginTop: 20 }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 24, marginTop: 25 }}>
            <button className={style["button"]} style={{ backgroundColor: '#2B2B2B', color: '#E6E8E6', marginRight: 15 }} onClick={() => navigate('/register')}>Register</button>
            <button className={style["button"]} style={{ background: "linear-gradient(0deg, #D33E43 0%, #D33E43 100%)", color: '#E6E8E6' }} type='submit'>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
