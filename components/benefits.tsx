import { Clock, Wallet, CheckCircle, Heart } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "記録時間 最大80%短縮",
    description: "15分→3分",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Wallet,
    title: "残業削減による人件費抑制",
    description: "コスト削減",
    color: "text-secondary",
    bgColor: "bg-secondary/20",
  },
  {
    icon: CheckCircle,
    title: "記録品質の均一化",
    description: "誰が書いても高品質",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "書類ストレス軽減",
    description: "離職率低下に貢献",
    color: "text-secondary",
    bgColor: "bg-secondary/20",
  },
]

export function Benefits() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className={`${benefit.bgColor} p-4 rounded-full mb-4`}>
                <benefit.icon className={`h-7 w-7 ${benefit.color}`} />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base mb-1">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
