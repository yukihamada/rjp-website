import React, { useState } from 'react';
import RootLayout from '../layout';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
import { login } from '../utils/firebase';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  login(email, password)
    .then((user) => {
      console.log('Logged in user:', user);
      // ログイン成功後の処理を追加
    })
    .catch((error) => {
      console.error('Login error:', error);
    });
};
  };

  return (
    <RootLayout>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
</RootLayout>
  );
};

export default Login;
