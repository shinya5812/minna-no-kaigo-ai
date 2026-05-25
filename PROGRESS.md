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
