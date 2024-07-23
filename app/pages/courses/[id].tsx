import React from 'react';
import { useRouter } from 'next/router';
import RootLayout from '../../layout';

const CourseDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <RootLayout>
      <h2>コース詳細</h2>
      <p>コースID: {id}</p>
      <p>ここでは、選択したコースの詳細情報を表示します。</p>
</RootLayout>
  );
};

export default CourseDetail;
