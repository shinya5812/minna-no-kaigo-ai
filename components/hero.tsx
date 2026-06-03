import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "right center" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10" />
      </div>
      {/* 下端をpink-50へ溶け込ませるオーバーレイ */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-pink-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="mr-2 h-4 w-4" />
            ChatGPT・Claude対応　介護記録サポート
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
            書類仕事を減らして、
            <br />
            <span className="text-primary">利用者さんと向き合う時間を取り戻す。</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            AIが介護記録や申し送りの文章作成をお手伝いします。
          </p>
          {/* 訴求テキスト */}
          <p className="mt-5 text-sm font-medium" style={{ color: "#15803d" }}>
            ✓ 無料テンプレートあり　✓ 登録不要　✓ 初心者歓迎
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 min-h-[44px]">
              まずはAIを知る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-2 min-h-[44px]">
              無料で試す
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
