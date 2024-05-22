import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import { Input } from './components/Input';
import logo from './assets/logo.png';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setErrorState] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async (name: string, cpf: string, password: string, setError: (error: string) => void): Promise<void> => {
    try {
      const response = await fetch('http://localhost:5136/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, cpf, password })
    });
  
      if (!response.ok) {
        throw new Error('Register failed');
      }
  
      navigate('/login');
    } catch (err: any) {
      console.error('Error during register:', err);  
      setError(err.message);
    }
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRegister(name, username, password, setErrorState);
  };
  return (
    <section className={style["center"]}>
      <img src={logo} alt="" height={189} width={189} />
      <h1 className={style["title"]}>Welcome!</h1>
      <div className={style["window"]}>
        <h1 className={style["title"]} style={{ marginTop: 51, marginLeft: 27 }}>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 13 }}>
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="CPF" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <hr style={{ marginTop: 120 }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 24, marginTop: 25 }}>
            <button className={style["button"]} style={{ backgroundColor: '#2B2B2B', color: '#E6E8E6', marginRight: 15 }} onClick={() => navigate('/login')}>Login</button>
            <button className={style["button"]} style={{ background: "linear-gradient(0deg, #D33E43 0%, #D33E43 100%)", color: '#E6E8E6' }} type='submit'>Register</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
