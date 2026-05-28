import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const plans = [
  {
    id: "free",
    label: null,
    title: "無料プラン",
    price: "0",
    unit: "円",
    description: "まず試してみたい方に",
    features: [
      "食事場面の介護記録プロンプト",
      "申し送り文の作成プロンプト",
      "服薬場面の記録プロンプト",
      "使い方マニュアル付き",
    ],
    buttonLabel: "無料でダウンロード",
    buttonNote: "",
    highlight: false,
  },
  {
    id: "ver1",
    label: "介護記録",
    title: "介護記録プロンプト集 ver1",
    price: "2,980",
    unit: "円（買い切り）",
    description: "日常の介護記録をカバー",
    features: [
      "排泄場面の介護記録",
      "入浴場面の介護記録",
      "トラブル・転倒記録",
      "ヒヤリハット報告書",
      "使い方マニュアル付き",
    ],
    buttonLabel: "購入する",
    buttonNote: "準備中",
    highlight: false,
  },
  {
    id: "ver2",
    label: "業務書類",
    title: "業務書類プロンプト集 ver2",
    price: "1,980",
    unit: "円（買い切り）",
    description: "管理・実地指導対応をカバー",
    features: [
      "苦情受付票",
      "苦情対応経緯記録",
      "苦情処理結果報告書",
      "実地指導 自己点検チェックリスト",
      "実地指導 改善報告書",
      "実地指導 想定問答集",
    ],
    buttonLabel: "購入する",
    buttonNote: "準備中",
    highlight: false,
  },
  {
    id: "set",
    label: "一番お得",
    title: "ver1＋ver2 セット",
    price: "3,980",
    unit: "円（買い切り）",
    description: "10本すべて収録・送料なし",
    features: [
      "上記10本すべて収録",
      "使い方マニュアル付き",
      "送料・追加料金なし",
    ],
    buttonLabel: "セットで購入する",
    buttonNote: "準備中",
    highlight: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            シンプルな<span className="text-primary">料金プラン</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            買い切り価格で、ずっと使えます。追加料金は一切ありません。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  {plan.id === "free" ? (
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <a href="/downloads/free-prompts.pdf" download>
                        {plan.buttonLabel}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className={`w-full ${
                        plan.highlight
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {plan.buttonLabel}
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
