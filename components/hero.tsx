import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <>
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
            介護の仕事を、もっとラクに、もっと笑顔に。
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
            AIで業務を軽減して、
            <br />
            <span className="text-primary">利用者さんと向き合う時間</span>
            <br />
            を取り戻す。
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            記録業務の時短、情報共有の効率化、ケアの質の向上に。
            <br className="hidden sm:block" />
            AIを味方にして、介護の現場をより良くしていきましょう。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8">
              <BookOpen className="mr-2 h-5 w-5" />
              初めての方へ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-2">
              プロンプト集を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    <div style={{lineHeight:0, fontSize:0, display:'block'}}>
      <Image
        src="/prompt-explain.png"
        alt="プロンプトとは？AIへのお願い文のことです"
        width={1456}
        height={816}
        className="w-full h-auto"
        style={{display:'block'}}
      />
    </div>
    </>
  )
}
