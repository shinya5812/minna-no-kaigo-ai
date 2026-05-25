export const metadata = {
  title: "ロードマップ | 介護AIナビ",
  description: "介護AIナビの今後の展開・追加予定コンテンツのロードマップです。",
};

const roadmapItems = [
  {
    phase: "Phase 1",
    period: "2026年6月〜",
    title: "介護・福祉向けプロンプト集リリース",
    items: [
      "介護記録・申し送りプロンプト集（販売開始）",
      "AIの始め方ガイド（無料配布）",
      "Q&Aページ整備",
    ],
    status: "進行中",
  },
  {
    phase: "Phase 2",
    period: "2026年8月〜",
    title: "コンテンツ拡充",
    items: [
      "ケアプラン文章作成プロンプト集",
      "利用者家族向け説明文プロンプト集",
      "使い方動画の追加",
    ],
    status: "予定",
  },
  {
    phase: "Phase 3",
    period: "2026年10月〜",
    title: "業種拡大・機能追加",
    items: [
      "医療・看護向けプロンプト集",
      "障がい福祉向けプロンプト集",
      "会員制プランの検討",
    ],
    status: "検討中",
  },
];

const statusColor: Record<string, string> = {
  進行中: "#2d7a4f",
  予定: "#1e3a5f",
  検討中: "#888",
};

export default function RoadmapPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 style={{ color: "#1e3a5f" }} className="text-4xl font-bold mb-4">
        ロードマップ
      </h1>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        介護AIナビの今後の展開予定です。
        <br />
        現場の声をもとに、随時更新していきます。
      </p>

      <div className="space-y-8">
        {roadmapItems.map((item) => (
          <div
            key={item.phase}
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-sm font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: statusColor[item.status] }}
              >
                {item.status}
              </span>
              <span className="text-sm font-semibold text-gray-500">
                {item.phase} | {item.period}
              </span>
            </div>
            <h2
              style={{ color: "#1e3a5f" }}
              className="text-2xl font-bold mb-4"
            >
              {item.title}
            </h2>
            <ul className="space-y-2">
              {item.items.map((line) => (
                <li key={line} className="flex items-center gap-2 text-gray-700">
                  <span style={{ color: "#2d7a4f" }}>▸</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{ backgroundColor: "#eef2f7" }}
        className="mt-14 rounded-xl p-8"
      >
        <p className="text-lg font-bold mb-2" style={{ color: "#1e3a5f" }}>
          こんなプロンプトが欲しい！というご要望があれば
        </p>
        <p className="text-gray-600 mb-4">
          現場のリアルな声を反映したコンテンツを作りたいと思っています。
          ご意見・ご要望はメールでお寄せください。
        </p>
        <a
          href="mailto:shinya.wa5812@gmail.com"
          style={{ backgroundColor: "#1e3a5f" }}
          className="inline-block text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          ご要望を送る
        </a>
      </div>
    </div>
  );
}
