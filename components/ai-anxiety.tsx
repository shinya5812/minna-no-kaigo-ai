const anxieties = [
  {
    question: "難しそうで、自分には無理かも",
    answer:
      "むずかしい操作はありません。やることは、スマホやパソコンに文章を打つだけ。LINEやメールを送るのと同じ感覚です。",
  },
  {
    question: "利用者さんの情報を入れても大丈夫？",
    answer:
      "介護記録や申し送りを作るときは、氏名や住所などの個人情報は入力しないようにしましょう。このサイトでは、個人情報を守りながらAIを活用する方法も分かりやすく紹介しています。",
  },
  {
    question: "操作を間違えたり、お金がかかったりしない？",
    answer:
      "まずは無料でお試しいただけます。スマホやパソコンで文章を入力するだけなので、特別な設定や難しい操作は必要ありません。安心してお試しください。",
  },
  {
    question: "変な文章になったり、勝手に作り話をされない？",
    answer:
      "AIは、あなたが入力した内容をもとに文章を整えます。ただし、言葉を分かりやすく言い換えたり、文章として読みやすく整えることがあります。大切な記録は、必ず最後に内容を確認してからご利用ください。",
  },
]

export function AiAnxiety() {
  return (
    <section className="py-16 bg-white border-t border-pink-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug" style={{ color: "#1e3a5f" }}>
            AIって難しそう…
            <br />
            <span style={{ color: "#2d7a4f" }}>そう思っている方へ</span>
          </h2>
          <p className="mt-5 text-base text-gray-600 leading-relaxed">
            スマホでメッセージを打てる方なら、もう使えます。
            <br />
            「いつ・誰に・何があったか」をメモするだけで、記録の文章はAIが整えてくれます。
          </p>
        </div>

        <p className="text-sm font-semibold text-center mb-6" style={{ color: "#1e3a5f" }}>
          よくある4つの不安にお答えします
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {anxieties.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 border border-pink-100 bg-pink-50"
            >
              <p className="text-sm font-bold mb-3 flex items-start gap-2" style={{ color: "#be185d" }}>
                <span className="mt-0.5 flex-shrink-0">Q.</span>
                <span>「{item.question}」</span>
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
