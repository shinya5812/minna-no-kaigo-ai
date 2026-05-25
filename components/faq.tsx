import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "パソコンが苦手でも使えますか？",
    answer: "はい、大丈夫です。スマートフォンからも使えます。「コピーして貼り付けるだけ」の手順書が付いています。",
  },
  {
    question: "ChatGPTのアカウントは必要ですか？",
    answer: "ChatGPT（無料版）またはClaudeをご利用いただけます。無料アカウントの作り方もマニュアルに含まれています。",
  },
  {
    question: "施設のルールに合わせてカスタマイズできますか？",
    answer: "はい。施設名・文体・記録形式に合わせたカスタマイズ方法の解説資料も同封しています。",
  },
  {
    question: "購入後はどうやって受け取りますか？",
    answer: "購入完了後、登録メールアドレスにダウンロードリンクをお送りします。PDF形式でお届けします。",
  },
  {
    question: "返金はできますか？",
    answer: "デジタルコンテンツの性質上、購入後の返金は承っておりません。ご不明な点は購入前にお問い合わせください。",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            よくある<span className="text-primary">ご質問</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground font-medium text-base hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
