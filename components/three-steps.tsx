const afterOutputs = [
  {
    icon: "📋",
    label: "介護記録",
    bg: "#fce7f3",
    labelColor: "#be185d",
    text: "田中様に対し入浴介助を実施した。本日は機嫌良く過ごされていた。介助中に転倒等の事故は見られなかった。食事摂取状況も良好で、しっかり召し上がられていた。",
  },
  {
    icon: "🔄",
    label: "申し送り",
    bg: "#e8f5ee",
    labelColor: "#2d7a4f",
    text: "田中様、本日は機嫌よく入浴介助を実施。転倒なし、食事も良好です。",
  },
  {
    icon: "👪",
    label: "家族への報告",
    bg: "#fff7ed",
    labelColor: "#c2410c",
    text: "本日はご機嫌よくお過ごしでした。お食事もしっかり召し上がっています。",
  },
]

export function ThreeSteps() {
  return (
    <section id="steps" className="py-16 bg-white border-t border-pink-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-12" style={{ color: "#1e3a5f" }}>
          使い方は簡単<span style={{ color: "#2d7a4f" }}>3ステップ</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* 左側：3ステップ説明 */}
          <div className="md:w-2/5 flex flex-col gap-6">
            {[
              {
                step: "1",
                title: "メモを書く",
                desc: "田中さん / 入浴 / 機嫌よかった / 転倒なし",
                note: "いつ・誰に・何があったか、短くメモするだけ",
              },
              {
                step: "2",
                title: "AIにお願いする",
                desc: "メモをAIに貼り付けてお願いするだけ",
                note: "コピー&ペーストで貼るだけ。操作はそれだけ",
              },
              {
                step: "3",
                title: "3つの書類が完成",
                desc: "介護記録・申し送り・家族報告が同時に出来上がり",
                note: "内容を確認して、必要な箇所だけ修正すればOK",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: "#2d7a4f" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-base" style={{ color: "#1e3a5f" }}>
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-700 mt-0.5">{item.desc}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 右側：入力例 → AI回答（3文書） */}
          <div className="md:w-3/5 flex flex-col gap-4">
            {/* 入力例 */}
            <div className="rounded-xl p-5" style={{ backgroundColor: "#e8f5ee" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "#2d7a4f" }}>
                AIへの頼み方（入力例）✏️
              </p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {`田中さんの入浴介助の記録を作って。\n\n・今日は機嫌よかった\n・転倒なし\n・食事もしっかり食べた`}
              </p>
            </div>

            {/* 矢印 */}
            <div className="text-center text-2xl text-gray-400 leading-none">↓</div>

            {/* AI回答例（3文書） */}
            <div className="rounded-xl p-5 flex flex-col gap-4" style={{ backgroundColor: "#fafafa", border: "1px solid #f3e8ff" }}>
              <p className="text-sm font-bold" style={{ color: "#be185d" }}>
                AIの回答例（3つ同時に作成）
              </p>
              {afterOutputs.map((output) => (
                <div key={output.label} className="rounded-lg p-3" style={{ backgroundColor: output.bg }}>
                  <p className="text-xs font-bold mb-1.5 flex items-center gap-1" style={{ color: output.labelColor }}>
                    <span>{output.icon}</span>
                    {output.label}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{output.text}</p>
                </div>
              ))}
            </div>

            {/* POINT */}
            <p className="text-sm font-semibold" style={{ color: "#be185d" }}>
              POINT：入力した内容をもとに文章を整えます。読みやすく言い換えることはありますが、大切な記録は最後に内容をご確認ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
