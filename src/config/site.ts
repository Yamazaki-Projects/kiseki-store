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
    { label: "Store", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // ---- 商品一覧（20アイテム）----
  products: [
    { id: "1",  name: "エディトリアル ロングコート",         price: 28000, category: "アウター",   description: "映像撮影の現場で被写体が纏った、存在感あるロングコート。シルエットの美しさが際立つ一着です。",         sizes: ["S","M","L"], colors: ["ブラック","キャメル"],                    image: "/images/item-01.jpg", images: ["/images/item-01.jpg"], stock: true, isNew: true  },
    { id: "2",  name: "ビジョン ドレープワンピース",          price: 24000, category: "ワンピース", description: "「想いを伝える」テーマの撮影から生まれたドレープワンピース。動きのある素材が被写体を美しく見せます。",   sizes: ["S","M","L"], colors: ["オフホワイト","ネイビー"],                 image: "/images/item-02.jpg", images: ["/images/item-02.jpg"], stock: true, isNew: true  },
    { id: "3",  name: "ストーリー テーパードパンツ",          price: 22000, category: "パンツ",     description: "インタビュー映像の被写体が着用。清潔感と知性を両立したテーパードシルエット。",                             sizes: ["S","M","L","XL"], colors: ["チャコール","ベージュ","ネイビー"],       image: "/images/item-03.jpg", images: ["/images/item-03.jpg"], stock: true, isNew: false },
    { id: "4",  name: "ブランディング シルクブラウス",        price: 21000, category: "トップス",   description: "ブランディング映像の現場で選ばれたシルク混ブラウス。光の当たり方で表情が変わる上品な素材感。",           sizes: ["S","M","L"], colors: ["ホワイト","ライトグレー","ブラック"],       image: "/images/item-04.jpg", images: ["/images/item-04.jpg"], stock: true, isNew: false },
    { id: "5",  name: "志 ニットカーディガン",                price: 23000, category: "アウター",   description: "経営者インタビューで選ばれた落ち着きあるニットカーディガン。温かみと知性を兼ね備えたデザイン。",         sizes: ["FREE"], colors: ["グレー","ブラウン","アイボリー"],            image: "/images/item-05.jpg", images: ["/images/item-05.jpg"], stock: true, isNew: false },
    { id: "6",  name: "インタビュー ジャケット",              price: 29800, category: "アウター",   description: "採用動画の撮影で経営者が着用。品格と温度感を両立した、信頼を生むジャケット。",                             sizes: ["S","M","L"], colors: ["ネイビー","チャコール","ベージュ"],         image: "/images/item-06.jpg", images: ["/images/item-06.jpg"], stock: true, isNew: false },
    { id: "7",  name: "エモーション フレアスカート",          price: 20000, category: "スカート",   description: "感情を映像で表現するシーンで選ばれたフレアスカート。揺れるシルエットが想いを体現します。",                 sizes: ["S","M","L"], colors: ["ブラック","テラコッタ"],                  image: "/images/item-07.jpg", images: ["/images/item-07.jpg"], stock: true, isNew: true  },
    { id: "8",  name: "ナラティブ ストライプシャツ",          price: 21500, category: "トップス",   description: "企業紹介動画で選ばれた清潔感あるストライプシャツ。誠実さと知性が伝わるデザイン。",                         sizes: ["S","M","L","XL"], colors: ["ホワイト×ブルー","ホワイト×グレー"],     image: "/images/item-08.jpg", images: ["/images/item-08.jpg"], stock: true, isNew: false },
    { id: "9",  name: "インスパイア ドレス",                  price: 26000, category: "ワンピース", description: "「人を動かす」をテーマにした映像から生まれた一着。着る人の内側から輝きを引き出します。",                   sizes: ["S","M","L"], colors: ["ブラック","ダスティブルー"],               image: "/images/item-09.jpg", images: ["/images/item-09.jpg"], stock: true, isNew: true  },
    { id: "10", name: "リアリティ デニムジャケット",          price: 22000, category: "アウター",   description: "リアルな現場感を大切にする撮影スタイルから生まれたデニムジャケット。素の魅力を引き出します。",             sizes: ["S","M","L","XL"], colors: ["インディゴ","ライトブルー"],               image: "/images/item-10.jpg", images: ["/images/item-10.jpg"], stock: true, isNew: false },
    { id: "11", name: "エッセンス リブニット",                price: 20500, category: "トップス",   description: "「本質を伝える」というコンセプトの撮影で選ばれた、シンプルで質の高いリブニット。",                         sizes: ["S","M","L"], colors: ["アイボリー","グレー","ブラック"],           image: "/images/item-11.jpg", images: ["/images/item-11.jpg"], stock: true, isNew: false },
    { id: "12", name: "パッション ミディスカート",            price: 21000, category: "スカート",   description: "情熱的なインタビュー映像の被写体が着用した、女性らしいミディ丈スカート。",                                   sizes: ["S","M","L"], colors: ["ワインレッド","ネイビー","ブラック"],       image: "/images/item-12.jpg", images: ["/images/item-12.jpg"], stock: true, isNew: false },
    { id: "13", name: "クリエイティブ ワイドパンツ",          price: 23500, category: "パンツ",     description: "クリエイティブ系企業の撮影で選ばれた、個性と洗練を両立したワイドシルエット。",                             sizes: ["S","M","L"], colors: ["ベージュ","オリーブ","ブラック"],           image: "/images/item-13.jpg", images: ["/images/item-13.jpg"], stock: true, isNew: true  },
    { id: "14", name: "インサイト コートドレス",              price: 27000, category: "ワンピース", description: "経営者の「本音」を引き出す撮影で纏われた、知性と存在感が漂うコートワンピース。",                             sizes: ["S","M","L"], colors: ["キャメル","ブラック"],                     image: "/images/item-14.jpg", images: ["/images/item-14.jpg"], stock: true, isNew: false },
    { id: "15", name: "ビジョナリー タートルニット",          price: 22500, category: "トップス",   description: "先見性のある経営者が好むシンプルで上質なタートルネックニット。存在感と温かみを両立します。",               sizes: ["S","M","L"], colors: ["ブラック","グレー","アイボリー"],           image: "/images/item-15.jpg", images: ["/images/item-15.jpg"], stock: true, isNew: false },
    { id: "16", name: "センス リネンシャツ",                  price: 20000, category: "トップス",   description: "自然光の中での撮影で際立つリネン素材のシャツ。素材の良さがそのまま伝わる一着。",                           sizes: ["S","M","L","XL"], colors: ["ホワイト","ライトベージュ"],               image: "/images/item-16.jpg", images: ["/images/item-16.jpg"], stock: true, isNew: false },
    { id: "17", name: "デプス スカーフ付きブラウス",          price: 24500, category: "トップス",   description: "深みのあるキャラクターを表現する映像で選ばれた、スカーフ付きの特別感あるブラウス。",                       sizes: ["S","M","L"], colors: ["ネイビー×ゴールド","ブラック×シルバー"],   image: "/images/item-17.jpg", images: ["/images/item-17.jpg"], stock: true, isNew: true  },
    { id: "18", name: "トラスト テーラードスーツ",            price: 29000, category: "アウター",   description: "信頼を映像で構築するプロジェクトで選ばれた、信頼感あふれるテーラードスーツ。",                             sizes: ["S","M","L"], colors: ["ネイビー","チャコール"],                   image: "/images/item-18.jpg", images: ["/images/item-18.jpg"], stock: true, isNew: false },
    { id: "19", name: "オーラ アシメドレス",                  price: 25000, category: "ワンピース", description: "存在感を映像で表現するシーンで着用された、アシメトリーラインが印象的なドレス。",                             sizes: ["S","M","L"], colors: ["ブラック","オフホワイト"],                 image: "/images/item-19.jpg", images: ["/images/item-19.jpg"], stock: true, isNew: false },
    { id: "20", name: "レガシー カシミヤコート",              price: 30000, category: "アウター",   description: "「未来へ繋ぐ」をテーマにした映像から生まれた最高級カシミヤコート。長く愛用できる一着です。",                 sizes: ["S","M","L"], colors: ["キャメル","グレー","ブラック"],             image: "/images/item-20.jpg", images: ["/images/item-20.jpg"], stock: true, isNew: true  },
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
