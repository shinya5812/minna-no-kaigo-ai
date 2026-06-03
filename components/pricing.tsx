import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const plans = [
  {
    id: "free",
    label: null,
    title: "無料版",
    price: "0",
    unit: "円",
    description: "まず試してみたい方に",
    features: [
      "記録系テンプレート（基本3種）",
      "穴埋め入力ガイド",
      "AI入門ガイド",
    ],
    buttonLabel: "無料でダウンロード",
    buttonNote: "",
    highlight: false,
    comingSoon: false,
  },
  {
    id: "record",
    label: "記録パック",
    title: "記録パック",
    price: "1,280",
    unit: "円（買い切り）",
    description: "毎日の記録・申し送りをまとめてカバー",
    features: [
      "1つのメモから「記録・申し送り・家族報告」を同時作成",
      "汎用テンプレート＋場面特化の計5本",
      "使い方マニュアル付き",
    ],
    buttonLabel: "購入する",
    buttonNote: "準備中",
    highlight: false,
    comingSoon: true,
  },
  {
    id: "compliance",
    label: "コンプライアンス",
    title: "コンプライアンス・監査パック",
    price: "3,980",
    unit: "円（買い切り）",
    description: "苦情対応・実地指導対策をカバー",
    features: [
      "苦情受付票・経緯記録・処理報告書（計3本）",
      "実地指導 自己点検・改善報告・想定問答（計3本）",
      "ヒヤリハット報告書（1本）",
      "使い方マニュアル付き",
    ],
    buttonLabel: "購入する",
    buttonNote: "準備中",
    highlight: true,
    comingSoon: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            シンプルな<span className="text-primary">料金プラン</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            買い切り価格で、ずっと使えます。追加料金は一切ありません。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col overflow-hidden ${
                plan.highlight
                  ? "border-2 border-primary shadow-xl"
                  : "border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary" />
              )}

              <CardHeader className="pt-6 pb-2 px-5">
                {plan.label && (
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-medium mb-3 w-fit">
                    <Sparkles className="h-3 w-3" />
                    {plan.label}
                  </div>
                )}
                <CardTitle className="text-base text-foreground leading-snug">{plan.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="px-5 pb-6 flex flex-col flex-1">
                <div className="mb-5">
                  <span className="text-3xl font-bold text-foreground">¥{plan.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">{plan.unit}</span>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-0.5 bg-secondary/20 rounded-full p-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-secondary" />
                      </div>
                      <span className="text-sm text-foreground leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {plan.comingSoon ? (
                    <Button
                      size="sm"
                      disabled
                      className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                    >
                      {plan.buttonLabel}
                    </Button>
                  ) : (
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <a href="/downloads/free-prompts.pdf" download>
                        {plan.buttonLabel}
                      </a>
                    </Button>
                  )}
                  {plan.buttonNote && (
                    <p className="text-xs text-muted-foreground text-center mt-1.5">（{plan.buttonNote}）</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
