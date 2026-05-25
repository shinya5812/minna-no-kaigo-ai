# PROGRESS.md

## 2026-05-25

### 完了タスク
- CLAUDE.md作成（プロジェクト設計・デザイン方針・ディレクトリ構成を記述）
- Next.js 14 + Tailwind CSS v4 手動セットアップ（create-next-appの命名制限を回避）
- TypeScriptをv5.9.xに固定（v6.0ではCSS side-effect importが型エラーになるため）
- トップページ（`/`）作成：ヒーロー・機能紹介・業種別メニュー・ステップ・CTA
- 介護・福祉 業種トップ（`/kaigo`）作成：おすすめ対象・商品カード・使い方サンプル
- Q&Aページ（`/qa`）作成：8項目のQ&A + お問い合わせボタン
- ロードマップページ（`/roadmap`）作成：Phase 1〜3の予定表
- Header・Footerコンポーネント作成
- ビルド成功・全4ページ HTTP 200確認

### 結果・数値
- ビルドサイズ: `/` 96.1 kB / `/qa` 87.4 kB（静的プリレンダリング）
- 全ページ静的生成（SSGモード）

### 次のアクション
- Stripe決済の組み込み（購入ボタンにリンクを貼る）
- プロンプト集PDFの作成・配布設定
- OGP・favicon設定
- 本番デプロイ先の決定（Vercel推奨）
- お問い合わせメールアドレスを本番用に変更

---

## 2026-05-25（追記）

### 完了タスク
- web_data → AI_sale_project へのマージ作業
  - ルートファイル全更新（package.json / tsconfig.json / next.config.mjs / postcss.config.mjs 等）
  - components/, hooks/, lib/, public/, styles/ を全量コピー（上書き）
  - app/globals.css / layout.tsx / page.tsx を新版に更新
  - 保護対象（CLAUDE.md / PROGRESS.md / app/kaigo/）は変更なし
  - next.config.js を削除し next.config.mjs に統一
- pnpm をグローバルインストール（npm install -g pnpm）
- sharp のビルドスクリプトを承認（pnpm approve-builds --all）
- pnpm install 完了
- pnpm run dev でサーバー起動確認（Next.js 16.2.6 Turbopack）

### 結果・数値
- HTTP 200 / コンテンツ長 97,775 bytes 確認
- 起動時間: 924ms（Turbopack）

### 構成変化
- Next.js: 14 → 16.2.6
- React: 18 → 19
- UIライブラリ: Radix UI + shadcn/ui コンポーネント群追加
- パッケージマネージャー: npm → pnpm

### 次のアクション
- `/kaigo` ページを新しいデザイン（shadcn/ui）に合わせてリファクタリング
- Stripe決済の組み込み
- 本番デプロイ（Vercel）

---

## 2026-05-26

### 完了タスク
- GitHub リポジトリ作成＆プッシュ（`gh repo create minna-no-kaigo-ai --public`）
- Vercel 本番デプロイ完了（https://minna-no-kaigo-ai.vercel.app）
- hero-bg.png・logo.png を web_data から public/ へコピー
  - `components/header.tsx`: ロゴを `<Image src="/logo.png">` に変更（Heartアイコン削除）
  - `components/hero.tsx`: 背景画像（`object-position: right center`）＋左グラデーション構成に全面変更
  - `components/footer.tsx`: ロゴを `<Image src="/logo.png">` に変更
- 透過背景版 logo.png に差し替え（`ChatGPT-Image-2026年5月26日-07_53_31.png`）
- Playwright でヘッダー・フッターのロゴ表示を目視確認済み
- CLAUDE.md 更新（本番URL・フレームワークバージョン・デプロイ方法を追記）

### 結果・数値
- 本番URL: https://minna-no-kaigo-ai.vercel.app（稼働中）
- GitHub: https://github.com/shinya5812/minna-no-kaigo-ai
- ビルド: 全5ページ静的生成・エラーなし

### 次のアクション
- Stripe決済の組み込み（購入ボタンに決済リンクを追加）
- OGP・favicon設定（SNSシェア時の見栄え）
- カスタムドメインの設定（任意）
- お問い合わせメールアドレスを本番用に変更（現在 info@example.com）
- Vercel の GitHub 自動デプロイ連携設定（現在は `npx vercel --prod` で手動デプロイ）

---

## 2026-05-25（セッション終了）

### 完了タスク
- ヒーローセクション画像を差し替え（hero-image.png）
  - `<img>` → `next/image` の `<Image>` に変更
  - PC: `hidden lg:block` / スマホ: `lg:hidden` でレスポンシブ対応
  - `aspect-[4/3]` + `fill` + `object-cover` でレイアウト崩れなし
- フッター背景色を変更（ダークブラウン → `#fdf2f8` 薄ピンク）
- プロンプト一覧を7種類に統一（prompts.tsx / pricing.tsx）
  - 食事・排泄・入浴・トラブル転倒・ヒヤリハット・申し送り・服薬
  - 「毎日使える／随時使える」バッジ付き
- FAQ を5問に更新（faq.tsx）
  - カスタマイズ・受け取り方の問い追加
- git init → 初回コミット（99ファイル）完了
- CLAUDE.md に `/wrapup` セッション終了コマンドを追記

### 現在の状態
- ローカル開発サーバー: `pnpm run dev`（localhost:3000）で動作確認済み
- Gitリポジトリ: 初期化・コミット済み（GitHub未プッシュ）
- Vercel: 未デプロイ

### 次回の再開手順
1. ターミナルで `! gh auth login` を実行してGitHub認証
2. `gh repo create minna-no-kaigo-ai --public --push --source=.` でリポジトリ作成＆プッシュ
3. `npx vercel --prod` でVercelにデプロイ
4. デプロイ完了後、Vercelの公開URLを確認して本番稼働
