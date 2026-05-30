import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

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
            ChatGPT・Claude対応　介護専用プロンプト集
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
            介護の書類仕事を、
            <br />
            <span className="text-primary">AIで10分に。</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            ChatGPT・Claudeで使える介護専用プロンプト集を販売しています。
            <br className="hidden sm:block" />
            記録・報告書・申し送り・ヒヤリハット──
            <br className="hidden sm:block" />
            メモを入れるだけで、記録文が自動で完成します。
          </p>
          {/* 訴求テキスト */}
          <p className="mt-5 text-sm font-medium" style={{ color: "#15803d" }}>
            ✓ 無料プロンプト集あり　✓ 登録不要　✓ 初心者歓迎
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 min-h-[44px]">
              まずはAIを知る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-2 min-h-[44px]">
              無料プロンプトを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section className="py-14 bg-white border-b border-pink-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-10" style={{ color: "#1e3a5f" }}>
          プロンプトとは？
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* 左側：女性イラスト */}
          <div className="md:w-2/5 flex justify-center">
            <Image
              src="/hero-image.png"
              alt="介護士イラスト"
              width={400}
              height={500}
              className="w-full max-w-xs h-auto rounded-2xl"
            />
          </div>

          {/* 右側：入力例→AI回答例 */}
          <div className="md:w-3/5 flex flex-col gap-4">
            {/* プロンプト入力例ボックス */}
            <div className="rounded-xl p-5" style={{ backgroundColor: "#e8f5ee" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "#2d7a4f" }}>
                プロンプト入力例 ✏️
              </p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {`田中さんの入浴介助の記録を作って。\n\n・今日は機嫌よかった\n・転倒なし\n・食事もしっかり食べた`}
              </p>
            </div>

            {/* 矢印 */}
            <div className="text-center text-3xl text-gray-400 leading-none">↓</div>

            {/* AI回答例ボックス */}
            <div className="rounded-xl p-5" style={{ backgroundColor: "#fce7f3" }}>
              <p className="text-sm font-bold mb-3" style={{ color: "#be185d" }}>
                AIの回答例
              </p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {`【介護記録】\n田中様に対し入浴介助を実施した。\n本日は機嫌良く過ごされていた。\n介助中に転倒等の事故は見られなかった。\n食事摂取状況も良好で、しっかり召し上がられていた。`}
              </p>
            </div>

            {/* POINT注記 */}
            <p className="text-sm font-semibold" style={{ color: "#be185d" }}>
              POINT：入力した情報だけを使って文章を整えます。AIが勝手に事実を作ることはありません。
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
