import { FileText, MessageSquare, ClipboardList } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: FileText,
    title: "記録業務を時短",
    description: "AIで入力や要約をサポート。利用者さんの様子を話しかけるだけで、記録文が自動生成されます。",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageSquare,
    title: "情報共有がスムーズに",
    description: "申し送りや報告書の作成をAIがサポート。チーム全体での情報共有が簡単になります。",
    color: "text-secondary",
    bgColor: "bg-secondary/20",
  },
  {
    icon: ClipboardList,
    title: "ケアの質の向上に",
    description: "書類作業の時間を削減し、利用者様に向き合う時間をより多く確保できます。",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function Features() {
  return (
    <section id="features" className="py-12 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            AIで<span className="text-primary">できること</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            難しい操作は一切不要。介護現場で本当に役立つAI活用法をお伝えします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/30 transition-colors bg-white"
            >
              <CardHeader className="text-center pb-2 pt-5 px-5">
                <div className={`${feature.bgColor} p-3 rounded-full w-fit mx-auto mb-3`}>
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <CardTitle className="text-base text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <CardDescription className="text-sm text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
