export const metadata = {
  title: "建設業向けAI活用 | みんなの介護AI",
  description: "建設業向けのAI活用支援ページは準備中です。",
};

export default function KensetsuPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p
          className="text-5xl font-bold mb-6"
          style={{ color: "#1e3a5f" }}
        >
          🚧
        </p>
        <h1
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ color: "#1e3a5f" }}
        >
          建設業向けページは準備中です
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          現在コンテンツを作成中です。もうしばらくお待ちください。
        </p>
        <a
          href="/"
          className="inline-block font-semibold px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#1e3a5f" }}
        >
          トップページへ戻る
        </a>
      </div>
    </div>
  );
}
