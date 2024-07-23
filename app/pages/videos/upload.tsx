import React, { useState } from 'react';
import RootLayout from '../../layout';

const UploadVideo: React.FC = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ビデオアップロード処理を追加
  };

  return (
    <RootLayout>
      <h2>ビデオアップロード</h2>
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
          <label htmlFor="url">ビデオURL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit">アップロード</button>
      </form>
    </RootLayout>
  );
};

export default UploadVideo;
