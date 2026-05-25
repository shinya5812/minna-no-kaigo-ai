import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Features } from "@/components/features"
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
        <Benefits />
        <Features />
        <Prompts />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
