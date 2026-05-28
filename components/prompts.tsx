import { CheckCircle2, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

type PromptItem = {
  label: string
  free: boolean
}

type PromptGroup = {
  groupLabel: string
  groupTag: string
  tagStyle: string
  items: PromptItem[]
}

const promptGroups: PromptGroup[] = [
  {
    groupLabel: "無料",
    groupTag: "無料",
    tagStyle: "bg-secondary/15 text-secondary",
    items: [
      { label: "食事場面の介護記録", free: true },
      { label: "申し送り文の作成", free: true },
      { label: "服薬場面の記録", free: true },
    ],
  },
  {
    groupLabel: "ver1 有料",
    groupTag: "ver1",
    tagStyle: "bg-primary/10 text-primary",
    items: [
      { label: "排泄場面の介護記録", free: false },
      { label: "入浴場面の介護記録", free: false },
      { label: "トラブル・転倒記録", free: false },
      { label: "ヒヤリハット報告書", free: false },
    ],
  },
  {
    groupLabel: "ver2 有料",
    groupTag: "ver2",
    tagStyle: "bg-orange-100 text-orange-600",
    items: [
      { label: "苦情受付票", free: false },
      { label: "苦情対応経緯記録", free: false },
      { label: "苦情処理結果報告書", free: false },
      { label: "実地指導 自己点検チェックリスト", free: false },
      { label: "実地指導 改善報告書", free: false },
      { label: "実地指導 想定問答集", free: false },
    ],
  },
]

export function Prompts() {
  return (
    <section id="prompts" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              すぐに使える
              <span className="text-primary">プロンプト集</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              介護現場で実際に役立つプロンプトを厳選。
              コピー&ペーストするだけで、すぐにAIを活用できます。
            </p>

            <div className="space-y-6">
              {promptGroups.map((group) => (
                <div key={group.groupLabel}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${group.tagStyle}`}>
                      {group.groupTag}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">{group.groupLabel}</span>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        {item.free ? (
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        ) : (
                          <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-0.5" />
                        )}
                        <span className="text-base flex-1">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {["介護記録", "申し送り", "ヒヤリハット", "服薬", "苦情対応"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#fce7f3", color: "#be185d" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                プロンプト集を手に入れる
              </Button>
            </div>
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
