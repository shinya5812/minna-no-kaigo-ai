import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  "食事場面の介護記録プロンプト",
  "排泄場面の介護記録プロンプト",
  "入浴場面の介護記録プロンプト",
  "トラブル・転倒記録プロンプト",
  "ヒヤリハット報告書プロンプト",
  "申し送り文の作成プロンプト",
  "服薬場面の記録プロンプト",
  "使い方マニュアル付き",
  "買い切り・追加料金なし",
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

        <div className="max-w-md mx-auto">
          <Card className="relative border-2 border-primary shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
            
            <CardHeader className="text-center pt-8">
              <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 mx-auto">
                <Sparkles className="h-4 w-4" />
                一番人気
              </div>
              <CardTitle className="text-2xl text-foreground">プロンプト集フルセット</CardTitle>
              <CardDescription className="text-muted-foreground">
                介護現場で使えるすべてのプロンプト
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">¥2,980</span>
                <span className="text-muted-foreground ml-2">（税込）</span>
                <p className="text-sm text-primary mt-2 font-medium">買い切り価格</p>
              </div>

              <ul className="space-y-4 text-left mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-secondary/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                今すぐ購入する
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                クレジットカード・銀行振込対応
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
