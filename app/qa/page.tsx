export const metadata = {
  title: "よくある質問 | みんなの介護AI",
  description: "みんなの介護AIのプロンプト集に関するよくある質問と、AIを使う際の注意点をまとめています。",
};

const faqs = [
  {
    q: "パソコンが苦手でも使えますか？",
    a: "はい、大丈夫です。スマートフォンからも使えます。「コピーして貼り付けるだけ」の手順書が付いています。",
  },
  {
    q: "ChatGPTのアカウントは必要ですか？",
    a: "ChatGPT（無料版）またはClaudeをご利用いただけます。無料アカウントの作り方もマニュアルに含まれています。",
  },
  {
    q: "施設のルールに合わせてカスタマイズできますか？",
    a: "はい。施設名・文体・記録形式に合わせたカスタマイズ方法の解説資料も同封しています。",
  },
  {
    q: "購入後はどうやって受け取りますか？",
    a: "購入完了後、登録メールアドレスにダウンロードリンクをお送りします。PDF形式でお届けします。",
  },
  {
    q: "返金はできますか？",
    a: "デジタルコンテンツの性質上、購入後の返金は承っておりません。ご不明な点は購入前にお問い合わせください。",
  },
  {
    q: "AIを使ったことがないのですが、使えますか？",
    a: "はい、大丈夫です。プロンプト集には「コピーして貼り付けるだけ」の手順書が付いています。スマートフォンからも使えます。",
  },
  {
    q: "どのAIサービスを使えばいいですか？",
    a: "ChatGPT（無料版）またはClaudeでご利用いただけます。無料のアカウントを作るところからサポートする資料も同封しています。",
  },
  {
    q: "スマートフォンでも使えますか？",
    a: "はい、iPhoneでもAndroidでもご利用いただけます。PCがなくても大丈夫です。",
  },
  {
    q: "個人情報を入力する欄はありますか？",
    a: "決済はStripeが行うため、クレジットカード情報は当サイトには渡りません。メールアドレスのみご登録いただきます。",
  },
  {
    q: "プロンプト集はどのくらいの量がありますか？",
    a: "介護記録・申し送りプロンプト集は30本以上のプロンプトを収録しています。用途別に整理されているので、必要なものをすぐに探せます。",
  },
  {
    q: "施設だけでなく訪問介護でも使えますか？",
    a: "はい、訪問介護・通所介護・施設介護・グループホームなど、幅広い現場を想定して作成しています。",
  },
];

const cautionFaqs = [
  {
    q: "利用者の個人情報をAIに入力しても大丈夫ですか？",
    a: "個人名・住所・施設名などの個人情報は入力しないことを推奨します。「田中様」→「利用者様」のように置き換えてからAIに送信してください。このサイトのプロンプトは個人情報なしでも十分な記録文が生成できるよう設計されています。",
  },
  {
    q: "AIが生成した文章をそのまま記録に使っていいですか？",
    a: "必ず内容を確認・修正してから使用してください。AIは事実と異なる内容を生成することがあります。最終的な記録の責任は職員にあります。",
  },
  {
    q: "ChatGPTとClaudeはどちらがおすすめですか？",
    a: "どちらも無料で使い始められます。ChatGPTはアカウント登録後すぐに使えます。Claudeは日本語の自然さに優れています。まずはどちらか一方から試してみてください。",
  },
];

export default function QAPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 style={{ color: "#1e3a5f" }} className="text-4xl font-bold mb-4">
        よくある質問
      </h1>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        ご購入やご利用に関するよくあるご質問をまとめました。
        <br />
        解決しない場合はお気軽にお問い合わせください。
      </p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
          >
            <p className="font-bold text-lg mb-3 flex items-start gap-2">
              <span style={{ color: "#2d7a4f" }} className="shrink-0">Q.</span>
              <span style={{ color: "#1e3a5f" }}>{faq.q}</span>
            </p>
            <p className="text-gray-700 text-base leading-relaxed pl-6">{faq.a}</p>
          </div>
        ))}
      </div>

      {/* AIを使う際の注意点 */}
      <div id="caution" className="mt-16">
        <h2 style={{ color: "#1e3a5f" }} className="text-2xl font-bold mb-6">
          AIを使う際の注意点
        </h2>
        <div className="space-y-6">
          {cautionFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-amber-200 rounded-xl p-6 bg-amber-50 shadow-sm"
            >
              <p className="font-bold text-lg mb-3 flex items-start gap-2">
                <span style={{ color: "#d97706" }} className="shrink-0">Q.</span>
                <span style={{ color: "#1e3a5f" }}>{faq.q}</span>
              </p>
              <p className="text-gray-700 text-base leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ backgroundColor: "#e8f5ee" }}
        className="mt-14 rounded-xl p-8 text-center"
      >
        <p className="text-lg font-bold mb-2" style={{ color: "#1e3a5f" }}>
          その他のご質問
        </p>
        <p className="text-gray-600 mb-4">
          上記に該当しないご質問は、メールにてお気軽にどうぞ。
        </p>
        <a
          href="mailto:shinya.wa5812@gmail.com"
          style={{ backgroundColor: "#1e3a5f" }}
          className="inline-block text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          メールでお問い合わせ
        </a>
      </div>
    </div>
  );
}
