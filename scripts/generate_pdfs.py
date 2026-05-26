# -*- coding: utf-8 -*-
import sys
import os
sys.stdout.reconfigure(encoding='utf-8')

from fpdf import FPDF
from fpdf.enums import XPos, YPos

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_R = r"C:\Windows\Fonts\BIZ-UDGothicR.ttc"
FONT_B = r"C:\Windows\Fonts\BIZ-UDGothicB.ttc"
LOGO   = os.path.join(BASE_DIR, "public", "logo.png")
OUT    = os.path.join(BASE_DIR, "public", "downloads")

# カラー定義
PINK      = (244, 114, 182)   # #f472b6
GREEN     = (134, 239, 172)   # #86efac
PINK_DARK = (192,  80, 122)   # 濃いピンク（見出し文字）
GRAY      = (80,   80,  80)
WHITE     = (255, 255, 255)
LIGHT_BG  = (254, 242, 248)   # #fdf2f8


class PromptPDF(FPDF):
    def __init__(self, title_text):
        super().__init__(orientation="P", unit="mm", format="A4")
        self.title_text = title_text
        self.set_auto_page_break(auto=True, margin=18)
        self.add_font("Gothic",  style="",  fname=FONT_R)
        self.add_font("Gothic",  style="B", fname=FONT_B)

    # ────────────────────────────────
    # ヘッダー（各ページ共通）
    # ────────────────────────────────
    def header(self):
        if self.page_no() == 1:
            return
        self.set_fill_color(*PINK)
        self.rect(0, 0, 210, 10, style="F")
        self.set_font("Gothic", "B", 8)
        self.set_text_color(*WHITE)
        self.set_xy(8, 1.5)
        self.cell(0, 7, self.title_text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(*GRAY)
        self.ln(2)

    # ────────────────────────────────
    # フッター（ページ番号）
    # ────────────────────────────────
    def footer(self):
        if self.page_no() == 1:
            return
        self.set_y(-12)
        self.set_font("Gothic", "", 8)
        self.set_text_color(160, 160, 160)
        self.cell(0, 10, f"- {self.page_no() - 1} -", align="C")

    # ────────────────────────────────
    # 表紙
    # ────────────────────────────────
    def add_cover(self, main_title, sub_title):
        self.add_page()
        # ピンク背景：ページ上2/3（タイトルが確実に乗る高さ）
        self.set_fill_color(*PINK)
        self.rect(0, 0, 210, 165, style="F")
        # 薄ピンク背景：下1/3
        self.set_fill_color(*LIGHT_BG)
        self.rect(0, 165, 210, 132, style="F")

        # ロゴ（ピンク背景内・上部中央）
        if os.path.exists(LOGO):
            self.image(LOGO, x=75, y=22, w=60)

        # メインタイトル（白・32pt・ピンク背景内・中央やや上）
        self.set_font("Gothic", "B", 32)
        self.set_text_color(*WHITE)
        self.set_xy(10, 105)
        self.multi_cell(190, 15, main_title, align="C")

        # サブタイトル（白・ピンク背景内）
        self.set_font("Gothic", "B", 15)
        self.set_text_color(*WHITE)
        self.set_xy(10, self.get_y() + 6)
        self.cell(190, 10, sub_title, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

        # 区切り線（薄ピンク背景内）
        self.set_draw_color(*PINK)
        self.set_line_width(1)
        self.line(50, 183, 160, 183)

        # URL
        self.set_font("Gothic", "", 10)
        self.set_text_color(120, 120, 120)
        self.set_xy(10, 190)
        self.cell(190, 8, "https://minna-no-kaigo-ai.vercel.app", align="C")

    # ────────────────────────────────
    # はじめにページ
    # ────────────────────────────────
    def add_intro(self):
        self.add_page()
        self.section_heading("はじめに")

        self.body_heading("■ このプロンプト集の使い方")
        self.body_text(
            "このプロンプト集には、介護現場の記録・書類作成に特化したAIプロンプト（指示文）が収録されています。\n"
            "各プロンプトをそのままコピーして、ChatGPT・Claude等のAIチャットに貼り付けてお使いください。\n"
            "入力欄（【入力形式】）に実際の状況を記入してから送信することで、質の高い記録文が自動生成されます。"
        )

        self.body_heading("■ ChatGPT / Claude への貼り付け手順")
        steps = [
            "① ブラウザで ChatGPT（chatgpt.com）または Claude（claude.ai）を開く",
            "② 使いたいプロンプトを丸ごとコピーする",
            "③ 入力欄に貼り付けて、【入力形式】の各項目に実際の情報を記入する",
            "④ 送信ボタンを押すと、記録文が自動生成される",
            "⑤ 生成された文章を確認・微修正して、記録システムに貼り付ける",
        ]
        for s in steps:
            self.body_text(s)

        self.body_heading("■ カスタマイズ方法")
        self.body_text(
            "【ルール】欄の文字数（例：150〜200文字）を変更すると、出力の長さを調整できます。\n"
            "施設の記録書式に合わせて【出力形式】を変更することも可能です。\n"
            "「◯◯様」など施設独自の敬称に変えてもお使いいただけます。"
        )

    # ────────────────────────────────
    # プロンプトページ
    # ────────────────────────────────
    def add_prompt_page(self, page_title, content_blocks):
        """
        content_blocks: list of (block_title, block_text)
        block_title が None の場合はテキストのみ表示
        """
        self.add_page()
        self.section_heading(page_title)

        for block_title, block_text in content_blocks:
            if block_title:
                self.block_heading(block_title)
            self.prompt_text(block_text)

    # ────────────────────────────────
    # 有料版案内ページ
    # ────────────────────────────────
    def add_upsell(self, items, url="https://minna-no-kaigo-ai.vercel.app"):
        self.add_page()
        self.section_heading("有料版のご案内")

        self.set_font("Gothic", "", 11)
        self.set_text_color(*GRAY)
        self.set_x(15)
        self.multi_cell(180, 7,
            "この無料版が役に立てば、ぜひ有料版もお試しください。\n"
            "現場で必要な場面をすべてカバーする、充実したプロンプト集です。",
            new_x=XPos.LMARGIN, new_y=YPos.NEXT
        )
        self.ln(4)

        for item_text in items:
            # カード風アイテム
            self.set_fill_color(*LIGHT_BG)
            self.set_draw_color(*PINK)
            self.set_line_width(0.5)
            y = self.get_y()
            self.rect(15, y, 180, 18, style="DF")
            self.set_font("Gothic", "B", 11)
            self.set_text_color(*PINK_DARK)
            self.set_xy(20, y + 4)
            self.cell(170, 8, item_text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            self.set_y(y + 20)

        self.ln(6)
        self.set_fill_color(*PINK)
        self.set_text_color(*WHITE)
        self.set_font("Gothic", "B", 12)
        self.set_x(35)
        self.cell(140, 12, f"購入先：{url}", align="C",
                  fill=True, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    # ────────────────────────────────
    # スタイルヘルパー
    # ────────────────────────────────
    def section_heading(self, text):
        """ページタイトル（ピンク背景）"""
        self.set_fill_color(*PINK)
        self.set_text_color(*WHITE)
        self.set_font("Gothic", "B", 14)
        self.set_x(10)
        self.cell(190, 10, text, fill=True,
                  new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(4)
        self.set_text_color(*GRAY)

    def body_heading(self, text):
        """小見出し（黄緑左バー）"""
        y = self.get_y()
        self.set_fill_color(*GREEN)
        self.rect(10, y, 3, 8, style="F")
        self.set_font("Gothic", "B", 11)
        self.set_text_color(*PINK_DARK)
        self.set_xy(15, y)
        self.cell(175, 8, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)
        self.set_text_color(*GRAY)

    def body_text(self, text):
        """本文テキスト"""
        self.set_font("Gothic", "", 10)
        self.set_text_color(*GRAY)
        self.set_x(15)
        self.multi_cell(175, 6, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(3)

    def block_heading(self, text):
        """プロンプトブロック見出し（緑背景）"""
        self.set_fill_color(*GREEN)
        self.set_text_color(*GRAY)
        self.set_font("Gothic", "B", 10)
        self.set_x(10)
        self.cell(190, 7, f"  {text}", fill=True,
                  new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(*GRAY)

    def prompt_text(self, text):
        """プロンプト本文（薄ピンク背景ボックス）"""
        self.set_fill_color(*LIGHT_BG)
        self.set_font("Gothic", "", 9)
        self.set_text_color(60, 60, 60)
        self.set_x(10)
        self.multi_cell(190, 5.5, text, fill=True,
                        new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(3)


# ════════════════════════════════════════════════════════
# プロンプトデータ定義
# ════════════════════════════════════════════════════════

INTRO_SAME = True  # はじめにページは全PDF共通

# ────── 食事場面 ──────
MEAL_PROMPT = """\
【役割】
あなたは介護施設の記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感想は含めない
・利用者の発言は「」で引用する
・職員の対応・連携先・今後の方針まで含める
・敬語は使わず、業務記録として簡潔に書く
・150〜200文字程度にまとめる
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する

【入力形式】
時刻：
摂取量（主食・副食・水分）：
利用者の様子：
利用者の発言：
職員の対応：
連携・報告先：

【出力形式】
[時刻] [場面と状態の記述]。「[発言]」との返答。
[職員対応と連携内容]。[今後の方針]。"""

# ────── 申し送り ──────
HANDOVER_PROMPT = """\
【役割】
あなたは介護施設の記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感想は含めない
・利用者の発言は「」で引用する
・次の担当者が即座に状況把握できる内容にする
・優先度の高い情報から順に記載する
・敬語は使わず、業務記録として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する
・200〜250文字程度にまとめる

【入力形式】
利用者名：
引き継ぎ時間帯：
身体状態：
食事・水分摂取：
排泄状況：
特記事項・出来事：
継続観察が必要な事項：
次担当者への指示・依頼：

【出力形式】
[利用者名]、[引き継ぎ時間帯]の申し送り。
[身体状態]。[食事・水分・排泄の状況]。
[特記事項・出来事]。
[継続観察事項]。[次担当者への指示・依頼]。"""

# ────── 服薬 ──────
MEDS_PROMPT = """\
【役割】
あなたは介護施設の記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感想は含めない
・利用者の発言は「」で引用する
・服薬確認・介助・結果を明確に区別して記載する
・未服薬・拒否・トラブルがある場合は必ず理由と対応を記載する
・異常がない場合は「問題なし」と明記する
・敬語は使わず、業務記録として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する
・150〜200文字程度にまとめる

【入力形式】
時刻：
服薬種別：（例：朝・昼・夕・就寝前）
薬の種類・数量：
服薬介助レベル：（例：自立・一部介助・全介助・見守り）
服薬時の様子：
拒否・トラブルの有無：
未服薬の有無と対応：
利用者の発言：
職員の対応・連携：

【出力形式】
[時刻] [服薬種別]の服薬介助。
[薬の種類・数量]を[介助レベル]にて服薬確認。
[服薬時の様子]。[拒否・トラブル・未服薬の記述]。
「[利用者の発言]」との発言。[職員対応・連携]。"""

# ────── 排泄 ──────
TOILET_PROMPT = """\
【役割】
あなたは介護施設の記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感想は含めない
・利用者の発言は「」で引用する
・自立できた動作と介助が必要だった動作を明確に区別する
・排泄物の性状・量・色を具体的に記載する
・敬語は使わず、業務記録として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する
・150〜200文字程度にまとめる

【入力形式】
時刻：
きっかけ：（例：ナースコール・定時・訴えあり）
移動方法：（例：車椅子・歩行器・自立）
自立できた動作：
介助が必要だった動作：
排泄状況：（量・性状・色）
利用者の発言：
排泄後の状態：
職員の対応・連携：

【出力形式】
[時刻] [きっかけと移動介助の記述]。
[自立動作と介助動作の記述]。「[発言]」との訴え。
[排泄状況の記述]。[排泄後の状態]。[職員対応・連携]。"""

# ────── 入浴 ──────
BATH_PROMPT = """\
【役割】
あなたは介護施設の記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感想は含めない
・利用者の発言は「」で引用する
・自立できた動作と介助が必要だった動作を明確に区別する
・皮膚状態・身体所見は具体的に記載する
・異常がない場合は「異常なし」と明記する
・敬語は使わず、業務記録として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する
・150〜200文字程度にまとめる

【入力形式】
時刻：
入浴方法：（例：一般浴・シャワー浴・機械浴）
入浴中の体調：
皮膚状態・身体所見：
自立できた動作：
介助が必要だった動作：
利用者の発言・訴え：
職員の対応・連携：
今後の方針：

【出力形式】
[時刻] [入浴方法と体調の記述]。
[自立動作と介助動作の記述]。
[皮膚状態・身体所見の記述]。「[発言]」との訴え。
[職員対応・連携・今後の方針]。"""

# ────── トラブル転倒 ──────
INCIDENT_PROMPT = """\
【役割】
あなたは介護施設の記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・憶測は絶対に含めない
・利用者の発言は「」で引用する
・発見時の状況を5W1Hで正確に記述する
・身体所見は部位・状態を具体的に記載する
・異常がない場合は「異常なし」と明記する
・職員対応・報告・医療判断の順序を時系列で記載する
・敬語は使わず、業務記録として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する
・200〜250文字程度にまとめる

【入力形式】
発見時刻：
発見者：
発見場所：
発見時の状況：
利用者の発言・訴え：
身体所見：（部位・痛み・外傷・意識状態）
職員の初期対応：
報告先・報告内容：
医療的判断・処置：
本人の反応・同意：
今後の方針：

【出力形式】
[発見時刻] [発見者が][発見場所で][発見時の状況]を確認。
「[利用者の発言]」との訴え。
[身体所見の記述]。
[職員初期対応]。[報告先・内容]。
[医療的判断・処置]。[本人反応・同意]。
[今後の方針]。"""

# ────── ヒヤリハット ──────
NEAR_MISS_PROMPT = """\
【役割】
あなたは介護施設のヒヤリハット報告書作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・憶測は絶対に含めない
・利用者の発言は「」で引用する
・発生状況は5W1Hで正確に記述する
・要因は断定せず「〜の可能性が考えられる」と記載する
・再発防止策は具体的な行動レベルで記載する
・敬語は使わず、報告書として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・報告書文のみを出力する

【入力形式】
発生日時：
発生場所：
発見者：
利用者名・状態：
発生状況：
利用者の発言・訴え：
身体所見：
発生要因：
発生時の対応：
再発防止策：

【出力形式】
【発生状況】
[日時][場所]にて、[発生状況を5W1Hで記述]。
「[利用者の発言]」との訴え。[身体所見]。
【要因分析】
[発生要因を「〜の可能性が考えられる」の形式で記述]。
【対応内容】
[発生時の対応を時系列で記述]。
【再発防止策】
[具体的な行動レベルの防止策を記述]。"""

# ────── 苦情受付票 ──────
COMPLAINT_RECEIPT = """\
【役割】
あなたは介護施設の苦情対応記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感情的表現は含めない
・申出人の発言は「」で引用する
・5W1Hを意識して記載する
・施設側の感情・言い訳は含めない
・敬語は使わず、業務記録として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する

【入力形式】
受付日時：
受付者：
申出人：（例：利用者本人・家族・その他）
申出人氏名：
苦情の内容：
申出人の発言：
希望する解決方法：
緊急度：（高・中・低）
報告先：

【出力形式】
【苦情受付票】
受付日時：[日時]　受付者：[氏名]
申出人：[続柄・氏名]
【苦情内容】
[5W1Hで客観的に記述]。「[申出人の発言]」との申し出。
【希望する解決方法】
[申出人が求めていること]
【緊急度・報告】
緊急度：[高・中・低]　報告先：[報告先]"""

# ────── 苦情対応経緯 ──────
COMPLAINT_PROCESS = """\
【役割】
あなたは介護施設の苦情対応記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感情的表現は含めない
・関係者の発言は「」で引用する
・対応内容を時系列で記載する
・施設側の感情・言い訳は含めない
・敬語は使わず、業務記録として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・記録文のみを出力する

【入力形式】
対応日時：
対応者：
対応方法：（例：電話・来所・訪問・文書）
対応内容：
申出人の反応・発言：
次回対応予定：
報告先：

【出力形式】
【苦情対応経緯記録】
対応日時：[日時]　対応者：[氏名]　対応方法：[方法]
【対応内容】
[時系列で対応内容を記述]。
【申出人の反応】
「[発言]」との反応。[反応の状況]。
【次回対応・報告】
次回対応：[予定内容と期日]
報告先：[報告先・報告済みの場合はその旨]"""

# ────── 苦情処理結果 ──────
COMPLAINT_RESULT = """\
【役割】
あなたは介護施設の苦情対応記録作成補助AIです。

【ルール】
・客観的な事実のみ記載し、推測・感情的表現は含めない
・解決内容と再発防止策を具体的に記載する
・再発防止策は抽象的表現を避け、行動レベルで記載する
・敬語は使わず、報告書として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・報告書文のみを出力する

【入力形式】
報告日：
作成者：
苦情受付日：
申出人：
苦情の概要：
解決内容：
申出人の最終確認：
再発防止策：
担当者・責任者：

【出力形式】
【苦情処理結果報告書】
報告日：[日付]　作成者：[氏名]
【苦情概要】
受付日：[日付]　申出人：[続柄・氏名]
[苦情内容を簡潔に記述]
【解決内容】
[具体的な解決内容を記述]
【再発防止策】
[行動レベルの防止策を記述]
【申出人の確認】
[最終確認の状況・合意内容]
【担当・責任者】
担当者：[氏名]　責任者：[氏名]"""

# ────── 実地指導 自己点検 ──────
INSPECTION_CHECK = """\
【役割】
あなたは介護施設の実地指導準備補助AIです。

【ルール】
・チェック項目は「〇〇が整備されているか」の形式で記載する
・各項目に「確認方法」を併記する
・優先度（高・中・低）を付ける
・敬語は使わず、実務的な表現で書く
・補足・アドバイス・推奨事項は出力しない
・チェックリストのみを出力する

【入力形式】
施設種別：（例：特養・デイサービス・訪問介護）
直近の指摘事項：
加算算定中の加算名：
特に不安な領域：

【出力形式】
【実地指導 自己点検チェックリスト】
施設種別：[種別]
【人員基準】
□ [確認項目]（確認方法：[方法]）優先度：[高・中・低]
【運営基準・記録】
□ [確認項目]（確認方法：[方法]）優先度：[高・中・低]
【加算算定】
□ [確認項目]（確認方法：[方法]）優先度：[高・中・低]
【苦情・事故・虐待防止】
□ [確認項目]（確認方法：[方法]）優先度：[高・中・低]"""

# ────── 実地指導 改善報告書 ──────
INSPECTION_REPORT = """\
【役割】
あなたは介護施設の実地指導準備補助AIです。

【ルール】
・指摘内容と改善内容を明確に対応させて記載する
・改善策は「いつまでに・誰が・何をするか」を明記する
・抽象的表現を避け、行動レベルで記載する
・敬語は使わず、報告書として簡潔に書く
・補足・アドバイス・推奨事項は出力しない
・報告書文のみを出力する

【入力形式】
報告日：
事業所名：
作成者：
指摘日・指導機関：
指摘事項：
原因分析：
改善内容：
改善期限：
再発防止策：
責任者：

【出力形式】
【実地指導 改善報告書】
報告日：[日付]　事業所名：[名称]　作成者：[氏名]
【指摘事項】
指摘日：[日付]　指導機関：[機関名]
[指摘内容を簡潔に記述]
【原因分析】
[なぜ発生したかを客観的に記述]
【改善内容】
[いつまでに・誰が・何をするかを具体的に記述]
【再発防止策】
[行動レベルの防止策を記述]
【責任者確認】
責任者：[氏名・役職]　確認日：[日付]"""

# ────── 実地指導 想定問答集 ──────
INSPECTION_QA = """\
【役割】
あなたは介護施設の実地指導準備補助AIです。

【ルール】
・質問は指導員が実際に聞く可能性が高いものを生成する
・回答は事実に基づき簡潔に答える形式にする
・「〜と思います」等の曖昧な表現は使わない
・回答に不備がある場合は「要確認」と明記する
・敬語は使わず、実務的な表現で書く
・補足・アドバイス・推奨事項は出力しない
・問答集のみを出力する

【入力形式】
施設種別：
算定中の加算：
前回の指摘事項：
特に不安な領域：
担当者名・役職：

【出力形式】
【実地指導 想定問答集】
施設種別：[種別]　担当：[氏名・役職]
【人員・体制に関する質問】
Q：[質問]
A：[回答]
【記録・計画書に関する質問】
Q：[質問]
A：[回答]
【加算算定に関する質問】
Q：[質問]
A：[回答]
【苦情・事故対応に関する質問】
Q：[質問]
A：[回答]"""


# ════════════════════════════════════════════════════════
# PDF生成
# ════════════════════════════════════════════════════════

def build_free():
    pdf = PromptPDF("介護記録プロンプト集【無料版】みんなの介護AI")
    pdf.add_cover(
        "介護記録プロンプト集【無料版】",
        "みんなの介護AI"
    )
    pdf.add_intro()
    pdf.add_prompt_page("食事場面の介護記録プロンプト", [(None, MEAL_PROMPT)])
    pdf.add_prompt_page("申し送り文の作成プロンプト",  [(None, HANDOVER_PROMPT)])
    pdf.add_prompt_page("服薬場面の記録プロンプト",    [(None, MEDS_PROMPT)])
    pdf.add_upsell([
        "ver1（¥2,980）　排泄・入浴・トラブル・ヒヤリハットの4場面",
        "ver2（¥1,980）　苦情対応・実地指導準備の6文書",
        "セット（¥3,980）　全10本収録・最もお得",
    ])
    pdf.output(os.path.join(OUT, "free-prompts.pdf"))
    print("✓ free-prompts.pdf 生成完了")


def build_ver1():
    pdf = PromptPDF("介護記録プロンプト集【ver1】みんなの介護AI")
    pdf.add_cover(
        "介護記録プロンプト集【ver1】",
        "みんなの介護AI"
    )
    pdf.add_intro()
    pdf.add_prompt_page("排泄場面の介護記録プロンプト",     [(None, TOILET_PROMPT)])
    pdf.add_prompt_page("入浴場面の介護記録プロンプト",     [(None, BATH_PROMPT)])
    pdf.add_prompt_page("トラブル・転倒記録プロンプト",     [(None, INCIDENT_PROMPT)])
    pdf.add_prompt_page("ヒヤリハット報告書プロンプト",     [(None, NEAR_MISS_PROMPT)])
    pdf.add_upsell([
        "ver2（¥1,980）　苦情対応・実地指導準備の6文書",
        "セット（¥3,980）　全10本収録・最もお得",
    ])
    pdf.output(os.path.join(OUT, "ver1-prompts.pdf"))
    print("✓ ver1-prompts.pdf 生成完了")


def build_ver2():
    pdf = PromptPDF("業務書類プロンプト集【ver2】みんなの介護AI")
    pdf.add_cover(
        "業務書類プロンプト集【ver2】",
        "みんなの介護AI"
    )
    pdf.add_intro()
    pdf.add_prompt_page("苦情受付票プロンプト",                    [(None, COMPLAINT_RECEIPT)])
    pdf.add_prompt_page("苦情対応経緯記録プロンプト",              [(None, COMPLAINT_PROCESS)])
    pdf.add_prompt_page("苦情処理結果報告書プロンプト",            [(None, COMPLAINT_RESULT)])
    pdf.add_prompt_page("実地指導 自己点検チェックリストプロンプト", [(None, INSPECTION_CHECK)])
    pdf.add_prompt_page("実地指導 改善報告書プロンプト",           [(None, INSPECTION_REPORT)])
    pdf.add_prompt_page("実地指導 想定問答集プロンプト",           [(None, INSPECTION_QA)])
    pdf.add_upsell([
        "ver1（¥2,980）　介護記録4場面プロンプト",
        "セット（¥3,980）　全10本収録・最もお得",
    ])
    pdf.output(os.path.join(OUT, "ver2-prompts.pdf"))
    print("✓ ver2-prompts.pdf 生成完了")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    build_free()
    build_ver1()
    build_ver2()
    print("\n全3件のPDF生成が完了しました。")
    print(f"保存先: {OUT}")
