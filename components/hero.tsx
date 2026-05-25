import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              介護の仕事を、もっとラクに、もっと笑顔に。
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
              書類仕事を減らして、
              <br />
              <span className="text-primary">利用者さんと向き合う時間</span>
              <br />
              を取り戻す。
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              記録業務の時短、情報共有の効率化、ケアの質の向上に。
              <br className="hidden sm:block" />
              AIを味方にして、介護の現場をより良くしていきましょう。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                初めての方へ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 border-2"
              >
                プロンプト集を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              ✓ ITが苦手でも大丈夫　✓ やさしく学べます
            </p>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/hero-image.png"
                alt="介護士と利用者"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">記録時間</p>
              <p className="text-2xl font-bold text-secondary">
                最大<span className="text-3xl">80</span>%短縮
              </p>
            </div>
          </div>

          {/* スマホ用画像（テキストの下に表示） */}
          <div className="relative lg:hidden mt-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] max-w-sm mx-auto">
              <Image
                src="/hero-image.png"
                alt="介護士と利用者"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -left-2 bg-white rounded-xl shadow-lg p-3 border border-border">
              <p className="text-xs text-muted-foreground mb-0.5">記録時間</p>
              <p className="text-xl font-bold text-secondary">
                最大<span className="text-2xl">80</span>%短縮
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
