import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SiteIntro } from "@/components/site-intro"
import { PainPoints } from "@/components/pain-points"
import { Benefits } from "@/components/benefits"
import { Features } from "@/components/features"
import { BeforeAfter } from "@/components/before-after"
import { Prompts } from "@/components/prompts"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SiteIntro />
        <PainPoints />
        <Benefits />
        <Features />
        <BeforeAfter />
        <Prompts />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
