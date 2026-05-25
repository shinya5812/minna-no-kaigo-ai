import Link from "next/link";

export const metadata = {
  title: "介護・福祉向けAIプロンプト集 | 介護AIナビ",
  description:
    "訪問介護・施設介護・グループホームなどの現場で即使えるAIプロンプト集。記録・報告書・ケアプランの下書きに。",
};

export default function KaigoPage() {
  return (
    <div>
      {/* ページヘッダー */}
      <section style={{ backgroundColor: "#e8f5ee" }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold mb-2" style={{ color: "#2d7a4f" }}>
            業種別プロンプト集
          </p>
          <h1 style={{ color: "#1e3a5f" }} className="text-4xl font-bold mb-4">
            介護・福祉向け
            <br />
            AIプロンプト集
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            毎日の業務記録、報告書、お知らせ文……
            <br />
            AIに任せて、利用者さんと向き合う時間を増やしましょう。
          </p>
        </div>
      </section>

      {/* こんな方におすすめ */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "#1e3a5f" }} className="text-3xl font-bold mb-8">
            こんな方におすすめ
          </h2>
          <ul className="space-y-4">
            {[
              "記録や報告書に時間がかかって残業が続いている",
              "文章を書くのが苦手で、表現に悩んでしまう",
              "ケアプランの文章をもう少しスムーズに作りたい",
              "ご家族へのお知らせ文を毎回ゼロから書いている",
              "AIに興味はあるけど、何から始めればいいかわからない",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: "#2d7a4f" }} className="text-xl mt-0.5">
                  ✓
                </span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 商品ラインナップ */}
      <section style={{ backgroundColor: "#eef2f7" }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "#1e3a5f" }} className="text-3xl font-bold mb-10">
            プロンプト集ラインナップ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard
              title="介護記録・申し送りプロンプト集"
              price="1,980円"
              description="日常記録・申し送り・ヒヤリハット報告書の下書きに使えるプロンプト30本以上を収録。"
              items={["日常記録（食事・排泄・入浴など）", "申し送り文", "ヒヤリハット・事故報告書", "家族への連絡文"]}
              status="販売中"
            />
            <ProductCard
              title="ケアプラン文章作成プロンプト集"
              price="2,480円"
              description="アセスメント記録からケアプランの長期・短期目標、サービス内容の文章作成を支援。"
              items={["長期・短期目標の文章", "サービス内容の記述", "モニタリング記録", "担当者会議の議事録"]}
              status="近日公開"
            />
          </div>
        </div>
      </section>

      {/* 使い方サンプル */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "#1e3a5f" }} className="text-3xl font-bold mb-8">
            使い方のイメージ
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-sm font-semibold text-gray-500 mb-2">
              例：ChatGPTに貼り付けるプロンプト
            </p>
            <div
              className="bg-white border border-gray-300 rounded-lg p-4 text-base text-gray-800 leading-relaxed font-mono"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {`以下の情報をもとに、介護記録の文章を作成してください。

【利用者】80代女性、要介護3
【状況】朝食は完食。午後に体調不良を訴えたため、バイタル測定を実施。
【バイタル】体温37.2℃、血圧128/78、脈拍82
【対応】安静にしてもらい、30分後に再測定。改善を確認。

※です・ます調で、200字程度にまとめてください。`}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              ↑ このような文章を、プロンプト集に沿って入力するだけです。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問リンク */}
      <section style={{ backgroundColor: "#1e3a5f" }} className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ご購入前にご質問がある方へ
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            「AIって難しそう」「スマホでも使えるの？」など、よくあるご質問をまとめました。
          </p>
          <Link
            href="/qa"
            className="inline-block border-2 border-white text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1e3a5f] transition-colors"
          >
            よくある質問を見る
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  title,
  price,
  description,
  items,
  status,
}: {
  title: string;
  price: string;
  description: string;
  items: string[];
  status: "販売中" | "近日公開";
}) {
  const isOnSale = status === "販売中";
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 style={{ color: "#1e3a5f" }} className="text-xl font-bold leading-snug flex-1 mr-3">
          {title}
        </h3>
        <span
          className="text-xs font-semibold px-2 py-1 rounded-full text-white shrink-0"
          style={{ backgroundColor: isOnSale ? "#2d7a4f" : "#888" }}
        >
          {status}
        </span>
      </div>
      <p className="text-2xl font-bold mb-3" style={{ color: "#2d7a4f" }}>
        {price}
        <span className="text-sm font-normal text-gray-500">（税込）</span>
      </p>
      <p className="text-gray-600 text-base mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-1 mb-6 flex-grow">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
            <span style={{ color: "#2d7a4f" }}>・</span>
            {item}
          </li>
        ))}
      </ul>
      {isOnSale ? (
        <button
          style={{ backgroundColor: "#2d7a4f" }}
          className="w-full text-white text-lg font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          購入する（Stripe）
        </button>
      ) : (
        <button
          disabled
          className="w-full bg-gray-200 text-gray-500 text-lg font-semibold py-3 rounded-lg cursor-not-allowed"
        >
          近日公開予定
        </button>
      )}
    </div>
  );
}
