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

## 2026-05-26（追記）

### 完了タスク
- ヒーローキャッチコピー変更：「書類仕事を減らして、」→「AIで業務を軽減して、」
- チェックマークテキスト削除（「✓ ITが苦手でも大丈夫　✓ やさしく学べます」）
- `prompt-explain.png` 追加（`web_data/` からコピー）・ヒーロー直下に配置（後にrevert）
- 「こんなことありませんか？」セクション新規追加（`components/pain-points.tsx`）
  - 薄ピンク背景・6項目❌リスト・末尾に「それ、AIで解決できます。」
  - `app/page.tsx` に PainPoints コンポーネントを追加（Hero直後・Benefits前）
- `components/features.tsx` カードサイズ縮小（py-20→py-12、アイコン h-8→h-5）
- hero.tsx の `prompt-explain.png` セクション：横幅・余白をヒーローと統一する試みを複数回実施
  - 隙間の根本原因：`min-h-[520px]` によるセクション強制拡張と判明 → 削除で解消
  - prompt-explain.png を最終的に削除し、ヒーローを背景画像版のシンプル構成に戻した
- `hero-bg.png` のサイズ確認：1983 × 793 px（横長・1.2MB）

### 現在の状態
- `components/hero.tsx`：背景画像版（hero-bg.png + グラデーション）のシンプル構成に復元
- `components/pain-points.tsx`：新規追加済み・稼働中
- `components/features.tsx`：カードサイズ縮小版
- `public/prompt-explain.png`：ファイルは存在するが hero.tsx からは参照されていない
- ビルド：全5ページ静的生成・エラーなし
- git push：最新コミット `0187710` まで反映済み

### 次のアクション
- prompt-explain.png をどこに・どう使うか方針決定（ヒーロー直下 or 別セクション）
- Stripe決済の組み込み（購入ボタンに決済リンクを追加）
- OGP・favicon設定（SNSシェア時の見栄え）
- お問い合わせメールアドレスを本番用に変更（現在 info@example.com）
- Vercel の GitHub 自動デプロイ連携設定（現在は手動デプロイ）

---

## 2026-05-27

### 完了タスク
- `components/pain-points.tsx`：3項目追加（計9項目に）＋「それ→すべて、AIで解決できます。」に変更
  - 追加項目：「職員によって記録の質にバラつきがある」「新人の記録を毎回添削するのが大変」「実地指導で記録の不備を指摘されたことがある」
- `components/pricing.tsx`：4プラン構成に全面変更（無料 / ver1 ¥2,980 / ver2 ¥1,980 / セット ¥3,980）
- `components/prompts.tsx`：3グループ構成に変更（無料3本 / ver1有料4本 / ver2有料6本）
- `components/features.tsx`：3カードのタイトル・説明文を更新（「記録を標準化」「管理業務を効率化」）
- `scripts/generate_pdfs.py`：PDF生成スクリプト新規作成（fpdf2 + BIZ-UDGothic使用）
- `public/downloads/`：3点PDFを生成（free / ver1 / ver2）
  - カラー：ピンク（#f472b6）×黄緑（#86efac）×白、A4縦、BIZ-UDGothicフォント
  - 構成：表紙（ロゴ）＋はじめに＋プロンプト本文＋有料版案内
- PDF表紙タイトル修正：ピンク背景を165mmに拡大・白32pt・中央やや上に配置（白文字が薄ピンク背景に埋もれる問題を解消）
- `components/hero.tsx`：ファーストビューのコピー刷新
  - バッジ：「ChatGPT・Claude対応　介護専用プロンプト集」
  - h1：「介護の書類仕事を、AIで10分に。」
  - サブコピー：プロンプト集の具体的説明文に変更

### 結果・数値
- ビルド：全5ページ静的生成・エラーなし（各変更後確認済み）
- PDF：3ファイル生成（free: 348KB / ver1: 351KB / ver2: 366KB）
- git push：`6616c78` まで反映済み

### 現在の状態
- PDFは `public/downloads/` に保存済み → Vercel デプロイ後に `/downloads/free-prompts.pdf` 等でアクセス可能
- 全購入ボタンは `disabled`（準備中）状態
- Vercel：GitHub push → 自動デプロイ中

### 次のアクション
- Stripe決済の組み込み（購入ボタンに決済リンクを追加）
- ダウンロードボタンのリンク設定（`/downloads/free-prompts.pdf`）
- OGP・favicon設定（SNSシェア時の見栄え）
- お問い合わせメールアドレスを本番用に変更（現在 info@example.com）

---

## 2026-05-26（追記2）

### 完了タスク
- `prompt-explain.png` を `web_data/` → `public/` へコピーし hero.tsx 直下に配置（v2）
  - `</section>` 直後に `<Image>` ブロックを追加（React Fragment でラップ）
  - `lineHeight:0 / fontSize:0 / display:block` で隙間ゼロ対応
- ヒーロー下端の色をプロンプト画像背景（`#fdf2f8`）に合わせてグラデーション調整
  - `<section>` に `bg-gradient-to-b from-white to-pink-50` 追加
  - 下端 `h-24` の `from-transparent to-pink-50` オーバーレイを追加（画像上にも適用）
- ビルド確認：`✓ Compiled successfully`・全5ページ静的生成エラーなし
- git push：`befb204` まで反映済み

### 現在の状態
- `components/hero.tsx`：ヒーロー（背景画像）→ 下端ピンクフェード → prompt-explain.png の順
- ヒーロー下端とプロンプト画像の背景色（`#fdf2f8`）を揃えて隙間を目立たなくした構成
- 本番URL: https://minna-no-kaigo-ai.vercel.app（GitHub push → Vercel 自動デプロイ中）

### 次のアクション
- Stripe決済の組み込み（購入ボタンに決済リンクを追加）
- OGP・favicon設定（SNSシェア時の見栄え）
- お問い合わせメールアドレスを本番用に変更（現在 info@example.com）
- Vercel の GitHub 自動デプロイ連携確認

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
