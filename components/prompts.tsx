import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const promptList = [
  { label: "食事場面の介護記録", tag: "毎日使える" },
  { label: "排泄場面の介護記録", tag: "毎日使える" },
  { label: "入浴場面の介護記録", tag: "毎日使える" },
  { label: "トラブル・転倒記録", tag: "随時使える" },
  { label: "ヒヤリハット報告書", tag: "随時使える" },
  { label: "申し送り文の作成", tag: "毎日使える" },
  { label: "服薬場面の記録", tag: "毎日使える" },
]

export function Prompts() {
  return (
    <section id="prompts" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              すぐに使える
              <span className="text-primary">プロンプト集</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              介護現場で実際に役立つプロンプトを厳選。
              コピー&ペーストするだけで、すぐにAIを活用できます。
            </p>

            <ul className="space-y-4">
              {promptList.map((prompt, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-base flex-1">{prompt.label}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-medium whitespace-nowrap">
                    {prompt.tag}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              プロンプト集を手に入れる
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-border p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
                <div className="w-3 h-3 rounded-full bg-muted"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">プロンプト例</p>
                  <p className="text-foreground text-sm leading-relaxed">
                    以下の利用者様の今日の様子を、介護記録として200文字程度でまとめてください。
                    <br /><br />
                    ・午前中は穏やかに過ごされた
                    <br />
                    ・昼食は8割程度召し上がった
                    <br />
                    ・午後は少し眠そうにされていた
                  </p>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">AIの出力例</p>
                  <p className="text-foreground text-sm leading-relaxed">
                    本日、〇〇様は午前中穏やかに過ごされました。昼食はご飯、おかず共に8割程度召し上がり、食欲は良好です。午後になると少し眠気が見られましたが、声かけに対してはしっかりと反応されていました。体調面での変化は見られず、安定した一日を過ごされています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
