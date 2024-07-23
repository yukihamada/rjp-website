# R jp - リファイン柔術プラットフォーム

## 概要
R jpは、柔術の学習とトレーニングをサポートするためのプラットフォームです。ユーザーはコースを作成し、動画コンテンツをアップロードし、学習進捗を管理することができます。

## 機能
### ユーザー管理
- ユーザー登録・ログイン・ログアウト機能: Firebase認証を使用
- プロフィール管理: ユーザー情報の編集・保存
- ユーザー権限管理: 役割に応じたアクセス制御（管理者、インストラクター、学習者）

### コース管理
- コース作成・編集・削除機能: 管理者やインストラクターが新しいコースを追加・管理
- コースカテゴリ管理: コースをカテゴリごとに整理
- 動画コンテンツのアップロード・管理: 動画の保存・配信
- コース進捗管理: ユーザーごとの学習進捗を追跡

### 学習機能
- 動画再生機能（ストリーミング対応）: 高品質な動画再生
- クイズ・テスト機能: 学習内容の理解度チェック
- 課題提出・フィードバック機能: インストラクターからの課題フィードバック
- 学習進捗のトラッキング: 学習履歴の表示

### インタラクション
- フォーラム・ディスカッション機能: ユーザー同士の交流
- メッセージング機能: 直接メッセージの送受信
- ライブストリーミング・ウェビナー機能: リアルタイムでの授業やイベント

### 管理機能
- ダッシュボード: 学習進捗や利用状況の可視化
- コンテンツ管理: 動画、資料、クイズなどの一元管理

## セットアップ
### 必要なパッケージのインストール
```bash
npm install
```

### Firebaseの設定
`firebaseConfig.js`ファイルにFirebaseの設定を追加します。
```javascript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
```

### Prismaのセットアップ
`prisma/schema.prisma`ファイルを作成し、スキーマを定義します。
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Course {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  category    String
  videos      Video[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Video {
  id        Int      @id @default(autoincrement())
  title     String
  url       String
  courseId  Int
  course    Course   @relation(fields: [courseId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  ADMIN
  INSTRUCTOR
  USER
}
```

## 実行方法
### 開発サーバーの起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### プロダクションサーバーの起動
```bash
npm start
```

# R jp - リファイン柔術プラットフォーム

## 概要
R jpは、柔術の学習とトレーニングをサポートするためのプラットフォームです。ユーザーはコースを作成し、動画コンテンツをアップロードし、学習進捗を管理することができます。

## 機能
### ユーザー管理
- ユーザー登録・ログイン・ログアウト機能: Firebase認証を使用
- プロフィール管理: ユーザー情報の編集・保存
- ユーザー権限管理: 役割に応じたアクセス制御（管理者、インストラクター、学習者）

### コース管理
- コース作成・編集・削除機能: 管理者やインストラクターが新しいコースを追加・管理
- コースカテゴリ管理: コースをカテゴリごとに整理
- 動画コンテンツのアップロード・管理: 動画の保存・配信
- コース進捗管理: ユーザーごとの学習進捗を追跡

### 学習機能
- 動画再生機能（ストリーミング対応）: 高品質な動画再生
- クイズ・テスト機能: 学習内容の理解度チェック
- 課題提出・フィードバック機能: インストラクターからの課題フィードバック
- 学習進捗のトラッキング: 学習履歴の表示

### インタラクション
- フォーラム・ディスカッション機能: ユーザー同士の交流
- メッセージング機能: 直接メッセージの送受信
- ライブストリーミング・ウェビナー機能: リアルタイムでの授業やイベント

### 管理機能
- ダッシュボード: 学習進捗や利用状況の可視化
- コンテンツ管理: 動画、資料、クイズなどの一元管理

## セットアップ
### 必要なパッケージのインストール
```bash
npm install
```

### Firebaseの設定
`firebaseConfig.js`ファイルにFirebaseの設定を追加します。
```javascript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
```

### Prismaのセットアップ
`prisma/schema.prisma`ファイルを作成し、スキーマを定義します。
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Course {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  category    String
  videos      Video[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Video {
  id        Int      @id @default(autoincrement())
  title     String
  url       String
  courseId  Int
  course    Course   @relation(fields: [courseId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  ADMIN
  INSTRUCTOR
  USER
}
```

## 実行方法
### 開発サーバーの起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### プロダクションサーバーの起動
```bash
npm start
```

## ファイル構成
```
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── firebaseConfig.js
├── next-env.d.ts
├── next.config.mjs
├── node_modules
│   ├── ...
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prisma
│   └── schema.prisma
├── public
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
└── tsconfig.json
```

## Firebaseの設定

### Firebaseのインストール
Firebaseをプロジェクトに追加するために、以下のコマンドを実行します。
```bash
npm install firebase
```

### Firebaseの設定ファイル
`firebaseConfig.js` ファイルにFirebaseの設定を追加します。
```javascript
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
```

### Firebaseの認証
Firebaseの認証を使用して、ユーザーの登録、ログイン、ログアウトを行います。以下は、基本的な認証機能の例です。

#### ユーザー登録
```javascript
import { auth } from './firebaseConfig';

const register = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // 登録成功
      const user = userCredential.user;
      console.log('User registered:', user);
    })
    .catch((error) => {
      // エラー処理
      console.error('Error registering user:', error);
    });
};
```

#### ログイン
```javascript
import { auth } from './firebaseConfig';

const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // ログイン成功
      const user = userCredential.user;
      console.log('User logged in:', user);
    })
    .catch((error) => {
      // エラー処理
      console.error('Error logging in user:', error);
    });
};
```

#### ログアウト
```javascript
import { auth } from './firebaseConfig';

const logout = () => {
  auth.signOut()
    .then(() => {
      // ログアウト成功
      console.log('User logged out');
    })
    .catch((error) => {
      // エラー処理
      console.error('Error logging out user:', error);
    });
};
```

## プログラムの目的

R jpは、柔術のスキルアップと充実したトレーニング体験を提供することを目的としています。ユーザーは、体系的に構築された学習プログラムを通じて、技術と精神性を高めることができます。
