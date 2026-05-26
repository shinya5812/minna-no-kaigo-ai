const painPoints = [
  "介護記録を書くのに時間がかかって残業が続いている",
  "申し送りや報告書の文章がうまくまとめられない",
  "ヒヤリハット報告書の書き方がわからない",
  "夜勤明けに大量の書類仕事が残っている",
  "利用者さんと話す時間より書類仕事の時間の方が長い",
  "新人スタッフの記録の質がバラバラで困っている",
  "職員によって記録の質にバラつきがある",
  "新人の記録を毎回添削するのが大変",
  "実地指導で記録の不備を指摘されたことがある",
]

export function PainPoints() {
  return (
    <section className="py-14" style={{ backgroundColor: "#fdf2f8" }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
          こんなことありませんか？
        </h2>

        <ul className="space-y-4">
          {painPoints.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm"
            >
              <span className="text-xl leading-none mt-0.5">❌</span>
              <span className="text-base text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xl sm:text-2xl font-bold" style={{ color: "#c0507a" }}>
          それ、AIで解決できます。
        </p>
      </div>
    </section>
  )
}
