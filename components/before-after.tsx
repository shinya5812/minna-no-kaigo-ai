const cards = [
  {
    title: "介護記録",
    before: "「今日は元気。朝食ほぼ完食。入浴も嫌がらずできた。」",
    after: "「本日は表情穏やかで、朝食をほぼ完食された。入浴介助も拒否なく問題なく実施した。」",
    label: "記録時間 15分 → 3分",
  },
  {
    title: "申し送り",
    before: "「田中さん、14時頃に右膝が痛いって言ってた。歩くの少し辛そうだった。夜勤よろしく。」",
    after: "「田中様、14時頃に右膝の痛みを訴えた。歩行時にやや辛そうな様子あり。夜間も状態観察をお願いします。」",
    label: "引き継ぎ漏れ → ゼロ",
  },
  {
    title: "ヒヤリハット",
    before: "「田中さんが廊下で転びそうになった。近くにいた職員が支えて転倒は防げた。センサーマットを置いた方がいいかも。」",
    after: "「【発生状況】廊下にて歩行中にバランスを崩しそうになった。近くにいた職員が支え転倒には至らなかった。【再発防止策】センサーマット設置を検討する。」",
    label: "報告書作成 20分 → 5分",
  },
]

export function BeforeAfter() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-10">
          AIを使うと<span className="text-primary">こう変わります</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden flex flex-col"
            >
              <div className="px-5 pt-5 pb-3 flex-1">
                <p className="text-sm font-bold text-foreground mb-4">{card.title}</p>

                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-400 tracking-wide">Before</span>
                  <div className="mt-1.5 bg-gray-100 rounded-lg p-3">
                    <p className="text-sm text-gray-500 leading-relaxed">{card.before}</p>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-primary tracking-wide">After（AI使用後）</span>
                  <div className="mt-1.5 bg-pink-50 rounded-lg p-3">
                    <p className="text-sm text-primary leading-relaxed">{card.after}</p>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <span className="inline-block text-xs font-semibold bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
