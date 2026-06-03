import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { AiAnxiety } from "@/components/ai-anxiety"
import { BeforeAfter } from "@/components/before-after"
import { ThreeSteps } from "@/components/three-steps"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <AiAnxiety />
        <BeforeAfter />
        <ThreeSteps />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
