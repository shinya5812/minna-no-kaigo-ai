import { Clock, Copy, BookOpen, FileText, GraduationCap } from "lucide-react"

const items = [
  { icon: Clock,          text: "AIで介護記録を時短する" },
  { icon: Copy,           text: "コピペOKのプロンプトを使う" },
  { icon: BookOpen,       text: "ChatGPT・Claudeの使い方を学ぶ" },
  { icon: FileText,       text: "申し送り・ヒヤリハットを自動生成する" },
  { icon: GraduationCap,  text: "介護DXの基礎知識を身につける" },
]

export function SiteIntro() {
  return (
    <section className="py-12 bg-white border-b border-pink-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-8">
          このサイトで<span className="text-primary">できること</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center gap-2 p-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-foreground font-medium leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
