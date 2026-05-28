import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

const footerLinks = [
  { label: "ホーム", href: "#" },
  { label: "できること", href: "#features" },
  { label: "プロンプト集", href: "#prompts" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "AIの注意点（Q&A）", href: "/qa#caution" },
]

const legalLinks = [
  { label: "特定商取引法に基づく表記", href: "#" },
  { label: "プライバシーポリシー", href: "#" },
  { label: "利用規約", href: "#" },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#fdf2f8", color: "#4a4a4a" }} className="py-16 border-t border-pink-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" alt="みんなの介護AI" height={32} width={144} />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#7a7a7a" }}>
              介護現場のAI活用をやさしく解説。
              <br />
              書類仕事を減らして、利用者さんと向き合う時間を取り戻しましょう。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: "#4a4a4a" }}>サイトマップ</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary"
                    style={{ color: "#7a7a7a" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: "#4a4a4a" }}>お問い合わせ</h3>
            <a
              href="mailto:shinya.wa5812@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
              style={{ color: "#7a7a7a" }}
            >
              <Mail className="h-4 w-4" />
              shinya.wa5812@gmail.com
            </a>
            <div className="mt-6">
              <h3 className="font-bold mb-2" style={{ color: "#4a4a4a" }}>法的情報</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-primary"
                      style={{ color: "#7a7a7a" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid #f0c0d8" }}>
          <p className="text-sm" style={{ color: "#aaaaaa" }}>
            © 2026 みんなの介護AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
