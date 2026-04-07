// ============================================================
// 奇蹟ストア サイト設定
// ============================================================

export const siteConfig = {
  // ---- 基本情報 ----
  siteName: "KISEKI STORE",
  siteNameEn: "KISEKI STORE",
  tagline: "あなたの志、映像にしませんか？",
  taglineSub: "言葉にならない想いを、伝わるカタチへ。",
  description: "株式会社奇蹟動画制作所が手がける映像の現場から生まれたファッション。被写体が纏うリアルな一着をあなたへ。",
  category: "Editorial Fashion",

  // ---- 映像会社情報 ----
  production: {
    name: "株式会社奇蹟動画制作所",
    tagline: "「作る」のではなく、引き出してカタチにする映像制作。",
    description: "志を持ち、事業や組織を本気で成長させたい経営者・事業責任者に対して、その「想い」や「理念」を言語化・映像化し、伝わるカタチにする映像制作を提供しています。",
    services: [
      "志に特化した映像制作",
      "企業紹介動画制作",
      "採用動画制作",
      "インタビュー動画制作",
      "ブランディング映像制作",
    ],
    clients: ["中小企業経営者様", "士業・コンサルタント様", "名古屋グランパス", "アンミカ"],
    flow: ["ヒアリング", "志の言語化", "構成設計", "撮影", "編集"],
    pain: [
      "想いはあるが言語化できていない",
      "採用で共感される会社にしたい",
      "理念を社内に浸透させたい",
    ],
  },

  // ---- ヘッダーナビ ----
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Works", href: "/#works" },
    { label: "Store", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // ---- 商品一覧（30アイテム）----
  products: [
    { id: "1",  name: "オーバーサイズテーラードジャケット", price: 28000, category: "アウター",   description: "羽織るだけで抜け感が出る、きれいめカジュアルの定番アウター。",             sizes: ["S","M","L"], colors: ["ブラック","ベージュ"],     image: "/images/IMG_4576_r1_c1.jpg", images: ["/images/IMG_4576_r1_c1.jpg"], stock: true, isNew: true  },
    { id: "2",  name: "ハーフジップニットプルオーバー",     price: 22000, category: "トップス",   description: "首元の開きで印象を変えられる、ゆるシルエットの主役ニット。",               sizes: ["S","M","L"], colors: ["グレー","ブラック","ベージュ"], image: "/images/IMG_4576_r1_c2.jpg", images: ["/images/IMG_4576_r1_c2.jpg"], stock: true, isNew: false },
    { id: "3",  name: "エアリーロングフレアスカート",       price: 21000, category: "スカート",   description: "動くたびに揺れる軽やかなシルエットが女性らしさを引き立てる。",             sizes: ["S","M","L"], colors: ["ブラック","ホワイト","カーキ"], image: "/images/IMG_4576_r1_c3.jpg", images: ["/images/IMG_4576_r1_c3.jpg"], stock: true, isNew: false },
    { id: "4",  name: "フェイクレザーブルゾン",            price: 25000, category: "アウター",   description: "ツヤ感でコーデを引き締める、辛口寄りの主役アウター。",                   sizes: ["S","M","L"], colors: ["ブラック","ブラウン"],     image: "/images/IMG_4576_r1_c4.jpg", images: ["/images/IMG_4576_r1_c4.jpg"], stock: true, isNew: true  },
    { id: "5",  name: "シャギーニットカーディガン",         price: 23000, category: "アウター",   description: "ふんわりした毛足感で季節感と柔らかさを足せる一枚。",                     sizes: ["FREE"],      colors: ["アイボリー","グレー","ブラウン"], image: "/images/IMG_4576_r1_c5.jpg", images: ["/images/IMG_4576_r1_c5.jpg"], stock: true, isNew: false },
    { id: "6",  name: "デニムジャケット",                  price: 20000, category: "アウター",   description: "ほどよいラフさを加えられる、着回し力の高い定番アウター。",               sizes: ["S","M","L"], colors: ["インディゴ","ライトブルー"], image: "/images/IMG_4576_r1_c6.jpg", images: ["/images/IMG_4576_r1_c6.jpg"], stock: true, isNew: false },
    { id: "7",  name: "バックプリントロングTシャツ",        price: 20000, category: "トップス",   description: "後ろ姿まで映えるデザインで、一枚でもレイヤードでも使いやすい。",           sizes: ["S","M","L"], colors: ["ホワイト","ブラック"],     image: "/images/IMG_4576_r2_c1.jpg", images: ["/images/IMG_4576_r2_c1.jpg"], stock: true, isNew: false },
    { id: "8",  name: "ワイドカーゴパンツ",                price: 22000, category: "パンツ",     description: "立体ポケットがアクセントになる、ストリート感のある一本。",               sizes: ["S","M","L"], colors: ["カーキ","ブラック","ベージュ"], image: "/images/IMG_4576_r2_c2.jpg", images: ["/images/IMG_4576_r2_c2.jpg"], stock: true, isNew: true  },
    { id: "9",  name: "オーバーサイズストライプシャツ",     price: 21000, category: "トップス",   description: "ゆるいシルエットで抜け感を作れる、きれいめカジュアル向きトップス。",       sizes: ["S","M","L"], colors: ["ホワイト×ブルー","ホワイト×ブラック"], image: "/images/IMG_4576_r2_c3.jpg", images: ["/images/IMG_4576_r2_c3.jpg"], stock: true, isNew: false },
    { id: "10", name: "ティアードミニスカート",             price: 20000, category: "スカート",   description: "段フリルの立体感で甘さと軽さを出せるミニ丈ボトム。",                     sizes: ["S","M","L"], colors: ["ブラック","ベージュ","ホワイト"], image: "/images/IMG_4576_r2_c4.jpg", images: ["/images/IMG_4576_r2_c4.jpg"], stock: true, isNew: false },
    { id: "11", name: "スウェットプルオーバーパーカー",     price: 20000, category: "トップス",   description: "ラフさと着回しやすさを両立する、ゆったりシルエットの定番トップス。",       sizes: ["S","M","L"], colors: ["グレー","ブラック","ベージュ"], image: "/images/IMG_4576_r2_c5.jpg", images: ["/images/IMG_4576_r2_c5.jpg"], stock: true, isNew: false },
    { id: "12", name: "カップ付きリブタンクトップ",         price: 20000, category: "トップス",   description: "すっきり見えしやすく、羽織りのインナーにも使いやすい一枚。",             sizes: ["S","M","L"], colors: ["ブラック","ホワイト","グレー"], image: "/images/IMG_4576_r2_c6.jpg", images: ["/images/IMG_4576_r2_c6.jpg"], stock: true, isNew: false },
    { id: "13", name: "レイヤードキャミワンピース",         price: 22000, category: "ワンピース", description: "インナー次第で印象を変えられる、縦ラインがきれいなワンピース。",           sizes: ["S","M","L"], colors: ["ブラック","ホワイト"],     image: "/images/IMG_4576_r3_c1.jpg", images: ["/images/IMG_4576_r3_c1.jpg"], stock: true, isNew: true  },
    { id: "14", name: "ハイウエストワイドスラックス",       price: 23000, category: "パンツ",     description: "脚長見えしやすく、きれいめな雰囲気にまとまる上品ボトム。",               sizes: ["S","M","L"], colors: ["ブラック","グレー","ベージュ"], image: "/images/IMG_4576_r3_c2.jpg", images: ["/images/IMG_4576_r3_c2.jpg"], stock: true, isNew: false },
    { id: "15", name: "シアートップス",                    price: 20000, category: "トップス",   description: "透け感で軽さを出せる、レイヤード向きの抜け感トップス。",                 sizes: ["S","M","L"], colors: ["ホワイト","ブラック"],     image: "/images/IMG_4576_r3_c3.jpg", images: ["/images/IMG_4576_r3_c3.jpg"], stock: true, isNew: false },
    { id: "16", name: "ジップアップニットカーディガン",     price: 22000, category: "トップス",   description: "羽織りにも一枚着にも使える、コンパクト寄りの万能トップス。",             sizes: ["S","M","L"], colors: ["グレー","ベージュ","ブラック"], image: "/images/IMG_4576_r3_c4.jpg", images: ["/images/IMG_4576_r3_c4.jpg"], stock: true, isNew: false },
    { id: "17", name: "ライトマウンテンパーカー",           price: 22000, category: "アウター",   description: "軽い素材感で季節の変わり目に使いやすいショート丈アウター。",             sizes: ["S","M","L"], colors: ["ブラック","カーキ","ベージュ"], image: "/images/IMG_4576_r3_c5.jpg", images: ["/images/IMG_4576_r3_c5.jpg"], stock: true, isNew: false },
    { id: "18", name: "オーバーサイズロングスウェット",     price: 21000, category: "トップス",   description: "一枚でこなれ感が出る、体型カバーもしやすいルーズトップス。",             sizes: ["S","M","L"], colors: ["グレー","ブラック","ホワイト"], image: "/images/IMG_4576_r3_c6.jpg", images: ["/images/IMG_4576_r3_c6.jpg"], stock: true, isNew: false },
    { id: "19", name: "ボリュームソールスニーカー",         price: 24000, category: "シューズ",   description: "足元に存在感を出しつつ、カジュアルにまとめやすい定番シューズ。",           sizes: ["22.5","23","23.5","24","24.5","25"], colors: ["ホワイト","ブラック"], image: "/images/IMG_4576_r4_c1.jpg", images: ["/images/IMG_4576_r4_c1.jpg"], stock: true, isNew: true  },
    { id: "20", name: "ワイドデニムパンツ",                price: 22000, category: "パンツ",     description: "ほどよいルーズ感で今っぽく見せられる着回ししやすいデニム。",             sizes: ["S","M","L"], colors: ["インディゴ","ライトブルー","ブラック"], image: "/images/IMG_4576_r4_c2.jpg", images: ["/images/IMG_4576_r4_c2.jpg"], stock: true, isNew: false },
    { id: "21", name: "センタープレスワイドパンツ",         price: 23000, category: "パンツ",     description: "まっすぐ落ちるシルエットで、きれいめにも使いやすい一本。",               sizes: ["S","M","L"], colors: ["ブラック","グレー","ベージュ"], image: "/images/IMG_4576_r4_c3.jpg", images: ["/images/IMG_4576_r4_c3.jpg"], stock: true, isNew: false },
    { id: "22", name: "シアーオーバーシャツ",              price: 21000, category: "トップス",   description: "軽い透け感で抜け感を出せる、羽織りとしても便利なシャツ。",               sizes: ["S","M","L"], colors: ["ホワイト","ブラック"],     image: "/images/IMG_4576_r4_c4.jpg", images: ["/images/IMG_4576_r4_c4.jpg"], stock: true, isNew: false },
    { id: "23", name: "コットンロングフレアスカート",       price: 21000, category: "スカート",   description: "ナチュラルな広がりで柔らかい印象にまとまるロング丈ボトム。",             sizes: ["S","M","L"], colors: ["ベージュ","ブラック","ホワイト"], image: "/images/IMG_4576_r4_c5.jpg", images: ["/images/IMG_4576_r4_c5.jpg"], stock: true, isNew: false },
    { id: "24", name: "メタリックショルダーバッグ",         price: 25000, category: "バッグ",     description: "光沢感でコーデのアクセントになる存在感のあるバッグ。",                   sizes: ["FREE"],      colors: ["シルバー","ゴールド"],     image: "/images/IMG_4576_r4_c6.jpg", images: ["/images/IMG_4576_r4_c6.jpg"], stock: true, isNew: true  },
    { id: "25", name: "レザーブルゾン×スウェットパンツセット", price: 30000, category: "セットアップ", description: "辛口アウターとラフなボトムの組み合わせで今っぽくまとまるスタイル。",   sizes: ["S","M","L"], colors: ["ブラック"],               image: "/images/IMG_4576_r5_c1.jpg", images: ["/images/IMG_4576_r5_c1.jpg"], stock: true, isNew: false },
    { id: "26", name: "シアーオーバーシャツ×ワイドパンツセット", price: 28000, category: "セットアップ", description: "きれいめとリラックス感を両立した、抜け感のある着こなし。",          sizes: ["S","M","L"], colors: ["ホワイト","ベージュ"],     image: "/images/IMG_4576_r5_c2.jpg", images: ["/images/IMG_4576_r5_c2.jpg"], stock: true, isNew: false },
    { id: "27", name: "ドレープカットソー",                price: 20000, category: "トップス",   description: "体のラインをきれいに見せやすい、フィット感のあるトップス。",             sizes: ["S","M","L"], colors: ["ブラック","ホワイト","グレー"], image: "/images/IMG_4576_r5_c3.jpg", images: ["/images/IMG_4576_r5_c3.jpg"], stock: true, isNew: false },
    { id: "28", name: "ロゴスウェット",                    price: 20000, category: "トップス",   description: "一枚でカジュアルな存在感が出る、デイリー使いしやすいトップス。",         sizes: ["S","M","L"], colors: ["グレー","ブラック","ホワイト"], image: "/images/IMG_4576_r5_c4.jpg", images: ["/images/IMG_4576_r5_c4.jpg"], stock: true, isNew: false },
    { id: "29", name: "ボーダーニットプルオーバー",         price: 21000, category: "トップス",   description: "柄でメリハリを出しつつ、やわらかくラフに着られる一枚。",                 sizes: ["S","M","L"], colors: ["ホワイト×ブラック","ホワイト×グレー"], image: "/images/IMG_4576_r5_c5.jpg", images: ["/images/IMG_4576_r5_c5.jpg"], stock: true, isNew: false },
    { id: "30", name: "シアーインナーテーラードジャケットコーデ", price: 29000, category: "アウター", description: "透け感トップスとジャケットの組み合わせで、都会的にまとまるスタイル。", sizes: ["S","M","L"], colors: ["ブラック","ベージュ"],     image: "/images/IMG_4576_r5_c6.jpg", images: ["/images/IMG_4576_r5_c6.jpg"], stock: true, isNew: true  },
  ],

  // ---- 振込先情報 ----
  bank: {
    bankName: "三菱UFJ銀行",
    branchName: "名古屋支店",
    accountType: "普通",
    accountNumber: "1234567",
    accountHolder: "タマキ ヨウヘイ",
    note: "ご注文後3日以内にお振込みください。確認後、3〜5営業日以内に発送いたします。",
  },

  // ---- 会社情報 ----
  company: {
    name: "株式会社奇蹟動画制作所",
    nameEn: "KISEKI VIDEO PRODUCTION",
    postalCode: "503-2122",
    address: "岐阜県不破郡垂井町綾戸897-80",
    tel: "090-6206-6775",
    email: "yohei.706com@gmail.com",
    businessHours: "平日 10:00〜18:00（土日祝除く）",
    established: "2020年10月19日",
    capital: "—",
    representative: "玉置 容平",
    description: "志を持つ経営者・事業責任者の「想い」を言語化・映像化し、伝わるカタチにする映像制作会社。",
  },

  // ---- 返品・送料ポリシー ----
  policy: {
    shippingFee: "全国一律880円（税込）",
    freeShippingOver: 30000,
    returnPeriod: "商品到着後7日以内",
    returnNote: "未使用・タグ付きのものに限り返品・交換を承ります。",
  },
};

export type SiteConfig = typeof siteConfig;
