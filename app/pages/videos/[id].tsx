import React from 'react';
import { useRouter } from 'next/router';
import RootLayout from '../../layout';

const VideoDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <RootLayout>
      <h2>ビデオ詳細</h2>
      <p>ビデオID: {id}</p>
      <p>ここでは、選択したビデオの詳細情報を表示します。</p>
    </Layout>
  );
};

export default VideoDetail;
