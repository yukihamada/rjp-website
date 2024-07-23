import React, { useState } from 'react';
import RootLayout from '../layout';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
import { register } from '../utils/firebase';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    return;
  }
  register(email, password)
    .then((user) => {
      console.log('Registered user:', user);
      // 登録成功後の処理を追加
    })
    .catch((error) => {
      console.error('Registration error:', error);
    });
};
  };

  return (
    <RootLayout>
      <h2>登録</h2>
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
        <div>
          <label htmlFor="confirmPassword">パスワード確認:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">登録</button>
      </form>
</RootLayout>
  );
};

export default Register;
