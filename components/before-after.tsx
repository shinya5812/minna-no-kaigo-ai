const afterCards = [
  {
    icon: "📋",
    label: "介護記録",
    bg: "#fce7f3",
    labelColor: "#be185d",
    text: "本日、入浴介助を実施。右膝に発赤を確認した。歩行時にふらつきが見られた。",
  },
  {
    icon: "🔄",
    label: "申し送り",
    bg: "#e8f5ee",
    labelColor: "#2d7a4f",
    text: "田中様、右膝に発赤あり。歩行時にふらつきがあるため、見守りをお願いします。",
  },
  {
    icon: "👪",
    label: "家族への報告",
    bg: "#fff7ed",
    labelColor: "#c2410c",
    text: "本日の入浴の際、右膝に少し赤みが見られました。歩行も少し不安定なご様子でした。気になる点があればご相談ください。",
  },
]

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-16 bg-pink-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* 見出し */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            1回入力するだけで、<span className="text-primary">必要な書類が一度に完成</span>
          </h2>
          <p className="mt-3 text-base text-gray-500">
            同じことを何度も書き写す手間が、なくなります
          </p>
        </div>

        {/* Before */}
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-semibold text-center text-gray-400 tracking-widest mb-3">
            入力するのは、これだけ
          </p>
          <div
            className="rounded-2xl px-6 py-5 flex items-start gap-3 shadow-sm"
            style={{ backgroundColor: "#e8f5ee" }}
          >
            <span className="text-xl leading-none mt-0.5">📝</span>
            <div>
              <p className="text-xs font-semibold mb-1.5" style={{ color: "#2d7a4f" }}>
                入力
              </p>
              <p className="text-base font-medium text-gray-800">
                「田中さん 入浴 右膝に赤み 歩行ふらつき」
              </p>
            </div>
          </div>
        </div>

        {/* 矢印 */}
        <div className="flex flex-col items-center gap-1 my-6 text-gray-400">
          <div className="w-px h-6 bg-gray-300" />
          <p className="text-sm font-semibold px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500">
            ↓ AIが一度に作成 ↓
          </p>
          <div className="w-px h-4 bg-gray-300" />
          {/* 3本の枝線（デスクトップ） */}
          <div className="hidden md:flex items-end gap-0 w-full max-w-3xl relative h-6">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gray-300" />
            <div className="absolute left-1/6 top-full -translate-x-1/2 w-[34%] h-px bg-gray-300" />
            <div className="absolute right-1/6 top-full translate-x-1/2 w-[34%] h-px bg-gray-300" />
          </div>
        </div>

        {/* After 3枚 */}
        <div className="grid md:grid-cols-3 gap-4 md:mt-2">
          {afterCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl px-5 py-5 shadow-sm flex flex-col gap-2"
              style={{ backgroundColor: card.bg }}
            >
              <p className="text-xs font-semibold flex items-center gap-1.5" style={{ color: card.labelColor }}>
                <span>{card.icon}</span>
                {card.label}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* 実績バッジ */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            "記録時間を最大80%短縮",
            "誰が書いても同じ品質に",
            "書類ストレスを大幅に軽減",
          ].map((stat) => (
            <span
              key={stat}
              className="text-xs font-medium px-4 py-1.5 rounded-full border border-pink-200 bg-white text-gray-500"
            >
              ✓ {stat}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
