import React, { useState } from 'react';
import RootLayout from '../../layout';

const CreateCourse: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // コース作成処理を追加
  };

  return (
    <RootLayout>
      <h2>コース作成</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">タイトル:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">説明:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">カテゴリ:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">作成</button>
      </form>
</RootLayout>
  );
};

export default CreateCourse;
