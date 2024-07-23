import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><a href="/">ホーム</a></li>
          <li><a href="/courses">コース</a></li>
          <li><a href="/videos">ビデオ</a></li>
          <li><a href="/dashboard">ダッシュボード</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
