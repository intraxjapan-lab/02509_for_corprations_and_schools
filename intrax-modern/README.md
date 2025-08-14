# Intrax Modern - 3D Enhanced Version

Intrax Corporate & Schools サイトのモダンな3Dバージョンです。TypeScript、Tailwind CSS、Three.js、GSAP、Shadow UIを使用して構築されています。

## 🚀 技術スタック

- **TypeScript** - 型安全なJavaScript開発
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **Three.js** - 3Dグラフィックスとアニメーション
- **GSAP** - プロフェッショナルなアニメーションライブラリ
- **Shadow UI** - モダンなUIコンポーネント
- **Vanilla JavaScript** - フレームワークに依存しない軽量な実装
- **HTML5** - セマンティックなマークアップ

## 🌟 新機能

### 3D背景アニメーション
- **Three.js パーティクルシステム**: インタラクティブな3D背景
- **マウス追従**: マウス移動に応じたカメラアニメーション
- **パフォーマンス最適化**: 効率的なレンダリング

### GSAPアニメーション
- **スクロールトリガー**: スクロール位置に応じたアニメーション
- **スムーズなトランジション**: タブ切り替えの美しいアニメーション
- **インタラクティブ要素**: ホバー効果とクリックアニメーション

### モダンなUI/UX
- **Glassmorphism**: ガラス効果のあるデザイン
- **3Dカード**: ホバー時の浮き上がり効果
- **グラデーション**: 美しい色のグラデーション
- **レスポンシブデザイン**: 全デバイス対応

## 📁 プロジェクト構造

```
intrax-modern/
├── src/                    # ソースコード
│   ├── input.css          # Tailwind CSS入力ファイル
│   ├── types.ts           # TypeScript型定義
│   ├── data.ts            # サイトデータ
│   ├── tabManager.ts      # タブ管理クラス
│   ├── threeBackground.ts # Three.js 3D背景
│   ├── animations.ts      # GSAPアニメーション
│   ├── main.ts            # メインアプリケーション
│   └── contact.ts         # コンタクトページ
├── dist/                   # ビルド出力
│   ├── output.css         # コンパイルされたCSS
│   └── main.js            # コンパイルされたJS
├── index.html             # メインページ（3D版）
├── contact.html           # コンタクトページ
├── tailwind.config.js     # Tailwind CSS設定
├── tsconfig.json          # TypeScript設定
└── package.json           # 依存関係とスクリプト
```

## 🛠️ セットアップ

### 前提条件
- Node.js 18.0.0以上
- npm 8.0.0以上
- モダンブラウザ（WebGL対応）

### インストール
```bash
# 依存関係をインストール
npm install

# 初回ビルド
npm run build
```

## 📜 利用可能なスクリプト

```bash
# 開発用サーバー起動（ビルド後）
npm run dev

# 本番用サーバー起動
npm start

# CSSとTypeScriptのビルド
npm run build

# ファイル変更の監視とビルド
npm run build:watch

# ビルドファイルのクリーンアップ
npm run clean
```

## 🎨 カスタマイズ

### Three.js 3D背景
- `src/threeBackground.ts` で3Dパーティクルの設定
- パーティクル数、色、アニメーション速度の調整
- カメラの動作とフォグ効果の設定

### GSAPアニメーション
- `src/animations.ts` でアニメーションの設定
- スクロールトリガーの調整
- イージングとタイミングのカスタマイズ

### Tailwind CSS
- `src/input.css` でカスタムコンポーネントとユーティリティを定義
- `tailwind.config.js` でカラーパレットやテーマをカスタマイズ

## 🌟 主な機能

### 3Dインタラクティブ背景
- **パーティクルシステム**: 1000個の3Dパーティクル
- **マウス追従**: リアルタイムのカメラアニメーション
- **パフォーマンス最適化**: 60fpsの滑らかなアニメーション

### 高度なタブ管理システム
- **4つのメインタブ**: J1ビザとは、アメリカ駐在、福利厚生、学校向け
- **GSAPアニメーション**: スムーズなタブ切り替え
- **キーボードナビゲーション**: 矢印キーでの操作
- **URLハッシュ**: 状態の永続化

### モダンなUIコンポーネント
- **3Dカード**: ホバー時の浮き上がり効果
- **Glassmorphism**: ガラス効果のあるデザイン
- **グラデーション**: 美しい色のグラデーション
- **インタラクティブ要素**: ホバー効果とアニメーション

### レスポンシブデザイン
- **モバイルファースト**: 全デバイス対応
- **タッチフレンドリー**: モバイルでの使いやすさ
- **パフォーマンス**: 軽量で高速な動作

## 🔧 開発

### 開発モード
```bash
# ファイル変更を監視してビルド
npm run build:watch

# 別ターミナルで開発サーバー起動
npm run dev
```

### ビルドプロセス
1. **Tailwind CSS**: `src/input.css` → `dist/output.css`
2. **TypeScript**: `src/*.ts` → `dist/*.js`
3. **HTML**: 静的ファイルとして配信

## 📱 ブラウザサポート

- Chrome 90+ (WebGL対応)
- Firefox 88+ (WebGL対応)
- Safari 14+ (WebGL対応)
- Edge 90+ (WebGL対応)

## 🚀 デプロイ

### 静的サイトホスティング
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### ビルドコマンド
```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

## 🎯 パフォーマンス最適化

- **Three.js最適化**: 効率的なパーティクルレンダリング
- **GSAP最適化**: スムーズなアニメーション
- **CSS最適化**: 最小限のスタイル
- **JavaScript最適化**: 軽量なコード

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 サポート

技術的な質問や問題がある場合は、GitHubのIssuesでお知らせください。

## 🔮 今後の予定

- [ ] より多くの3Dモデルの追加
- [ ] WebGLシェーダーの実装
- [ ] パフォーマンスのさらなる最適化
- [ ] アクセシビリティの向上
- [ ] PWA対応
