import { R } from '../components/Furigana.jsx'

export const QUIZZES = {
  textile: {
    title:'繊維産業クイズ',
    titleEn:'Textile Industry Quiz',
    questions:[
      {
        q:<>ダッカ・モスリンは<R k="何" r="なに"/>と<R k="呼" r="よ"/>ばれていましたか？</>,
        qEn:'What was Dhaka Muslin famously called?',
        options:[
          {text:'織られた空気 (Woven Air)',correct:true},
          {text:'金の糸 (Golden Thread)'},
          {text:'王の布 (Royal Cloth)'},
          {text:'神の織物 (Sacred Weave)'},
        ],
        exp:<>その<R k="繊細" r="せんさい"/>さから「<R k="織" r="お"/>られた<R k="空気" r="くうき"/>」（Woven Air）と<R k="呼" r="よ"/>ばれ、<R k="指輪" r="ゆびわ"/>を<R k="通" r="とお"/>るほど<R k="薄" r="うす"/>かった。</>
      },
      {
        q:<>バングラデシュは<R k="現在" r="げんざい"/><R k="世界" r="せかい"/>で<R k="何位" r="なんい"/>の<R k="衣料品輸出国" r="いりょうひんゆしゅつこく"/>ですか？</>,
        qEn:'What is Bangladesh\'s ranking as a garment exporter?',
        options:[
          {text:'第1位'},
          {text:'第2位',correct:true},
          {text:'第3位'},
          {text:'第5位'},
        ],
        exp:<><R k="中国" r="ちゅうごく"/>に<R k="次" r="つ"/>ぐ<R k="世界第二位" r="せかいだいにい"/>の<R k="衣料品輸出国" r="いりょうひんゆしゅつこく"/>です。</>
      },
      {
        q:<>モスリン<R k="織" r="お"/>りの<R k="技術" r="ぎじゅつ"/>はどうやって<R k="伝" r="つた"/>えられましたか？</>,
        qEn:'How was muslin weaving knowledge transferred?',
        options:[
          {text:'書物で'},
          {text:'王室の学校で'},
          {text:'母から娘への口伝',correct:true},
          {text:'インドから輸入'},
        ],
        exp:<><R k="技術" r="ぎじゅつ"/>は<R k="文字" r="もじ"/>に<R k="記録" r="きろく"/>されず、<R k="母" r="はは"/>から<R k="娘" r="むすめ"/>へ<R k="口伝" r="くちでん"/>でのみ<R k="伝" r="つた"/>えられました。</>
      },
      {
        q:<>マリー・アントワネットが<R k="愛用" r="あいよう"/>したのは？</>,
        qEn:'What did Marie Antoinette love?',
        options:[
          {text:'シルクドレス'},
          {text:'モスリンドレス',correct:true},
          {text:'ベルベットローブ'},
          {text:'金の糸の刺繍'},
        ],
        exp:<><R k="王妃" r="おうひ"/>はシンプルなモスリンの<R k="ドレス" r="ドレス"/>「シュミーズ・ア・ラ・レーヌ」を<R k="愛好" r="あいこう"/>し、<R k="批判" r="ひはん"/>も<R k="呼" r="よ"/>びました。</>
      },
      {
        q:<>バングラデシュの<R k="衣料品産業" r="いりょうひんさんぎょう"/>で<R k="働" r="はたら"/>く<R k="人" r="ひと"/>の<R k="80%" r="はちじゅっ"/>パーセントは？</>,
        qEn:'Who makes up 80% of garment industry workers?',
        options:[
          {text:'男性'},
          {text:'女性',correct:true},
          {text:'外国人'},
          {text:'子供'},
        ],
        exp:<>420<R k="万人以上" r="まんにんいじょう"/>の<R k="従事者" r="じゅうじしゃ"/>のうち80%が<R k="女性" r="じょせい"/>で、<R k="経済的自立" r="けいざいてきじりつ"/>に<R k="大" r="おお"/>きく<R k="貢献" r="こうけん"/>しています。</>
      },
    ]
  },
  leather: {
    title:'皮革産業クイズ',
    titleEn:'Leather Industry Quiz',
    questions:[
      {
        q:<>バングラデシュの<R k="皮革産業" r="ひかくさんぎょう"/>は<R k="何番目" r="なんばんめ"/>の<R k="輸出産業" r="ゆしゅつさんぎょう"/>ですか？</>,
        qEn:'What rank is leather among Bangladesh\'s exports?',
        options:[
          {text:'第1位'},
          {text:'第2位',correct:true},
          {text:'第3位'},
          {text:'第4位'},
        ],
        exp:<><R k="衣料品" r="いりょうひん"/>に<R k="次" r="つ"/>ぐ<R k="第二" r="だいに"/>の<R k="輸出産業" r="ゆしゅつさんぎょう"/>です。</>
      },
      {
        q:<><R k="工場" r="こうじょう"/>はハザリバグからどこに<R k="移転" r="いてん"/>しましたか？</>,
        qEn:'Where did factories move from Hazaribagh?',
        options:[
          {text:'チッタゴン'},
          {text:'シレット'},
          {text:'サバール',correct:true},
          {text:'クルナ'},
        ],
        exp:<>2017<R k="年" r="ねん"/>、<R k="環境問題" r="かんきょうもんだい"/>を<R k="解決" r="かいけつ"/>するためサバール<R k="皮革団地" r="ひかくだんち"/>に<R k="集団移転" r="しゅうだんいてん"/>しました。</>
      },
      {
        q:<>サバール<R k="皮革団地" r="ひかくだんち"/>には<R k="何" r="なん"/><R k="工場" r="こうじょう"/>ありますか？</>,
        qEn:'How many factories are in Savar Tannery Estate?',
        options:[
          {text:'50'},
          {text:'155',correct:true},
          {text:'300'},
          {text:'500'},
        ],
        exp:<>155の<R k="皮革工場" r="ひかくこうじょう"/>が<R k="集積" r="しゅうせき"/>し、<R k="中央集中型" r="ちゅうおうしゅうちゅうがた"/>の<R k="排水処理" r="はいすいしょり"/>を<R k="完備" r="かんび"/>しています。</>
      },
      {
        q:<>2030<R k="年" r="ねん"/>の<R k="輸出目標額" r="ゆしゅつもくひょうがく"/>は？</>,
        qEn:'What is the 2030 export target?',
        options:[
          {text:'$10億'},
          {text:'$30億'},
          {text:'$50億',correct:true},
          {text:'$100億'},
        ],
        exp:<><R k="政府" r="せいふ"/>は2030<R k="年" r="ねん"/>までに50<R k="億" r="おく"/>ドル（<R k="現在" r="げんざい"/>の<R k="約" r="やく"/>4<R k="倍" r="ばい"/>）の<R k="輸出" r="ゆしゅつ"/>を<R k="目指" r="めざ"/>します。</>
      },
      {
        q:<><R k="皮革産業" r="ひかくさんぎょう"/>の<R k="雇用者数" r="こようしゃすう"/>は？</>,
        qEn:'How many people work in leather?',
        options:[
          {text:'15万人'},
          {text:'45万人'},
          {text:'85万人',correct:true},
          {text:'150万人'},
        ],
        exp:<>85<R k="万人以上" r="まんにんいじょう"/>が<R k="従事" r="じゅうじ"/>し、<R k="地方経済" r="ちほうけいざい"/>と<R k="雇用" r="こよう"/>の<R k="重要" r="じゅうよう"/>な<R k="柱" r="はしら"/>となっています。</>
      },
    ]
  },
  jute: {
    title:'黄麻産業クイズ',
    titleEn:'Jute Industry Quiz',
    questions:[
      {
        q:<>ジュートは<R k="何" r="なに"/>と<R k="呼" r="よ"/>ばれていますか？</>,
        qEn:'What is jute called?',
        options:[
          {text:'銀の繊維'},
          {text:'黄金の繊維',correct:true},
          {text:'天の繊維'},
          {text:'緑の繊維'},
        ],
        exp:<>「<R k="黄金" r="おうごん"/>の<R k="繊維" r="せんい"/>（Golden Fibre）」と<R k="呼" r="よ"/>ばれ、その<R k="輝" r="かがや"/>きと<R k="国" r="くに"/>に<R k="もたらした富" r="もたらしたとみ"/>が<R k="由来" r="ゆらい"/>です。</>
      },
      {
        q:<>バングラデシュの<R k="世界生産シェア" r="せかいせいさんシェア"/>は？</>,
        qEn:'Bangladesh\'s share of global jute production?',
        options:[
          {text:'20%'},
          {text:'40%',correct:true},
          {text:'60%'},
          {text:'80%'},
        ],
        exp:<><R k="世界" r="せかい"/>のジュート<R k="生産量" r="せいさんりょう"/>の<R k="約" r="やく"/>40%を<R k="占" r="し"/>める<R k="世界最大" r="せかいさいだい"/>の<R k="生産国" r="せいさんこく"/>です。</>
      },
      {
        q:<>ジュート<R k="栽培" r="さいばい"/>は<R k="何日" r="なんにち"/>かかりますか？</>,
        qEn:'How long is the jute growing cycle?',
        options:[
          {text:'60日'},
          {text:'90日'},
          {text:'120日',correct:true},
          {text:'180日'},
        ],
        exp:<><R k="植" r="う"/>えてから<R k="収穫" r="しゅうかく"/>まで<R k="約" r="やく"/>120<R k="日" r="にち"/>かかります。</>
      },
      {
        q:<>JDPプロジェクトで<R k="開発" r="かいはつ"/>された<R k="製品数" r="せいひんすう"/>は？</>,
        qEn:'How many JDP products have been developed?',
        options:[
          {text:'50種類以上'},
          {text:'150種類以上'},
          {text:'280種類以上',correct:true},
          {text:'500種類以上'},
        ],
        exp:<>280<R k="種類以上" r="しゅるいいじょう"/>の<R k="多様化製品" r="たようかせいひん"/>が<R k="開発" r="かいはつ"/>され、<R k="新市場" r="しんしじょう"/>を<R k="開拓" r="かいたく"/>しています。</>
      },
      {
        q:<>ジュートの<R k="特徴" r="とくちょう"/>は？</>,
        qEn:'What is jute\'s key feature?',
        options:[
          {text:'最も強い繊維'},
          {text:'100%生分解性',correct:true},
          {text:'最も安い繊維'},
          {text:'最も柔らかい'},
        ],
        exp:<>100%<R k="天然" r="てんねん"/>・<R k="生分解性" r="せいぶんかいせい"/>のサステナブル<R k="素材" r="そざい"/>として<R k="再評価" r="さいひょうか"/>されています。</>
      },
    ]
  },
  pharma: {
    title:'医薬品産業クイズ',
    titleEn:'Pharma Industry Quiz',
    questions:[
      {
        q:<>バングラデシュの<R k="医薬品自給率" r="いやくひんじきゅうりつ"/>は？</>,
        qEn:'Bangladesh\'s pharmaceutical self-sufficiency?',
        options:[
          {text:'50%'},
          {text:'75%'},
          {text:'98%',correct:true},
          {text:'100%'},
        ],
        exp:<><R k="国内需要" r="こくないじゅよう"/>の98%を<R k="自国生産" r="じこくせいさん"/>で<R k="賄" r="まかな"/>えるという<R k="高水準" r="こうすいじゅん"/>です。</>
      },
      {
        q:<>1982<R k="年" r="ねん"/>に<R k="制定" r="せいてい"/>された<R k="政策" r="せいさく"/>は？</>,
        qEn:'What policy was enacted in 1982?',
        options:[
          {text:'国家医薬品政策',correct:true},
          {text:'外国投資法'},
          {text:'輸出促進法'},
          {text:'医療保険法'},
        ],
        exp:<><R k="国家医薬品政策" r="こっかいやくひんせいさく"/>（National Drug Policy）が、<R k="現在" r="げんざい"/>の<R k="製薬産業" r="せいやくさんぎょう"/>の<R k="基礎" r="きそ"/>を<R k="築" r="きず"/>きました。</>
      },
      {
        q:<><R k="医薬品" r="いやくひん"/>は<R k="何" r="なん"/>カ国に<R k="輸出" r="ゆしゅつ"/>されますか？</>,
        qEn:'How many countries does Bangladesh export medicine to?',
        options:[
          {text:'50カ国以上'},
          {text:'100カ国以上'},
          {text:'150カ国以上',correct:true},
          {text:'200カ国以上'},
        ],
        exp:<><R k="現在" r="げんざい"/>150<R k="カ国以上" r="カこくいじょう"/>に<R k="輸出" r="ゆしゅつ"/>される<R k="製薬大国" r="せいやくたいこく"/>です。</>
      },
      {
        q:<>LDC<R k="特権" r="とっけん"/>はいつまで<R k="続" r="つづ"/>きますか？</>,
        qEn:'Until when does LDC privilege last?',
        options:[
          {text:'2025年'},
          {text:'2030年'},
          {text:'2033年',correct:true},
          {text:'2040年'},
        ],
        exp:<>2033<R k="年" r="ねん"/>まで<R k="特許" r="とっきょ"/>の<R k="制約" r="せいやく"/>なくジェネリック<R k="製造" r="せいぞう"/>が<R k="可能" r="かのう"/>です。</>
      },
      {
        q:<>COVID-19で<R k="供給" r="きょうきゅう"/>した<R k="薬" r="くすり"/>は？</>,
        qEn:'What drug did Bangladesh supply during COVID-19?',
        options:[
          {text:'パラセタモール'},
          {text:'レムデシビル',correct:true},
          {text:'アスピリン'},
          {text:'モルヒネ'},
        ],
        exp:<>レムデシビルを<R k="安価" r="あんか"/>で<R k="低所得国" r="ていしょとくこく"/>に<R k="供給" r="きょうきゅう"/>し<R k="国際的" r="こくさいてき"/>に<R k="高評価" r="こうひょうか"/>を<R k="得" r="え"/>ました。</>
      },
    ]
  },
};
