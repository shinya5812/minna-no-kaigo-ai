# CLAUDE.md — AI_sale_project

## プロジェクト概要

介護・福祉向けAI活用支援サイト。  
プロンプト集のStripe直販を収益モデルとする。

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 16.2.6（App Router） |
| スタイリング | Tailwind CSS v4 + shadcn/ui |
| 決済 | Stripe（プロンプト集の直販） |
| 格納場所 | `C:\Users\shiny\Dropbox\shinya_wa\AI_sale_project\` |
| 本番URL | https://minna-no-kaigo-ai.vercel.app |
| GitHub | https://github.com/shinya5812/minna-no-kaigo-ai |
| パッケージマネージャー | pnpm |
| デプロイ | `npx vercel --prod --yes`（手動）|

---

## ディレクトリ構成

```
AI_sale_project/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   ├── kaigo/              # 介護・福祉 業種トップ
│   │   └── page.tsx
│   ├── qa/                 # Q&Aページ
│   │   └── page.tsx
│   └── roadmap/            # ロードマップページ
│       └── page.tsx
├── components/             # 共通コンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── public/                 # 静的ファイル
├── CLAUDE.md               # このファイル
└── PROGRESS.md             # 作業ログ
```

---

## デザイン方針

- **ターゲット**: 40〜50代の介護従事者
- **フォント**: 大きめ（本文16px以上、見出し24px以上）
- **カラーパレット**:
  - メイン: 紺（`#1e3a5f` 系）
  - アクセント: 緑（`#2d7a4f` 系）
  - 背景: 白・薄グレー
- **アニメーション**: 派手なものは使用しない
- **構成**: シンプル・清潔感・信頼感を優先

---

## ページ一覧

| パス | 内容 | 状態 |
|------|------|------|
| `/` | トップページ（サイト全体説明） | 作成済み |
| `/kaigo` | 介護・福祉 業種トップ | 作成済み |
| `/qa` | Q&Aページ | 骨格のみ |
| `/roadmap` | ロードマップページ | 骨格のみ |

---

## 収益モデル

- プロンプト集（PDF or Notion）をStripeで直販
- 業種別に商品を分ける予定
- 最初は介護・福祉向けから展開

---

## 開発ルール

- コンポーネントはTypeScriptで記述（`.tsx`）
- スタイルはTailwind CSSのユーティリティクラスのみ使用（`style=` 直書き禁止）
- ファイルエンコードはUTF-8
- `'use client'` はインタラクティブ要素のみに限定する

---

## 実行コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番起動
npm run start
```

---

## 言語・出力

- 常に日本語で回答する
- コードの変数名・関数名は英語
- コメントは日本語可

---

## セッション終了コマンド

`/wrapup` と入力された場合、以下を実行する：

1. 本日の作業内容をPROGRESS.mdに追記
   - 完了したタスク
   - 現在の状態
   - 次回の再開手順

2. 未コミットの変更があればコミット
   git add .
   git commit -m "wrapup: [作業内容の要約]"

3. 以下を出力して終了
   「作業を終了しました。次回は[次のステップ]から再開してください。」
