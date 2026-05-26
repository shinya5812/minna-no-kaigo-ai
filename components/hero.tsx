import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div>
      {/* ヒーロー＋プロンプト説明を1つのdivで囲み隙間をゼロにする */}
      <div className="relative">

        {/* ヒーローセクション */}
        <div className="relative overflow-hidden">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/0" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-0 md:pt-24">
            <div className="max-w-xl pb-16 md:pb-24">
              <div className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600 mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                介護の仕事を、もっとラクに、もっと笑顔に。
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                AIで業務を軽減して、
                <br />
                <span className="text-pink-500">利用者さんと向き合う時間</span>
                <br />
                を取り戻す。
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                記録業務の時短、情報共有の効率化、ケアの質の向上に。
                <br className="hidden sm:block" />
                AIを味方にして、介護の現場をより良くしていきましょう。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white text-base px-8">
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
        </div>

        {/* プロンプト説明画像：ヒーローに完全密着 */}
        <div style={{marginTop: 0, paddingTop: 0, lineHeight: 0}}>
          <Image
            src="/prompt-explain.png"
            alt="プロンプトとは？AIへのお願い文のことです"
            width={1400}
            height={933}
            className="w-full h-auto block"
            style={{display: 'block', verticalAlign: 'bottom'}}
          />
        </div>

      </div>
    </div>
  )
}
