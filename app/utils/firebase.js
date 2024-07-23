import { auth } from '../../firebaseConfig';

// ユーザー登録
export const register = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // 登録成功
      const user = userCredential.user;
      console.log('User registered:', user);
      return user;
    })
    .catch((error) => {
      // エラー処理
      console.error('Error registering user:', error);
      throw error;
    });
};

// ログイン
export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // ログイン成功
      const user = userCredential.user;
      console.log('User logged in:', user);
      return user;
    })
    .catch((error) => {
      // エラー処理
      console.error('Error logging in user:', error);
      throw error;
    });
};

// ログアウト
export const logout = () => {
  return auth.signOut()
    .then(() => {
      // ログアウト成功
      console.log('User logged out');
    })
    .catch((error) => {
      // エラー処理
      console.error('Error logging out user:', error);
      throw error;
    });
};
