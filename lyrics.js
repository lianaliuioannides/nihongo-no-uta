const SONGS = [
  {
    id: 'lemon',
    title: 'Lemon',
    titleJa: 'レモン',
    artist: 'Kenshi Yonezu',
    artistJa: '米津玄師',
    year: 2018,
    color: '#e8c84a',
    description: 'A bittersweet ballad about grief and longing, written after losing someone dear.',
    youtubeId: 'SX_ViT4Ra7k',
    sections: [
      {
        name: 'Verse 1',
        lines: [
          { ja: '夢ならばどれほどよかったでしょう', romaji: 'Yume naraba dore hodo yokatta deshō', en: 'How much better it would have been if this were just a dream' },
          { ja: '未だあなたのことを夢にみる', romaji: 'Imada anata no koto wo yume ni miru', en: 'I still dream about you even now' },
          { ja: '忘れてしまいたいのに', romaji: 'Wasurete shimaitai no ni', en: 'Even though I want to forget' },
          { ja: '忘れられないでいる', romaji: 'Wasurerarenaide iru', en: 'I find myself unable to forget' },
        ]
      },
      {
        name: 'Pre-Chorus',
        lines: [
          { ja: '胸に残り離れない', romaji: 'Mune ni nokori hanarenai', en: 'It lingers in my chest and won\'t let go' },
          { ja: '苦いレモンの匂い', romaji: 'Nigai remon no nioi', en: 'The scent of a bitter lemon' },
          { ja: '雨が降り止むまでは', romaji: 'Ame ga furi yamu made wa', en: 'Until the rain stops falling' },
          { ja: '帰れない帰れない', romaji: 'Kaerenai kaerenai', en: 'I cannot return, I cannot return' },
        ]
      },
      {
        name: 'Chorus',
        lines: [
          { ja: 'あの日の悲しみさえ', romaji: 'Ano hi no kanashimi sae', en: 'Even the sadness of that day' },
          { ja: 'あの日の苦しみさえ', romaji: 'Ano hi no kurushimi sae', en: 'Even the suffering of that day' },
          { ja: 'そのすべてを愛して', romaji: 'Sono subete wo aishite', en: 'Loving all of it' },
          { ja: '世界は美しい', romaji: 'Sekai wa utsukushii', en: 'The world is beautiful' },
          { ja: '君が遺した痛みさえ', romaji: 'Kimi ga nokoshita itami sae', en: 'Even the pain you left behind' },
          { ja: '今も僕を苦しめるよ', romaji: 'Ima mo boku wo kurushimeru yo', en: 'Still hurts me even now' },
          { ja: 'それでも遠い夢の中で', romaji: 'Soredemo tōi yume no naka de', en: 'Even so, in a distant dream' },
          { ja: 'いつか君に逢える', romaji: 'Itsuka kimi ni aeru', en: 'Someday I\'ll be able to meet you again' },
        ]
      },
      {
        name: 'Verse 2',
        lines: [
          { ja: '今も君はわたしの光', romaji: 'Ima mo kimi wa watashi no hikari', en: 'Even now, you are my light' },
          { ja: '初めて出逢った日のことを', romaji: 'Hajimete deatta hi no koto wo', en: 'Thinking of the day we first met' },
          { ja: '鮮明に覚えている', romaji: 'Senmeini oboete iru', en: 'I remember it so vividly' },
          { ja: 'いつまでも続くと思っていた', romaji: 'Itsumade mo tsuzuku to omotteita', en: 'I thought it would go on forever' },
        ]
      },
      {
        name: 'Bridge',
        lines: [
          { ja: 'ただ恋しくて', romaji: 'Tada koishikute', en: 'I simply miss you' },
          { ja: 'あなたを想うと胸が痛くなる', romaji: 'Anata wo omou to mune ga itaku naru', en: 'When I think of you, my chest aches' },
          { ja: 'なぜ君は旅立ってしまったの', romaji: 'Naze kimi wa tabidatte shimatta no', en: 'Why did you have to go away' },
          { ja: 'どこにいるの', romaji: 'Doko ni iru no', en: 'Where are you now' },
        ]
      },
    ],
    vocab: [
      { ja: '夢', hiragana: 'ゆめ', romaji: 'yume', en: 'dream' },
      { ja: '悲しみ', hiragana: 'かなしみ', romaji: 'kanashimi', en: 'sadness' },
      { ja: '苦しみ', hiragana: 'くるしみ', romaji: 'kurushimi', en: 'suffering / pain' },
      { ja: '世界', hiragana: 'せかい', romaji: 'sekai', en: 'world' },
      { ja: '光', hiragana: 'ひかり', romaji: 'hikari', en: 'light' },
      { ja: '痛み', hiragana: 'いたみ', romaji: 'itami', en: 'pain' },
      { ja: '雨', hiragana: 'あめ', romaji: 'ame', en: 'rain' },
      { ja: '胸', hiragana: 'むね', romaji: 'mune', en: 'chest / heart' },
      { ja: '匂い', hiragana: 'にかい', romaji: 'nioi', en: 'scent / smell' },
      { ja: '恋しい', hiragana: 'こいしい', romaji: 'koishii', en: 'to long for / to miss' },
      { ja: '今', hiragana: 'いま', romaji: 'ima', en: 'now' },
      { ja: '忘れる', hiragana: 'わすれる', romaji: 'wasureru', en: 'to forget' },
      { ja: '帰る', hiragana: 'かえる', romaji: 'kaeru', en: 'to return / go home' },
      { ja: '美しい', hiragana: 'うつくしい', romaji: 'utsukushii', en: 'beautiful' },
      { ja: 'いつか', hiragana: 'いつか', romaji: 'itsuka', en: 'someday' },
    ],
    extendedVocab: [
      { ja: 'あなた', hiragana: 'あなた', romaji: 'anata', en: 'you (formal)' },
      { ja: '君', hiragana: 'きみ', romaji: 'kimi', en: 'you (casual)' },
      { ja: '日', hiragana: 'ひ', romaji: 'hi', en: 'day / sun' },
      { ja: '遠い', hiragana: 'とおい', romaji: 'tōi', en: 'far / distant' },
      { ja: '中', hiragana: 'なか', romaji: 'naka', en: 'inside / among' },
      { ja: '苦い', hiragana: 'にがい', romaji: 'nigai', en: 'bitter' },
      { ja: '離れる', hiragana: 'はなれる', romaji: 'hanareru', en: 'to separate / move apart' },
      { ja: '残る', hiragana: 'のこる', romaji: 'nokoru', en: 'to remain / be left' },
      { ja: '覚える', hiragana: 'おぼえる', romaji: 'oboeru', en: 'to remember / memorize' },
      { ja: '想う', hiragana: 'おもう', romaji: 'omou', en: 'to think of / to feel' },
      { ja: '旅立つ', hiragana: 'たびだつ', romaji: 'tabidatsu', en: 'to set off on a journey / to depart' },
      { ja: '初めて', hiragana: 'はじめて', romaji: 'hajimete', en: 'for the first time' },
      { ja: '出逢う', hiragana: 'であう', romaji: 'deau', en: 'to meet / encounter' },
      { ja: '続く', hiragana: 'つづく', romaji: 'tsuzuku', en: 'to continue / go on' },
      { ja: 'なぜ', hiragana: 'なぜ', romaji: 'naze', en: 'why' },
    ]
  },

  {
    id: 'neko',
    title: 'Cat',
    titleJa: '猫',
    artist: 'DISH//',
    artistJa: 'DISH//',
    year: 2020,
    color: '#a78bfa',
    description: 'A raw breakup song — the city swallows you whole, and somehow the person you lost became a cat you\'re waiting to see again.',
    youtubeId: null,
    youtubeSearch: '猫 DISH// official',
    sections: [
      {
        name: 'Verse 1',
        lines: [
          { ja: '夕焼けが燃えてこの街ごと', romaji: 'Yūyake ga moete kono machi goto', en: 'The sunset blazes, as if to swallow this whole city' },
          { ja: '飲み込んでしまいそうな今日に', romaji: 'Nomikonde shimaisō na kyō ni', en: 'On this day that feels like it might just consume everything' },
          { ja: '僕は君を手放してしまった', romaji: 'Boku wa kimi wo tebanashite shimatta', en: 'I let you go' },
          { ja: '明日が不安だ とても嫌だ', romaji: 'Ashita ga fuan da, totemo iya da', en: 'Tomorrow terrifies me, I hate it so much' },
          { ja: 'だからこの僕も一緒に', romaji: 'Dakara kono boku mo issho ni', en: 'So take me too, along with it all' },
          { ja: '飲み込んでしまえよ夕焼け', romaji: 'Nomikonde shimaeyо yūyake', en: 'Just swallow me up too, sunset' },
        ]
      },
      {
        name: 'Verse 2',
        lines: [
          { ja: 'だけどもそうはいかないよな', romaji: 'Dakedo mo sō wa ikanai yo na', en: 'But it doesn\'t work like that, does it' },
          { ja: '明日ってウザいほど来るよな', romaji: 'Ashita tte uzai hodo kuru yo na', en: 'Tomorrow just keeps on annoyingly coming' },
          { ja: '眠たい夜になんだか笑っちゃう', romaji: 'Nemutai yoru ni nandaka waratchau', en: 'On this sleepy night I find myself laughing somehow' },
        ]
      },
      {
        name: 'Pre-Chorus',
        lines: [
          { ja: '家まで帰ろう 1人で帰ろう', romaji: 'Ie made kaerō, hitori de kaerō', en: 'Let\'s go home, go home alone' },
          { ja: '昨日のことなど 幻だと思おう', romaji: 'Kinō no koto nado maboroshi da to omōu', en: 'Let\'s think of yesterday as just an illusion' },
          { ja: '君の顔なんて忘れてやるさ', romaji: 'Kimi no kao nante wasurete yaru sa', en: 'I\'ll forget your face, just you watch' },
          { ja: '馬鹿馬鹿しいだろ、そうだろ', romaji: 'Bakabakashii daro, sō daro', en: 'That\'s ridiculous, isn\'t it, yeah it is' },
        ]
      },
      {
        name: 'Chorus 1',
        lines: [
          { ja: '君がいなくなった日々も', romaji: 'Kimi ga inakunatta hibi mo', en: 'The days now that you\'re gone' },
          { ja: 'このどうしようもない気だるさも', romaji: 'Kono dōshiyō mo nai kidarusa mo', en: 'This unbearable sluggishness' },
          { ja: '心と体が喧嘩して', romaji: 'Kokoro to karada ga kenka shite', en: 'My heart and body are fighting each other' },
          { ja: '頼りない僕は寝転んで', romaji: 'Tayorinai boku wa netekonde', en: 'And helpless me just lies down' },
          { ja: '猫になったんだよな君は', romaji: 'Neko ni natta n da yo na, kimi wa', en: 'You\'ve become a cat, haven\'t you' },
          { ja: 'いつかフラッと現れてくれ', romaji: 'Itsuka furatto arawarete kure', en: 'Just show up casually someday' },
          { ja: '何気ない毎日を君色に染めておくれよ', romaji: 'Nanigenai mainichi wo kimi-iro ni somete okure yo', en: 'Dye my ordinary every day in your colour' },
        ]
      },
      {
        name: 'Verse 3',
        lines: [
          { ja: '夕焼けが燃えてこの街ごと', romaji: 'Yūyake ga moete kono machi goto', en: 'The sunset blazes, as if to swallow this whole city' },
          { ja: '飲み込んでしまいそうな今日に', romaji: 'Nomikonde shimaisō na kyō ni', en: 'On this day that feels like it might just consume everything' },
          { ja: '僕は君を手放してしまった', romaji: 'Boku wa kimi wo tebanashite shimatta', en: 'I let you go' },
          { ja: '若すぎる僕らはまた1から', romaji: 'Wakasugiru bokura wa mata ichi kara', en: 'We who are still too young, starting again from zero' },
          { ja: '出会うことは可能なのかな', romaji: 'Deau koto wa kanō na no kana', en: 'I wonder if meeting again is even possible' },
          { ja: '願うだけ無駄ならもうダメだ', romaji: 'Negau dake muda nara mō dame da', en: 'If wishing is pointless then I\'m already done for' },
        ]
      },
      {
        name: 'Pre-Chorus 2',
        lines: [
          { ja: '家までつくのが こんなにも嫌だ', romaji: 'Ie made tsuku no ga konna ni mo iya da', en: 'Getting home feels this bad' },
          { ja: '歩くスピードは', romaji: 'Aruku supīdo wa', en: 'My walking pace is' },
          { ja: '君が隣にいる時のまんま', romaji: 'Kimi ga tonari ni iru toki no manma', en: 'Still the same as when you were walking beside me' },
          { ja: '想い出巡らせ', romaji: 'Omoide megurases', en: 'Turning memories over and over' },
          { ja: 'がんじがらめのため息ばっか', romaji: 'Ganjigara me no tameiki bakka', en: 'Nothing but trapped, suffocating sighs' },
          { ja: '馬鹿にしろよ、笑えよ', romaji: 'Baka ni shiro yo, warae yo', en: 'Go ahead and mock me, laugh at me' },
        ]
      },
      {
        name: 'Chorus 2',
        lines: [
          { ja: '君がいなくなった日々は', romaji: 'Kimi ga inakunatta hibi wa', en: 'The days now that you\'re gone' },
          { ja: '面白いくらいにつまらない', romaji: 'Omoshiroi kurai ni tsumaranai', en: 'Are boring to a laughable degree' },
          { ja: '全力で忘れようとするけど', romaji: 'Zenryoku de wasureyō to suru kedo', en: 'I try with everything I have to forget you, but' },
          { ja: '全身で君を求めてる', romaji: 'Zenshin de kimi wo motomete ru', en: 'Every part of me is searching for you' },
          { ja: '猫になったんだよな君は', romaji: 'Neko ni natta n da yo na, kimi wa', en: 'You\'ve become a cat, haven\'t you' },
          { ja: 'いつかまたあの声を聞かせてよ', romaji: 'Itsuka mata ano koe wo kikasete yo', en: 'Let me hear that voice of yours again someday' },
          { ja: '矛盾ばっかで無茶苦茶な僕を', romaji: 'Mujun bakka de muchakucha na boku wo', en: 'Me, a walking contradiction, an absolute mess' },
          { ja: '慰めてほしい', romaji: 'Nagusamete hoshii', en: 'I want you to comfort me' },
        ]
      },
      {
        name: 'Bridge',
        lines: [
          { ja: '君がいなくなった日々も', romaji: 'Kimi ga inakunatta hibi mo', en: 'The days now that you\'re gone' },
          { ja: 'このどうしようもない気だるさも', romaji: 'Kono dōshiyō mo nai kidarusa mo', en: 'This unbearable sluggishness' },
          { ja: '心と体が喧嘩して', romaji: 'Kokoro to karada ga kenka shite', en: 'My heart and body are fighting each other' },
          { ja: '頼りない僕は寝転んで', romaji: 'Tayorinai boku wa netekonde', en: 'And helpless me just lies down' },
          { ja: '猫になったんだよな君は', romaji: 'Neko ni natta n da yo na, kimi wa', en: 'You\'ve become a cat, haven\'t you' },
          { ja: 'いつかフラッと現れてくれ', romaji: 'Itsuka furatto arawarete kure', en: 'Just show up casually someday' },
          { ja: '何気ない毎日を君色に染めておくれよ', romaji: 'Nanigenai mainichi wo kimi-iro ni somete okure yo', en: 'Dye my ordinary every day in your colour' },
        ]
      },
      {
        name: 'Chorus 3',
        lines: [
          { ja: '君がもし捨て猫だったら', romaji: 'Kimi ga moshi suteneko dattara', en: 'If you were a stray cat' },
          { ja: 'この腕の中で抱きしめるよ', romaji: 'Kono ude no naka de dakishimeru yo', en: 'I\'d hold you tight in these arms' },
          { ja: 'ケガしてるならその傷拭うし', romaji: 'Kega shiteru nara sono kizu nuguu shi', en: 'If you\'re hurt I\'d wipe away those wounds' },
          { ja: '精一杯の温もりをあげる', romaji: 'Seiippai no nukumori wo ageru', en: 'And give you all the warmth I have' },
          { ja: '会いたいんだ忘れられない', romaji: 'Aitai n da wasurerarenai', en: 'I want to see you, I can\'t forget you' },
          { ja: '猫になってでも現れてほしい', romaji: 'Neko ni natte demo arawarete hoshii', en: 'I want you to appear even if it\'s as a cat' },
          { ja: 'いつか君がフラッと現れて', romaji: 'Itsuka kimi ga furatto arawarete', en: 'Someday you just casually show up' },
          { ja: '僕はまた、幸せで', romaji: 'Boku wa mata, shiawase de', en: 'And I\'ll be happy again' },
        ]
      },
    ],
    vocab: [
      { ja: '猫', hiragana: 'ねこ', romaji: 'neko', en: 'cat' },
      { ja: '夕焼け', hiragana: 'ゆうやけ', romaji: 'yūyake', en: 'sunset / evening glow' },
      { ja: '街', hiragana: 'まち', romaji: 'machi', en: 'town / city' },
      { ja: '明日', hiragana: 'あした', romaji: 'ashita', en: 'tomorrow' },
      { ja: '心', hiragana: 'こころ', romaji: 'kokoro', en: 'heart / mind' },
      { ja: '体', hiragana: 'からだ', romaji: 'karada', en: 'body' },
      { ja: '声', hiragana: 'こえ', romaji: 'koe', en: 'voice' },
      { ja: '顔', hiragana: 'かお', romaji: 'kao', en: 'face' },
      { ja: '日々', hiragana: 'ひび', romaji: 'hibi', en: 'days / daily life' },
      { ja: '幸せ', hiragana: 'しあわせ', romaji: 'shiawase', en: 'happiness / happy' },
      { ja: '忘れる', hiragana: 'わすれる', romaji: 'wasureru', en: 'to forget' },
      { ja: '願う', hiragana: 'ねがう', romaji: 'negau', en: 'to wish / pray for' },
      { ja: '温もり', hiragana: 'ぬくもり', romaji: 'nukumori', en: 'warmth' },
      { ja: '矛盾', hiragana: 'むじゅん', romaji: 'mujun', en: 'contradiction' },
      { ja: '慰める', hiragana: 'なぐさめる', romaji: 'nagusameru', en: 'to comfort / console' },
    ],
    extendedVocab: [
      { ja: '燃える', hiragana: 'もえる', romaji: 'moeru', en: 'to burn / blaze' },
      { ja: '手放す', hiragana: 'てばなす', romaji: 'tebanasu', en: 'to let go / release' },
      { ja: '帰る', hiragana: 'かえる', romaji: 'kaeru', en: 'to return / go home' },
      { ja: '昨日', hiragana: 'きのう', romaji: 'kinō', en: 'yesterday' },
      { ja: '幻', hiragana: 'まぼろし', romaji: 'maboroshi', en: 'illusion / phantom' },
      { ja: '喧嘩', hiragana: 'けんか', romaji: 'kenka', en: 'fight / quarrel' },
      { ja: '全力', hiragana: 'ぜんりょく', romaji: 'zenryoku', en: 'full strength / all-out' },
      { ja: '全身', hiragana: 'ぜんしん', romaji: 'zenshin', en: 'whole body / entire self' },
      { ja: '傷', hiragana: 'きず', romaji: 'kizu', en: 'wound / scratch / scar' },
      { ja: '腕', hiragana: 'うで', romaji: 'ude', en: 'arm' },
      { ja: 'いつか', hiragana: 'いつか', romaji: 'itsuka', en: 'someday' },
      { ja: 'また', hiragana: 'また', romaji: 'mata', en: 'again / once more' },
      { ja: '出会う', hiragana: 'であう', romaji: 'deau', en: 'to meet / encounter' },
    ]
  },

  {
    id: 'betsu',
    title: "Became Someone Else's",
    titleJa: '別の人の彼女になったよ',
    artist: 'Wacci',
    artistJa: 'ワッチ',
    year: 2018,
    color: '#f87171',
    description: 'A resigned, bittersweet song — she\'s become someone else\'s girlfriend, and the new guy is everything her ex wasn\'t.',
    youtubeId: null,
    youtubeSearch: '別の人の彼女になったよ ワッチ',
    sections: [
      {
        name: 'Verse 1',
        lines: [
          { ja: '別の人の彼女になったよ', romaji: 'Betsu no hito no kanojo ni natta yo', en: 'I\'ve become someone else\'s girlfriend' },
          { ja: '今度はあなたみたいに 一緒にフェスで', romaji: 'Kondo wa anata mitai ni, issho ni fesu de', en: 'This time, unlike with you, together at a festival' },
          { ja: '大はしゃぎとかはしないタイプだけど', romaji: 'Ōhashagi toka wa shinai taipu da kedo', en: 'He\'s not the type to go wild and rowdy' },
          { ja: '余裕があって大人で', romaji: 'Yoyū ga atte otona de', en: 'He has composure, and he\'s grown-up' },
          { ja: '本当に優しくしてくれるの', romaji: 'Hontō ni yasashiku shite kureru no', en: 'He\'s truly, genuinely kind to me' },
          { ja: '別の人の彼女になったよ', romaji: 'Betsu no hito no kanojo ni natta yo', en: 'I\'ve become someone else\'s girlfriend' },
          { ja: '今度はあなたみたいに 映画見てても', romaji: 'Kondo wa anata mitai ni, eiga mitete mo', en: 'This time, unlike with you, even watching a film' },
          { ja: '私より泣いてることなんてないし', romaji: 'Watashi yori naite ru koto nante nai shi', en: 'He never cries more than me' },
          { ja: 'どんなことにも詳しくて', romaji: 'Donna koto ni mo kuwashikute', en: 'He knows so much about everything' },
          { ja: '本当に尊敬できる人なの', romaji: 'Hontō ni sonkei dekiru hito na no', en: 'He\'s someone I can truly respect' },
        ]
      },
      {
        name: 'Pre-Chorus',
        lines: [
          { ja: 'キスや態度だけで 終わらせたりせずに', romaji: 'Kisu ya taido dake de, owarase tari sezu ni', en: 'Without wrapping things up with just a kiss or body language' },
          { ja: 'ちゃんと「好きだ」という 言葉でくれるの', romaji: 'Chanto "suki da" to iu, kotoba de kureru no', en: 'He properly gives me the words "I like you"' },
          { ja: '怒鳴りあいはおろか 口喧嘩もなくて', romaji: 'Donariai wa oroka, kuchigenka mo nakute', en: 'Let alone shouting matches, we don\'t even argue' },
          { ja: 'むしろ怒るとこが どこにもないの', romaji: 'Mushiro okoru toko ga doko ni mo nai no', en: 'If anything, there\'s nothing to even get angry about' },
        ]
      },
      {
        name: 'Chorus 1',
        lines: [
          { ja: 'だからもう会えないや ごめんね', romaji: 'Dakara mō aenai ya, gomen ne', en: 'So I can\'t see you anymore. I\'m sorry.' },
          { ja: 'だからもう会えないや ごめんね', romaji: 'Dakara mō aenai ya, gomen ne', en: 'So I can\'t see you anymore. I\'m sorry.' },
          { ja: 'あなたも早くなってね', romaji: 'Anata mo hayaku natte ne', en: 'You should become one too, soon' },
          { ja: '別の人の彼氏に', romaji: 'Betsu no hito no kareshi ni', en: 'Someone else\'s boyfriend' },
        ]
      },
      {
        name: 'Verse 2',
        lines: [
          { ja: '別の人の彼女になったよ', romaji: 'Betsu no hito no kanojo ni natta yo', en: 'I\'ve become someone else\'s girlfriend' },
          { ja: 'あなたの時みたいに すっぴんだって', romaji: 'Anata no toki mitai ni, suppindatte', en: 'Unlike with you, I\'m not someone who could be barefaced' },
          { ja: '笑っていられる私ではなくて', romaji: 'Waratte irarete watashi de wa nakute', en: 'And still be laughing about it' },
          { ja: '一生懸命お洒落して', romaji: 'Isshōkenmei oshare shite', en: 'I dress up properly, with all my effort' },
          { ja: 'なるべくちゃんとしてるの', romaji: 'Narubeku chanto shiteru no', en: 'I try to be as put-together as I can' },
          { ja: '別の人の彼女になったよ', romaji: 'Betsu no hito no kanojo ni natta yo', en: 'I\'ve become someone else\'s girlfriend' },
          { ja: 'あなたの時みたいに 大きな声で', romaji: 'Anata no toki mitai ni, ōkina koe de', en: 'Unlike with you, I can\'t talk in a big loud voice' },
          { ja: '愚痴を言うような私ではなくて', romaji: 'Guchi wo iu yō na watashi de wa nakute', en: 'And complain openly' },
          { ja: 'それをすると少しだけ', romaji: 'Sore wo suru to sukoshi dake', en: 'Because if I do, just a little bit' },
          { ja: '叱られてしまうから', romaji: 'Shikararete shimau kara', en: 'I end up getting told off' },
        ]
      },
      {
        name: 'Pre-Chorus 2',
        lines: [
          { ja: '夢や希望とかを 語ることを嫌って', romaji: 'Yume ya kibō toka wo, kataru koto wo kirate', en: 'He disliked talking about dreams and hopes' },
          { ja: 'ちゃんと現実をね 見つめていて', romaji: 'Chanto genjitsu wo ne, mitsumetei te', en: 'He properly faces reality, you see' },
          { ja: '正しいことだけしか 言わないから', romaji: 'Tadashii koto dake shika iwanai kara', en: 'Because he only ever says the correct thing' },
          { ja: 'ずっとさらけ出せず おとなしくしてるの', romaji: 'Zutto sarakede sezu, otonashiku shiteru no', en: 'I can never fully open up, so I stay quiet' },
        ]
      },
      {
        name: 'Chorus 2',
        lines: [
          { ja: 'だからもう会えないや ごめんね', romaji: 'Dakara mō aenai ya, gomen ne', en: 'So I can\'t see you anymore. I\'m sorry.' },
          { ja: 'だからもう会えないや ごめんね', romaji: 'Dakara mō aenai ya, gomen ne', en: 'So I can\'t see you anymore. I\'m sorry.' },
          { ja: 'あなたも早くなってね', romaji: 'Anata mo hayaku natte ne', en: 'You should become one too, soon' },
          { ja: 'だけど私はズルいから', romaji: 'Dakedo watashi wa zurui kara', en: 'But because I\'m sneaky like this' },
          { ja: 'だからもう会いたいや ごめんね', romaji: 'Dakara mō aitai ya, gomen ne', en: 'So I want to see you. I\'m sorry.' },
          { ja: 'だからもう会いたいな ずるいね', romaji: 'Dakara mō aitai na, zurui ne', en: 'So I want to see you. That\'s mean of me, isn\'t it.' },
          { ja: 'あなたも早くなってね 別の人の彼氏に', romaji: 'Anata mo hayaku natte ne, betsu no hito no kareshi ni', en: 'You should become one soon — someone else\'s boyfriend' },
          { ja: '私が電話をしちゃう前に', romaji: 'Watashi ga denwa wo shichau mae ni', en: 'Before I end up calling you' },
        ]
      },
    ],
    vocab: [
      { ja: '彼女', hiragana: 'かのじょ', romaji: 'kanojo', en: 'girlfriend / she / her' },
      { ja: '彼氏', hiragana: 'かれし', romaji: 'kareshi', en: 'boyfriend' },
      { ja: '余裕', hiragana: 'よゆう', romaji: 'yoyū', en: 'composure / leeway / ease' },
      { ja: '大人', hiragana: 'おとな', romaji: 'otona', en: 'adult / grown-up' },
      { ja: '優しい', hiragana: 'やさしい', romaji: 'yasashii', en: 'kind / gentle' },
      { ja: '尊敬', hiragana: 'そんけい', romaji: 'sonkei', en: 'respect / admiration' },
      { ja: '言葉', hiragana: 'ことば', romaji: 'kotoba', en: 'word / words / language' },
      { ja: '夢', hiragana: 'ゆめ', romaji: 'yume', en: 'dream / aspiration' },
      { ja: '希望', hiragana: 'きぼう', romaji: 'kibō', en: 'hope / wish' },
      { ja: '現実', hiragana: 'げんじつ', romaji: 'genjitsu', en: 'reality / the real world' },
      { ja: '電話', hiragana: 'でんわ', romaji: 'denwa', en: 'phone call / telephone' },
      { ja: 'ずるい', hiragana: 'ずるい', romaji: 'zurui', en: 'sneaky / unfair / mean' },
      { ja: '口喧嘩', hiragana: 'くちげんか', romaji: 'kuchigenka', en: 'argument / verbal fight' },
      { ja: '態度', hiragana: 'たいど', romaji: 'taido', en: 'attitude / manner / behaviour' },
    ],
    extendedVocab: [
      { ja: '別', hiragana: 'べつ', romaji: 'betsu', en: 'different / separate / another' },
      { ja: '本当に', hiragana: 'ほんとうに', romaji: 'hontō ni', en: 'truly / really / genuinely' },
      { ja: '一緒', hiragana: 'いっしょ', romaji: 'issho', en: 'together' },
      { ja: '一生懸命', hiragana: 'いっしょうけんめい', romaji: 'isshōkenmei', en: 'with all one\'s effort / as hard as one can' },
      { ja: '映画', hiragana: 'えいが', romaji: 'eiga', en: 'film / movie' },
      { ja: '正しい', hiragana: 'ただしい', romaji: 'tadashii', en: 'correct / right / proper' },
      { ja: 'ごめん', hiragana: 'ごめん', romaji: 'gomen', en: 'sorry / excuse me' },
      { ja: 'むしろ', hiragana: 'むしろ', romaji: 'mushiro', en: 'rather / if anything / on the contrary' },
      { ja: '声', hiragana: 'こえ', romaji: 'koe', en: 'voice' },
      { ja: '笑う', hiragana: 'わらう', romaji: 'warau', en: 'to laugh / smile' },
    ]
  },

  {
    id: 'longhair',
    title: 'Long Hair',
    titleJa: '長い髪',
    artist: 'Fomare',
    artistJa: 'フォーマー',
    year: 2021,
    color: '#34d399',
    description: 'A bittersweet song about memory and distance — long hair drying while you sleep, and a love that\'s slowly letting go.',
    youtubeId: null,
    youtubeSearch: '長い髪 フォーマー',
    sections: [
      {
        name: 'Verse 1',
        lines: [
          { ja: '遊園地前のこの道を通る時は窓を開けて', romaji: 'Yūenchi mae no kono michi wo tōru toki wa mado wo akete', en: 'When I pass this road in front of the amusement park, I open the window' },
          { ja: 'あの頃と同じか何が変わったか', romaji: 'Ano koro to onaji ka nani ga kawatta ka', en: 'Is it the same as back then, or what has changed' },
          { ja: '息を吸い目を閉じ記憶の糸を巡る', romaji: 'Iki wo sui me wo toji kioku no ito wo meguru', en: 'I breathe in, close my eyes, and wander through the threads of memory' },
        ]
      },
      {
        name: 'Verse 2',
        lines: [
          { ja: '笑顔は散ってた桜の花の様', romaji: 'Egao wa chitteta sakura no hana no yō', en: 'Your smile was like scattered cherry blossoms' },
          { ja: '美しいまま何処か遠くへ', romaji: 'Utsukushii mama doko ka tōku e', en: 'Still beautiful, drifting somewhere far away' },
          { ja: '花はまた芽生えて誰かを探すんだ', romaji: 'Hana wa mata mabae te dareka wo sagasunda', en: 'The flowers bloom again, searching for someone' },
          { ja: '枯れ葉になってしまった私は空へ', romaji: 'Kareha ni natte shimatta watashi wa sora e', en: 'I who have become a fallen leaf, float up to the sky' },
        ]
      },
      {
        name: 'Pre-Chorus',
        lines: [
          { ja: '未来は曖昧で悪戯好きで嘘つきだ', romaji: 'Mirai wa aimai de itazurazuki de usotsuki da', en: 'The future is vague, mischievous, and a liar' },
          { ja: '目を閉じて描くよ 夢で映画を監督は私', romaji: 'Me wo tojite egaku yo, yume de eiga wo, kantoku wa watashi', en: 'I close my eyes and draw it — a film in a dream, directed by me' },
        ]
      },
      {
        name: 'Chorus 1',
        lines: [
          { ja: '私の長い髪が乾く頃あなたは夢の中', romaji: 'Watashi no nagai kami ga kawaku koro anata wa yume no naka', en: 'By the time my long hair dries, you\'re already deep in your dreams' },
          { ja: '昨日も明け方まで語ったせいかな', romaji: 'Kinō mo akegata made katatta sei ka na', en: 'Maybe because we talked until dawn again yesterday' },
          { ja: 'ゆっくりと眠ってね', romaji: 'Yukkuri to nete ne', en: 'Sleep well, take your time' },
          { ja: '素直になれない癖は今日も私を傷付ける', romaji: 'Sunao ni narenai kuse wa kyō mo watashi wo kizutsukeru', en: 'The habit of not being able to be honest hurts me again today' },
          { ja: 'このまま何処か遠くの方へ納得が行く日まで', romaji: 'Kono mama doko ka tōku no hō e nattoku ga iku hi made', en: 'Just like this, heading far away somewhere, until the day I\'m convinced' },
          { ja: 'この記憶の糸を辿ろう', romaji: 'Kono kioku no ito wo tadorō', en: 'Let me trace this thread of memory' },
        ]
      },
      {
        name: 'Verse 3',
        lines: [
          { ja: '名前を呼び合って 歩いたアスファルト', romaji: 'Namae wo yobiatte, aruita asufanto', en: 'Calling each other\'s names, walking on the asphalt' },
          { ja: '夜は冷え 寝そべり 星を見てた', romaji: 'Yoru wa hie, nesoberi, hoshi wo miteta', en: 'The night grew cold as we lay there watching the stars' },
          { ja: 'あなたの人生に私を飾り付け', romaji: 'Anata no jinsei ni watashi wo kazaritsuke', en: 'Decorating your life with me' },
          { ja: '自分の事の様に大切にしてた', romaji: 'Jibun no koto no yō ni taisetsu ni shiteta', en: 'You treasured me as if I were a part of yourself' },
        ]
      },
      {
        name: 'Verse 4',
        lines: [
          { ja: '想像は永遠で果てがなくて怖いんだ', romaji: 'Sōzō wa eien de hate ga nakute kowain da', en: 'Imagination is eternal, has no end, and that terrifies me' },
          { ja: '気付けば終わってるつまらないヒューマンドラマみたいな日々でも', romaji: 'Kidzukeba owatteru tsumaranai hyūman dorama mitai na hibi demo', en: 'Even days that feel like a dull human drama, over before you realize it' },
          { ja: 'あなたが居れば眩しくなるよ', romaji: 'Anata ga ireba mabushiku naru yo', en: 'Become dazzling when you\'re there' },
        ]
      },
      {
        name: 'Chorus 2',
        lines: [
          { ja: '私の長い髪が乾く頃あなたは夢の中', romaji: 'Watashi no nagai kami ga kawaku koro anata wa yume no naka', en: 'By the time my long hair dries, you\'re already deep in your dreams' },
          { ja: '昨日も明け方まで語ったせいかな', romaji: 'Kinō mo akegata made katatta sei ka na', en: 'Maybe because we talked until dawn again yesterday' },
          { ja: 'ゆっくりと眠ってね', romaji: 'Yukkuri to nete ne', en: 'Sleep well, take your time' },
          { ja: '素直になれない癖が今日もあなたにしがみつく', romaji: 'Sunao ni narenai kuse ga kyō mo anata ni shigamitsuku', en: 'The habit of not being honest clings to you again today' },
          { ja: '懐かしいとか思える余裕が今は無いみたい', romaji: 'Natsukashii to ka omoeru yoyū ga ima wa nai mitai', en: 'It seems I don\'t have the room right now to even feel nostalgic' },
          { ja: 'ゆっくりと眠ってね', romaji: 'Yukkuri to nete ne', en: 'Sleep well, take your time' },
        ]
      },
      {
        name: 'Bridge',
        showAnalysis: true,
        lines: [
          {
            ja: 'この長い話が終わる頃',
            romaji: 'Kono nagai hanashi ga owaru koro',
            en: 'By the time this long story ends',
            analysis: [
              { text: 'この', reading: 'この', meaning: 'this', note: 'demonstrative — points to something close', example: 'この本は面白い', exampleEn: 'This book is interesting' },
              { text: '長い', reading: 'ながい', meaning: 'long', note: 'i-adjective (長 = naga → nagai)', example: '長い映画だ', exampleEn: 'It\'s a long movie' },
              { text: '話', reading: 'はなし', meaning: 'story / talk', note: 'noun — a conversation, story, or topic', example: '面白い話だね', exampleEn: 'That\'s an interesting story' },
              { text: 'が', reading: 'が', meaning: 'subject marker', note: 'particle — marks 話 as the subject', example: '猫が鳴く', exampleEn: 'The cat meows (猫 = subject)' },
              { text: '終わる', reading: 'おわる', meaning: 'to end / finish', note: 'u-verb — owaru', example: '授業が終わる', exampleEn: 'Class ends' },
              { text: '頃', reading: 'ころ', meaning: 'around the time when', note: 'approximate time marker', example: '夕方の頃に来て', exampleEn: 'Come around evening time' },
            ]
          },
          {
            ja: 'あなたが居ないのも分かっているのに',
            romaji: 'Anata ga inai no mo wakatte iru no ni',
            en: 'Even knowing you won\'t be there',
            analysis: [
              { text: 'あなた', reading: 'あなた', meaning: 'you', note: 'neutral/formal — used for someone close', example: 'あなたは優しい', exampleEn: 'You are kind' },
              { text: 'が', reading: 'が', meaning: 'subject marker', note: 'particle', example: '雨が降る', exampleEn: 'Rain falls (雨 = subject)' },
              { text: '居ない', reading: 'いない', meaning: 'not there / absent', note: '居る (iru = to be) negated', example: '誰も居ない', exampleEn: 'Nobody is here' },
              { text: 'のも', reading: 'のも', meaning: 'also the fact that', note: 'の = nominalizer, も = "also / even"', example: '知っているのも分かる', exampleEn: 'I can tell you also know' },
              { text: '分かっている', reading: 'わかっている', meaning: 'I already know / I understand', note: '分かる (wakaru) in て-いる form — ongoing knowing', example: '分かっているよ', exampleEn: 'I know, I know' },
              { text: 'のに', reading: 'のに', meaning: 'even though / and yet', note: 'expresses frustrated contradiction', example: '知っているのに言わない', exampleEn: 'Even though they know, they don\'t say' },
            ]
          },
          {
            ja: '諦めがつかなくて',
            romaji: 'Akirame ga tsukanakute',
            en: 'I still can\'t give up',
            analysis: [
              { text: '諦め', reading: 'あきらめ', meaning: 'giving up / resignation', note: 'noun form of 諦める (akirameru = to give up)', example: '諦めないで', exampleEn: 'Don\'t give up' },
              { text: 'が', reading: 'が', meaning: 'subject marker', note: 'particle', example: '夢が叶う', exampleEn: 'Dreams come true (夢 = subject)' },
              { text: 'つかなくて', reading: 'つかなくて', meaning: 'won\'t settle / can\'t take hold', note: 'つく (to settle/set in) → negative te-form: because it won\'t...', example: '眠りにつかない', exampleEn: 'Can\'t fall asleep (眠り = sleep)' },
            ]
          },
          {
            ja: 'あなたの温もりにつられ眠る夜は',
            romaji: 'Anata no nukumori ni tsurare nemuru yoru wa',
            en: 'The nights I was lulled to sleep by your warmth',
            analysis: [
              { text: 'あなたの', reading: 'あなたの', meaning: 'your', note: 'あなた + の (possessive particle)', example: 'あなたの声が好き', exampleEn: 'I love your voice' },
              { text: '温もり', reading: 'ぬくもり', meaning: 'warmth', note: 'noun — a soft, gentle warmth (not heat)', example: 'お茶の温もり', exampleEn: 'The warmth of tea' },
              { text: 'に', reading: 'に', meaning: 'by / drawn by', note: 'particle — marks the cause or direction here', example: '東京に行く', exampleEn: 'Go to Tokyo' },
              { text: 'つられ', reading: 'つられ', meaning: 'drawn in / lured / carried along', note: 'passive of つる — being pulled along by something', example: '笑いにつられた', exampleEn: 'Got drawn into laughter' },
              { text: '眠る', reading: 'ねむる', meaning: 'to sleep', note: 'u-verb — nemuru', example: '早く眠りたい', exampleEn: 'I want to sleep early' },
              { text: '夜', reading: 'よる', meaning: 'night', note: 'noun — yoru', example: '夜が明けた', exampleEn: 'Dawn came / the night broke' },
              { text: 'は', reading: 'は', meaning: 'topic marker', note: 'particle — marks 夜 as what we\'re talking about', example: '猫は可愛い', exampleEn: 'Cats are cute (topic: cats)' },
            ]
          },
          {
            ja: 'もう何処にも無いのでしょう',
            romaji: 'Mō doko ni mo nai no deshō',
            en: 'Are gone now, aren\'t they',
            analysis: [
              { text: 'もう', reading: 'もう', meaning: 'already / no more / soon', note: 'adverb — indicates change or finality', example: 'もう帰ります', exampleEn: 'I\'m going home now' },
              { text: '何処にも', reading: 'どこにも', meaning: 'nowhere / not anywhere', note: '何処 (doko = where) + にも → used with negative = "nowhere"', example: 'どこにも行かない', exampleEn: 'I\'m not going anywhere' },
              { text: '無い', reading: 'ない', meaning: 'doesn\'t exist / is gone', note: 'negative existence verb — ある (exists) negated', example: 'お金が無い', exampleEn: 'I have no money' },
              { text: 'のでしょう', reading: 'のでしょう', meaning: 'I suppose / isn\'t it?', note: 'soft, sad rhetorical question — half-question, half-acceptance', example: 'そうなのでしょう', exampleEn: 'That\'s how it is, I suppose' },
            ]
          },
          {
            ja: 'この身体の一部からゆっくりと',
            romaji: 'Kono karada no ichibu kara yukkuri to',
            en: 'Slowly, from a part of this body',
            analysis: [
              { text: 'この', reading: 'この', meaning: 'this', note: 'demonstrative adjective — before a noun', example: 'この映画が好き', exampleEn: 'I like this movie' },
              { text: '身体', reading: 'からだ', meaning: 'body', note: 'kanji: 身 (mi = self/body) + 体 (tai = form)', example: '身体が痛い', exampleEn: 'My body hurts' },
              { text: 'の', reading: 'の', meaning: 'possessive / of', note: 'particle — links two nouns', example: '日本の音楽', exampleEn: 'Japanese music (music of Japan)' },
              { text: '一部', reading: 'いちぶ', meaning: 'a part / one portion', note: '一 (ichi = one) + 部 (bu = section/part)', example: '生活の一部', exampleEn: 'A part of daily life' },
              { text: 'から', reading: 'から', meaning: 'from', note: 'particle — marks origin or starting point', example: '東京から来た', exampleEn: 'I came from Tokyo' },
              { text: 'ゆっくりと', reading: 'ゆっくりと', meaning: 'slowly / gently', note: 'ゆっくり + と — と makes the adverb more deliberate', example: 'ゆっくり話してください', exampleEn: 'Please speak slowly' },
            ]
          },
          {
            ja: 'あなたを手離すの 泣きながら引き止めてよ',
            romaji: 'Anata wo tehanasu no, naki nagara hikitomete yo',
            en: 'Letting you go — hold me back as I cry',
            analysis: [
              { text: 'あなたを', reading: 'あなたを', meaning: 'you (as the object)', note: 'を = object marker — marks what the action is done TO', example: 'あなたを愛してる', exampleEn: 'I love you' },
              { text: '手離す', reading: 'てばなす', meaning: 'to let go of', note: '手 (te = hand) + 離す (hanasu = to release/separate)', example: '夢を手離さないで', exampleEn: 'Don\'t let go of your dreams' },
              { text: 'の', reading: 'の', meaning: 'nominalizer', note: 'turns the whole verb phrase into a noun ("the act of...")', example: '走るのが好き', exampleEn: 'I like running' },
              { text: '泣きながら', reading: 'なきながら', meaning: 'while crying', note: '泣く (naku = to cry) + ながら (while doing)', example: '泣きながら笑う', exampleEn: 'Laugh while crying' },
              { text: '引き止めて', reading: 'ひきとめて', meaning: 'hold me back / stop me leaving', note: '引き (pull) + 止める (tomeru = stop) → te-form = request', example: '待って、引き止めて', exampleEn: 'Wait — hold me back' },
              { text: 'よ', reading: 'よ', meaning: 'urgency particle', note: 'sentence-final — adds emotional force or request', example: '行くよ', exampleEn: 'I\'m going!' },
            ]
          },
          {
            ja: '嘘みたいだね 全てが',
            romaji: 'Uso mitai da ne, subete ga',
            en: 'It\'s like a lie, isn\'t it — all of it',
            analysis: [
              { text: '嘘', reading: 'うそ', meaning: 'lie / untruth', note: 'noun — also said alone: "嘘!" = "No way! / Really?!"', example: '嘘をつかないで', exampleEn: 'Don\'t lie' },
              { text: 'みたいだね', reading: 'みたいだね', meaning: 'seems like / isn\'t it?', note: 'みたい (seems like) + だ + ね (seeking agreement from listener)', example: '夢みたいだね', exampleEn: 'It\'s like a dream, isn\'t it' },
              { text: '全てが', reading: 'すべてが', meaning: 'everything / all of it', note: '全て (subete = all/everything) + が (subject marker)', example: '全てがうまくいく', exampleEn: 'Everything will go well' },
            ]
          },
          {
            ja: '無かった事の様だよ',
            romaji: 'Nakatta koto no yō da yo',
            en: 'Feels like it never happened',
            analysis: [
              { text: '無かった', reading: 'なかった', meaning: 'didn\'t exist / wasn\'t there', note: 'past negative of ない (nai) — ある → ない → なかった', example: '何も無かった', exampleEn: 'There was nothing' },
              { text: '事', reading: 'こと', meaning: 'thing / fact (abstract)', note: 'nominalizes a phrase — "the fact that" or "the act of"', example: '好きな事をしよう', exampleEn: 'Let\'s do things we love' },
              { text: 'の様だ', reading: 'のようだ', meaning: 'seems like / as if / like', note: '様/よう (yō) = likeness — comparing or expressing uncertainty', example: '夢の様だ', exampleEn: 'It seems like a dream' },
              { text: 'よ', reading: 'よ', meaning: 'assertion / "I\'m telling you"', note: 'sentence-final — adds emotional weight or declaration', example: '本当だよ', exampleEn: 'It\'s true, I\'m telling you' },
            ]
          },
          {
            ja: 'ゆっくりとさようなら',
            romaji: 'Yukkuri to sayōnara',
            en: 'Slowly, goodbye',
            analysis: [
              { text: 'ゆっくりと', reading: 'ゆっくりと', meaning: 'slowly / gently', note: 'all hiragana: ゆ・っ・く・り (yu-kku-ri) — the っ doubles the k sound', example: 'ゆっくり歩く', exampleEn: 'Walk slowly' },
              { text: 'さようなら', reading: 'さようなら', meaning: 'goodbye (permanent farewell)', note: 'all hiragana: さ・よ・う・な・ら — much heavier than またね (see you soon)', example: 'さようなら、また今度ね', exampleEn: 'Goodbye — until next time' },
            ]
          },
        ]
      },
    ],
    vocab: [
      { ja: '長い髪', hiragana: 'ながいかみ', romaji: 'nagai kami', en: 'long hair' },
      { ja: '記憶', hiragana: 'きおく', romaji: 'kioku', en: 'memory / recollection' },
      { ja: '糸', hiragana: 'いと', romaji: 'ito', en: 'thread / string' },
      { ja: '笑顔', hiragana: 'えがお', romaji: 'egao', en: 'smile / smiling face' },
      { ja: '桜', hiragana: 'さくら', romaji: 'sakura', en: 'cherry blossom' },
      { ja: '未来', hiragana: 'みらい', romaji: 'mirai', en: 'future' },
      { ja: '夢', hiragana: 'ゆめ', romaji: 'yume', en: 'dream' },
      { ja: '素直', hiragana: 'すなお', romaji: 'sunao', en: 'honest / straightforward / obedient' },
      { ja: '癖', hiragana: 'くせ', romaji: 'kuse', en: 'habit / quirk' },
      { ja: '温もり', hiragana: 'ぬくもり', romaji: 'nukumori', en: 'warmth' },
      { ja: '星', hiragana: 'ほし', romaji: 'hoshi', en: 'star' },
      { ja: '永遠', hiragana: 'えいえん', romaji: 'eien', en: 'eternity / forever' },
      { ja: '懐かしい', hiragana: 'なつかしい', romaji: 'natsukashii', en: 'nostalgic' },
      { ja: '諦め', hiragana: 'あきらめ', romaji: 'akirame', en: 'resignation / giving up' },
      { ja: '余裕', hiragana: 'よゆう', romaji: 'yoyū', en: 'room / leeway / composure' },
    ],
    extendedVocab: [
      { ja: '遊園地', hiragana: 'ゆうえんち', romaji: 'yūenchi', en: 'amusement park' },
      { ja: '窓', hiragana: 'まど', romaji: 'mado', en: 'window' },
      { ja: '息', hiragana: 'いき', romaji: 'iki', en: 'breath' },
      { ja: '枯れ葉', hiragana: 'かれは', romaji: 'kareha', en: 'fallen / dead leaf' },
      { ja: '曖昧', hiragana: 'あいまい', romaji: 'aimai', en: 'vague / ambiguous' },
      { ja: '映画', hiragana: 'えいが', romaji: 'eiga', en: 'film / movie' },
      { ja: '明け方', hiragana: 'あけがた', romaji: 'akegata', en: 'dawn / just before sunrise' },
      { ja: '人生', hiragana: 'じんせい', romaji: 'jinsei', en: 'life / one\'s lifetime' },
      { ja: '想像', hiragana: 'そうぞう', romaji: 'sōzō', en: 'imagination' },
      { ja: '身体', hiragana: 'からだ', romaji: 'karada', en: 'body' },
      { ja: '自分', hiragana: 'じぶん', romaji: 'jibun', en: 'oneself / myself' },
      { ja: '話', hiragana: 'はなし', romaji: 'hanashi', en: 'story / talk / conversation' },
    ]
  },

  {
    id: 'refrain',
    title: 'ref:rain',
    titleJa: 'ref:rain',
    artist: 'Aimer',
    artistJa: 'Aimer',
    year: 2016,
    color: '#818cf8',
    description: 'A rainy, bittersweet song about longing — seasons, shared memories, and the feeling of someone who never quite left.',
    youtubeId: null,
    youtubeSearch: 'ref:rain Aimer',
    sections: [
      {
        name: 'Verse 1',
        lines: [
          { ja: 'Raining 夏の午後に 通り雨　傘の下', romaji: 'Raining — natsu no gogo ni tōriame, kasa no shita', en: 'Raining — a passing summer shower in the afternoon, under an umbrella' },
          { ja: 'Kissing 濡れた頬に そっと口づけた', romaji: 'Kissing — nureta hoho ni, sotto kuchizuketa', en: 'Kissing — gently pressed lips to your wet cheek' },
          { ja: 'あの季節に まだ焦がれている', romaji: 'Ano kisetsu ni, mada kogarete iru', en: 'I\'m still longing for that season' },
          { ja: 'Miss you　窓の外に 遠ざかる景色たち', romaji: 'Miss you — mado no soto ni, tōzakaru keshiki-tachi', en: 'Miss you — scenes outside the window, growing further and further away' },
        ]
      },
      {
        name: 'Verse 2',
        lines: [
          { ja: 'Breezing　虹が見えた すぐに消えそうで', romaji: 'Breezing — niji ga mieta, sugu ni kiesō de', en: 'Breezing — I saw a rainbow, it looked like it would disappear any moment' },
          { ja: '雨　明日は降らなければいい', romaji: 'Ame — ashita wa furanakereba ii', en: 'Rain — I hope it doesn\'t fall tomorrow' },
          { ja: '何も手につかずに 上の空の日々', romaji: 'Nani mo te ni tsukazu ni, uwanokū no hibi', en: 'Nothing getting done, days spent with my head in the clouds' },
        ]
      },
      {
        name: 'Pre-Chorus 1',
        lines: [
          { ja: 'Nothing but you\'re the part of me', romaji: 'Nothing but you\'re the part of me', en: 'Nothing but you\'re the part of me' },
          { ja: 'まだ　足りなくて', romaji: 'Mada tarinakute', en: 'Still not enough' },
          { ja: 'まだ　消えなくて', romaji: 'Mada kienakute', en: 'Still not fading' },
          { ja: '重ねた手のひらから幼さが', romaji: 'Kasaneta te no hira kara osanasa ga', en: 'From the palms we laid over each other, our youth' },
        ]
      },
      {
        name: 'Chorus 1',
        lines: [
          { ja: 'What a good thing we lose?', romaji: 'What a good thing we lose?', en: 'What a good thing we lose?' },
          { ja: 'What a bad thing we knew', romaji: 'What a bad thing we knew', en: 'What a bad thing we knew' },
          { ja: 'そんなフレーズに濡れてく 雨の中', romaji: 'Sonna furēzu ni nurete ku, ame no naka', en: 'Getting soaked in those phrases, in the middle of the rain' },
          { ja: 'ただ　足りなくて', romaji: 'Tada tarinakute', en: 'Simply not enough' },
          { ja: 'まだ　言えなくて', romaji: 'Mada ienakute', en: 'Still unable to say it' },
          { ja: '数えた日の夢からさよならが', romaji: 'Kazoeta hi no yume kara sayonara ga', en: 'From dreams of the days I counted, goodbye' },
          { ja: 'What a good thing we lose?', romaji: 'What a good thing we lose?', en: 'What a good thing we lose?' },
          { ja: 'What a bad thing we knew', romaji: 'What a bad thing we knew', en: 'What a bad thing we knew' },
          { ja: '触れられずにいれたら 笑えたかな？', romaji: 'Furearezu ni iretara, waraeta kana?', en: 'If I could have stayed without touching you, could I have smiled?' },
        ]
      },
      {
        name: 'Verse 3',
        lines: [
          { ja: 'Calling　白い息が 舞いあがる 空の下', romaji: 'Calling — shiroi iki ga maiagaru, sora no shita', en: 'Calling — white breath rising into the air, under the sky' },
          { ja: 'Freezing　強い風に 少しかじかんだ手と', romaji: 'Freezing — tsuyoi kaze ni, sukoshi kajikanda te to', en: 'Freezing — hands slightly numb from the strong wind' },
          { ja: '弱さをポケットの中に', romaji: 'Yowasa wo poketto no naka ni', en: 'Tucking weakness into a pocket' },
        ]
      },
      {
        name: 'Pre-Chorus 2',
        lines: [
          { ja: 'どこを見渡しても 通り過ぎた日々', romaji: 'Doko wo miwatashitemo, tōrisugita hibi', en: 'No matter where I look, those days have passed me by' },
          { ja: 'Nothing but you\'re the part of me', romaji: 'Nothing but you\'re the part of me', en: 'Nothing but you\'re the part of me' },
          { ja: 'また　触れたくて', romaji: 'Mata furetakute', en: 'Wanting to touch again' },
          { ja: 'ただ　眩しくて', romaji: 'Tada mabushikute', en: 'Simply dazzling' },
          { ja: '思わず目をそらした', romaji: 'Omowazu me wo sorashita', en: 'I instinctively looked away' },
          { ja: '優しさに', romaji: 'Yasashisa ni', en: 'From your gentleness' },
          { ja: 'I wanna sleep in your feel', romaji: 'I wanna sleep in your feel', en: 'I wanna sleep in your feel' },
          { ja: 'I wanna see you in the deep', romaji: 'I wanna see you in the deep', en: 'I wanna see you in the deep' },
          { ja: 'そんなフレーズを並べた詩を　今', romaji: 'Sonna furēzu wo narabeta uta wo, ima', en: 'A poem made of phrases like those — even now' },
        ]
      },
      {
        name: 'Interlude',
        lines: [
          { ja: 'あの帰り道 バスに揺られて', romaji: 'Ano kaerimichi, basu ni yurarete', en: 'On that way home, swaying on the bus' },
          { ja: '叶うはずもない様な夢を見た', romaji: 'Kanau hazu mo nai yō na yume wo mita', en: 'I dreamed a dream that could never come true' },
        ]
      },
      {
        name: 'Chorus 2',
        lines: [
          { ja: 'I wanna sleep in your feel', romaji: 'I wanna sleep in your feel', en: 'I wanna sleep in your feel' },
          { ja: 'I wanna see you in the deep', romaji: 'I wanna see you in the deep', en: 'I wanna see you in the deep' },
          { ja: '繰り返す季節に　慣れないまま', romaji: 'Kurikaesu kisetsu ni, narenai mama', en: 'The seasons repeat, and still I can\'t get used to it' },
          { ja: 'もう少しくらい大人でいれたら 何て言えただろう？', romaji: 'Mō sukoshi kurai otona de iretara, nante ieta darō?', en: 'If I had been just a little more of an adult, what would I have been able to say?' },
        ]
      },
      {
        name: 'Chorus 3',
        lines: [
          { ja: 'まだ　足りなくて', romaji: 'Mada tarinakute', en: 'Still not enough' },
          { ja: 'まだ　消えなくて', romaji: 'Mada kienakute', en: 'Still not fading' },
          { ja: '重ねた手のひらから幼さが', romaji: 'Kasaneta te no hira kara osanasa ga', en: 'From the palms we laid over each other, our youth' },
          { ja: 'What a good thing we lose?', romaji: 'What a good thing we lose?', en: 'What a good thing we lose?' },
          { ja: 'What a bad thing we knew', romaji: 'What a bad thing we knew', en: 'What a bad thing we knew' },
          { ja: 'そんなフレーズに濡れてく 雨の中', romaji: 'Sonna furēzu ni nurete ku, ame no naka', en: 'Getting soaked in those phrases, in the middle of the rain' },
          { ja: 'ただ　足りなくて', romaji: 'Tada tarinakute', en: 'Simply not enough' },
          { ja: 'まだ　言えなくて', romaji: 'Mada ienakute', en: 'Still unable to say it' },
          { ja: '数えた日の夢からさよならが', romaji: 'Kazoeta hi no yume kara sayonara ga', en: 'From dreams of the days I counted, goodbye' },
          { ja: 'What a good thing we lose?', romaji: 'What a good thing we lose?', en: 'What a good thing we lose?' },
          { ja: 'What a bad thing we knew', romaji: 'What a bad thing we knew', en: 'What a bad thing we knew' },
          { ja: '触れられずにいれたら 笑えたかな？', romaji: 'Furearezu ni iretara, waraeta kana?', en: 'If I could have stayed without touching you, could I have smiled?' },
        ]
      },
    ],
    vocab: [
      { ja: '季節', hiragana: 'きせつ', romaji: 'kisetsu', en: 'season' },
      { ja: '景色', hiragana: 'けしき', romaji: 'keshiki', en: 'scenery / view' },
      { ja: '虹', hiragana: 'にじ', romaji: 'niji', en: 'rainbow' },
      { ja: '焦がれる', hiragana: 'こがれる', romaji: 'kogareru', en: 'to long for / to yearn' },
      { ja: '手のひら', hiragana: 'てのひら', romaji: 'te no hira', en: 'palm (of the hand)' },
      { ja: '幼さ', hiragana: 'おさなさ', romaji: 'osanasa', en: 'youth / childishness' },
      { ja: '優しさ', hiragana: 'やさしさ', romaji: 'yasashisa', en: 'gentleness / kindness' },
      { ja: '弱さ', hiragana: 'よわさ', romaji: 'yowasa', en: 'weakness' },
      { ja: '夢', hiragana: 'ゆめ', romaji: 'yume', en: 'dream' },
      { ja: '帰り道', hiragana: 'かえりみち', romaji: 'kaerimichi', en: 'way home' },
      { ja: '触れる', hiragana: 'ふれる', romaji: 'fureru', en: 'to touch / to brush against' },
      { ja: '消える', hiragana: 'きえる', romaji: 'kieru', en: 'to disappear / fade away' },
      { ja: '慣れる', hiragana: 'なれる', romaji: 'nareru', en: 'to get used to' },
      { ja: '大人', hiragana: 'おとな', romaji: 'otona', en: 'adult / grown-up' },
    ],
    extendedVocab: [
      { ja: '通り雨', hiragana: 'とおりあめ', romaji: 'tōriame', en: 'passing shower / brief rain' },
      { ja: '傘', hiragana: 'かさ', romaji: 'kasa', en: 'umbrella' },
      { ja: '頬', hiragana: 'ほお', romaji: 'hoo', en: 'cheek' },
      { ja: '口づけ', hiragana: 'くちづけ', romaji: 'kuchizuke', en: 'kiss (literary)' },
      { ja: '息', hiragana: 'いき', romaji: 'iki', en: 'breath' },
      { ja: '詩', hiragana: 'うた', romaji: 'uta', en: 'poem / song' },
      { ja: '繰り返す', hiragana: 'くりかえす', romaji: 'kurikaesu', en: 'to repeat / come around again' },
      { ja: '叶う', hiragana: 'かなう', romaji: 'kanau', en: 'to come true / be granted' },
      { ja: '日々', hiragana: 'ひび', romaji: 'hibi', en: 'days / daily life' },
      { ja: '上の空', hiragana: 'うわのそら', romaji: 'uwanokū', en: 'absent-minded / head in the clouds' },
    ]
  },

  {
    id: 'sayonara',
    title: 'Sayonara',
    titleJa: 'さよなら',
    artist: 'Mirei',
    artistJa: 'みれい',
    year: 2015,
    color: '#60a5fa',
    description: 'A tender, melancholic farewell — the feeling of knowing goodbye is coming before it arrives.',
    youtubeId: null,
    youtubeSearch: 'さよなら みれい',
    sections: [
      {
        name: 'Verse 1',
        lines: [
          { ja: 'いつから2人こうなっちゃったんだろう', romaji: 'Itsu kara futari kō natchatta n darō', en: 'When did we end up like this?' },
          { ja: '電波の悪いフリ 気まずい時出る癖', romaji: 'Denpa no warui furi kimazui toki deru kuse', en: 'Pretending to have bad signal — a habit that shows up in awkward moments' },
          { ja: '「久々会えて嬉しい」 なんて', romaji: '"Hisabisa aete ureshii" nante', en: 'Saying things like "I\'m so happy we could meet after so long"' },
          { ja: '少しでも誤魔化せば この先を変えられる', romaji: 'Sukoshi demo gomakaseba kono saki wo kaerareru', en: 'If I can fool you even a little, maybe I can change what lies ahead' },
          { ja: 'そんな気がして トボけて返したの', romaji: 'Sonna ki ga shite tobokete kaeshita no', en: 'I had that feeling, so I played dumb in my reply' },
        ]
      },
      {
        name: 'Pre-Chorus',
        lines: [
          { ja: '来るはずない返事を 待ちながら開くアルバム', romaji: 'Kuru hazu nai henji wo machinagara hiraku arubamu', en: 'Waiting for a reply that will never come, I open our photo album' },
          { ja: '記念日に重ねた 右手 輝く指輪', romaji: 'Kinenbi ni kasaneta migite kagayaku yubiwa', en: 'My right hand, layered with anniversaries, a shining ring' },
          { ja: 'いつまでも繋いでいたかった', romaji: 'Itsumade mo tsunaide itakatta', en: 'I wanted to keep holding on forever' },
        ]
      },
      {
        name: 'Chorus',
        lines: [
          { ja: 'さよなら さよなら 聞きたくはない まだ', romaji: 'Sayonara sayonara kikitaku wa nai mada', en: 'Goodbye, goodbye — I still don\'t want to hear it' },
          { ja: '二度とない「好きだよ」を 期待しちゃってる ただ', romaji: 'Nido to nai "suki da yo" wo kitai shichatteru tada', en: 'I\'m just hoping for an "I love you" that will never come again' },
          { ja: '春の桜だって 夏の花火だって', romaji: 'Haru no sakura datte natsu no hanabi datte', en: 'The spring cherry blossoms, the summer fireworks' },
          { ja: '君以外 誰ともみたくないから', romaji: 'Kimi igai dare to mo mitaku nai kara', en: 'I don\'t want to see them with anyone but you' },
          { ja: 'ごめんね ごめんね ちゃんと言えてたら', romaji: 'Gomen ne gomen ne chanto ietetara', en: 'I\'m sorry, I\'m sorry — if only I had been able to say it properly' },
          { ja: '素直に 全てを 伝えられてたら', romaji: 'Sunao ni subete wo tsutaeraretara', en: 'If only I could have honestly conveyed everything' },
          { ja: '秋の楓だって 冬の雪だって隣で', romaji: 'Aki no momiji datte fuyu no yuki datte tonari de', en: 'The autumn maples, the winter snow — right beside each other' },
          { ja: '笑いあえてたのかな la la', romaji: 'Waraiaeteta no kana la la', en: 'Could we have been laughing together? la la' },
        ]
      },
      {
        name: 'Verse 2',
        lines: [
          { ja: '二人初めて デートした店', romaji: 'Futari hajimete dēto shita mise', en: 'The restaurant where we went on our first date' },
          { ja: 'いつの日からだろう? いつもの店になってた', romaji: 'Itsu no hi kara darō? Itsumo no mise ni natteta', en: 'When did it become our usual spot?' },
          { ja: 'こんな風にこれからもずっと', romaji: 'Konna fū ni korekara mo zutto', en: 'I thought it would keep going on like this forever' },
          { ja: '当たり前の数が 増えていくと思ってた', romaji: 'Atarimae no kazu ga fuete iku to omotteta', en: 'I thought our everyday moments would just keep growing' },
          { ja: 'これ以上はもう 増やせないのかな', romaji: 'Kore ijō wa mō fuyasenai no kana', en: 'Can we not add any more to them?' },
        ]
      },
      {
        name: 'Verse 3',
        lines: [
          { ja: '会えなくなった頃から 服や口癖 変わったこと', romaji: 'Aenaku natta koro kara fuku ya kuchiguse kawatta koto', en: 'Since we stopped seeing each other, your clothes and little habits have changed' },
          { ja: 'どれだけ気になっても 問い詰められないまま', romaji: 'Doredake ki ni natte mo toi tsumerarenai mama', en: 'No matter how much it bothers me, I can\'t bring myself to ask' },
          { ja: 'いつも通りの自分演じて', romaji: 'Itsumo dōri no jibun enjite', en: 'Playing the same version of myself as always' },
        ]
      },
      {
        name: 'Bridge',
        lines: [
          { ja: '「先にフラれるのは絶対 俺だろう」だなんて話', romaji: '"Saki ni furareru no wa zettai ore darō" da nante hanashi', en: 'That conversation — "I\'ll definitely be the one dumped first"' },
          { ja: 'どうしてあの日したの', romaji: 'Dōshite ano hi shita no', en: 'Why did we have that talk that day?' },
          { ja: '永遠なんてない 当たり前なのに', romaji: 'Eien nante nai atarimae na no ni', en: 'There\'s no such thing as forever — that\'s obvious' },
          { ja: '二人は変わらないと信じてた', romaji: 'Futari wa kawaranai to shinjiteta', en: 'But I believed we would never change' },
        ]
      },
      {
        name: 'Chorus 2',
        lines: [
          { ja: 'さよなら さよなら 聞きたくはない まだ', romaji: 'Sayonara sayonara kikitaku wa nai mada', en: 'Goodbye, goodbye — I still don\'t want to hear it' },
          { ja: '二度とない「好きだよ」を 期待しちゃってる ただ', romaji: 'Nido to nai "suki da yo" wo kitai shichatteru tada', en: 'I\'m just hoping for an "I love you" that will never come again' },
          { ja: '春の桜だって 夏の花火だって', romaji: 'Haru no sakura datte natsu no hanabi datte', en: 'The spring cherry blossoms, the summer fireworks' },
          { ja: '君以外 誰ともみたくないから', romaji: 'Kimi igai dare to mo mitaku nai kara', en: 'I don\'t want to see them with anyone but you' },
          { ja: 'ごめんね ごめんね ちゃんと言えてたら', romaji: 'Gomen ne gomen ne chanto ietetara', en: 'I\'m sorry, I\'m sorry — if only I had been able to say it properly' },
          { ja: 'バカだね 今更 後悔ばかりだ', romaji: 'Baka da ne imasara kōkai bakari da', en: 'I\'m such a fool — nothing but regrets now' },
          { ja: '秋の楓だって 冬の雪だって', romaji: 'Aki no momiji datte fuyu no yuki datte', en: 'The autumn maples, the winter snow' },
          { ja: '隣で笑いあってたかったな la la', romaji: 'Tonari de waraiatteta katta na la la', en: 'I wanted to be laughing beside you la la' },
        ]
      },
    ],
    vocab: [
      { ja: 'さよなら', hiragana: 'さよなら', romaji: 'sayonara', en: 'goodbye' },
      { ja: '電波', hiragana: 'でんぱ', romaji: 'denpa', en: 'radio signal / reception' },
      { ja: '指輪', hiragana: 'ゆびわ', romaji: 'yubiwa', en: 'ring (worn on finger)' },
      { ja: '記念日', hiragana: 'きねんび', romaji: 'kinenbi', en: 'anniversary' },
      { ja: '桜', hiragana: 'さくら', romaji: 'sakura', en: 'cherry blossom' },
      { ja: '花火', hiragana: 'はなび', romaji: 'hanabi', en: 'fireworks' },
      { ja: '楓', hiragana: 'もみじ', romaji: 'momiji', en: 'autumn maple' },
      { ja: '雪', hiragana: 'ゆき', romaji: 'yuki', en: 'snow' },
      { ja: '素直', hiragana: 'すなお', romaji: 'sunao', en: 'honest / straightforward' },
      { ja: '後悔', hiragana: 'こうかい', romaji: 'kōkai', en: 'regret' },
      { ja: '永遠', hiragana: 'えいえん', romaji: 'eien', en: 'eternity / forever' },
      { ja: '当たり前', hiragana: 'あたりまえ', romaji: 'atarimae', en: 'natural / taken for granted / ordinary' },
    ],
    extendedVocab: [
      { ja: '誤魔化す', hiragana: 'ごまかす', romaji: 'gomakasu', en: 'to deceive / gloss over / brush off' },
      { ja: '口癖', hiragana: 'くちぐせ', romaji: 'kuchiguse', en: 'verbal habit / phrase one always says' },
      { ja: '問い詰める', hiragana: 'といつめる', romaji: 'toitsumeru', en: 'to press for an answer / corner someone with questions' },
      { ja: '演じる', hiragana: 'えんじる', romaji: 'enjiru', en: 'to play a role / act as' },
      { ja: '繋ぐ', hiragana: 'つなぐ', romaji: 'tsunagu', en: 'to connect / hold (hands)' },
      { ja: 'フラれる', hiragana: 'ふられる', romaji: 'furareru', en: 'to be dumped / rejected' },
      { ja: '期待', hiragana: 'きたい', romaji: 'kitai', en: 'expectation / hope' },
      { ja: '笑いあう', hiragana: 'わらいあう', romaji: 'waraiau', en: 'to laugh together' },
      { ja: '隣', hiragana: 'となり', romaji: 'tonari', en: 'next to / beside / neighbor' },
      { ja: '信じる', hiragana: 'しんじる', romaji: 'shinjiru', en: 'to believe / trust' },
    ]
  },

  {
    id: 'tarinai',
    title: 'Not Enough',
    titleJa: '足りない',
    artist: 'Wacci',
    artistJa: 'ワッチ',
    year: 2020,
    color: '#fb7185',
    description: 'A raw, quietly devastating breakup song — she\'s been told she\'s "not enough", and now she\'s trying to say a proper goodbye so she can find herself again.',
    youtubeId: null,
    youtubeSearch: '足りない wacci',
    sections: [
      {
        name: 'Verse 1',
        lines: [
          { ja: '幸せのカスを舐めて', romaji: 'Shiawase no kasu wo namete', en: 'Licking up the last dregs of happiness' },
          { ja: 'まだ味がしたから泣いた', romaji: 'Mada aji ga shita kara naita', en: 'I cried because I could still taste it' },
          { ja: 'ゆうべ急いで片づけた部屋に', romaji: 'Yūbe isoide katadzuketa heya ni', en: 'In the room I frantically tidied last night' },
          { ja: '散らかったあなたの匂い', romaji: 'Chirakatta anata no nioi', en: 'Your scent, still scattered everywhere' },
        ]
      },
      {
        name: 'Verse 2',
        lines: [
          { ja: '前より優しい気がする', romaji: 'Mae yori yasashii ki ga suru', en: 'You seem kinder than before' },
          { ja: 'あなたを感じて悲しくなって', romaji: 'Anata wo kanjite kanashiku natte', en: 'Feeling you makes me sad' },
          { ja: 'すがりつくようなキスで', romaji: 'Sugaritsuku yō na kisu de', en: 'With a kiss like clinging on' },
          { ja: '寂しさをぬりたくった', romaji: 'Sabishisa wo nuritakutta', en: 'I smeared over my loneliness' },
        ]
      },
      {
        name: 'Pre-Chorus',
        lines: [
          { ja: '窓の外', romaji: 'Mado no soto', en: 'Outside the window' },
          { ja: '降り出した雨', romaji: 'Furidashita ame', en: 'Rain has started to fall' },
          { ja: '傘は持って行かなかったな', romaji: 'Kasa wa motte ikanakatta na', en: 'You didn\'t take your umbrella, did you' },
          { ja: 'どうでもいいや', romaji: 'Dō demo ii ya', en: 'Whatever. It doesn\'t matter.' },
        ]
      },
      {
        name: 'Chorus 1',
        lines: [
          { ja: '今度こそはちゃんと', romaji: 'Kondo koso wa chanto', en: 'This time, properly' },
          { ja: 'さよならをしよう', romaji: 'Sayonara wo shiyō', en: 'Let\'s say goodbye' },
          { ja: 'あなたを終わらせなきゃ', romaji: 'Anata wo owarase nakya', en: 'I have to put an end to you' },
          { ja: '私を始められないから', romaji: 'Watashi wo hajimerarenai kara', en: 'Because I can\'t start being me again' },
          { ja: '今度こそちゃんと', romaji: 'Kondo koso chanto', en: 'This time, properly' },
          { ja: 'さよならをしよう', romaji: 'Sayonara wo shiyō', en: 'Let\'s say goodbye' },
          { ja: '私が好きになったあなたは', romaji: 'Watashi ga suki ni natta anata wa', en: 'The you I fell in love with' },
          { ja: 'もうこの世界にいない', romaji: 'Mō kono sekai ni inai', en: 'Is no longer in this world' },
        ]
      },
      {
        name: 'Verse 3',
        lines: [
          { ja: '「幸せになってね」なんて', romaji: '"Shiawase ni natte ne" nante', en: '"Be happy" — I even managed to say that' },
          { ja: 'あの時私は言えたのに', romaji: 'Ano toki watashi wa ieta no ni', en: 'Back then I could still say it — and yet' },
          { ja: 'ゆうべも探ってしまってた', romaji: 'Yūbe mo sagashite shimatteta', en: 'Last night I was searching again' },
          { ja: 'その知らない誰かの影を', romaji: 'Sono shiranai dareka no kage wo', en: 'For the shadow of that someone I don\'t know' },
        ]
      },
      {
        name: 'Verse 4',
        lines: [
          { ja: 'あなたが言うには私に', romaji: 'Anata ga iu ni wa watashi ni', en: 'According to you, it\'s not that' },
          { ja: '何かが足りないんじゃなくて', romaji: 'Nanika ga tarinai n ja nakute', en: 'Something is missing in me —' },
          { ja: 'その人に足りないから', romaji: 'Sono hito ni tarinai kara', en: 'It\'s because she lacks something' },
          { ja: '守りたくなるんだって', romaji: 'Mamoritaku naru n datte', en: 'That makes you want to protect her' },
        ]
      },
      {
        name: 'Pre-Chorus 2',
        lines: [
          { ja: '見る目がないなあなたは', romaji: 'Miru me ga nai na, anata wa', en: 'You really have no eye for things' },
          { ja: '見せ方が下手だな私は', romaji: 'Mise-kata ga heta da na, watashi wa', en: 'I\'m just bad at showing myself' },
          { ja: 'どうでもいいや', romaji: 'Dō demo ii ya', en: 'Whatever. It doesn\'t matter.' },
        ]
      },
      {
        name: 'Bridge',
        lines: [
          { ja: '抱きしめてくれた時の痛み', romaji: 'Dakishimete kureta toki no itami', en: 'The ache of when you held me' },
          { ja: '電話くれた時の甘い声', romaji: 'Denwa kureta toki no amai koe', en: 'The sweet voice when you called' },
          { ja: 'ぶつかりあった時の言葉を', romaji: 'Butsukariatta toki no kotoba wo', en: 'The words from when we clashed' },
          { ja: '溶かしてく仲直りの涙', romaji: 'Tokashite ku nakanaori no namida', en: 'All melted away by the tears of making up' },
          { ja: '誰かにもあの笑顔見せるの', romaji: 'Dareka ni mo ano egao miseru no', en: 'Will you show that smile to someone else too' },
          { ja: '誰かともその手を繋ぐのか', romaji: 'Dareka to mo sono te wo tsunagu no ka', en: 'Will you hold hands with someone else too' },
          { ja: 'なんて　どうでもいいや', romaji: 'Nante... dō demo ii ya', en: '...whatever. It doesn\'t matter.' },
        ]
      },
      {
        name: 'Chorus 2',
        lines: [
          { ja: '今度こそはちゃんと', romaji: 'Kondo koso wa chanto', en: 'This time, properly' },
          { ja: 'さよならをしよう', romaji: 'Sayonara wo shiyō', en: 'Let\'s say goodbye' },
          { ja: 'あなたを終わらせなきゃ', romaji: 'Anata wo owarase nakya', en: 'I have to put an end to you' },
          { ja: '私を始められないから', romaji: 'Watashi wo hajimerarenai kara', en: 'Because I can\'t start being me again' },
          { ja: '今度こそちゃんと', romaji: 'Kondo koso chanto', en: 'This time, properly' },
          { ja: 'さよならをしよう', romaji: 'Sayonara wo shiyō', en: 'Let\'s say goodbye' },
          { ja: '私が好きになった', romaji: 'Watashi ga suki ni natta', en: 'The you I fell in love with' },
          { ja: 'あなたはこの世界にいないし', romaji: 'Anata wa kono sekai ni inai shi', en: 'Is no longer in this world' },
          { ja: 'あなたが好きになった私も', romaji: 'Anata ga suki ni natta watashi mo', en: 'And the me you fell in love with' },
          { ja: 'もういなくなるよ', romaji: 'Mō inakunaru yo', en: 'Will be gone too' },
        ]
      },
    ],
    vocab: [
      { ja: '幸せ', hiragana: 'しあわせ', romaji: 'shiawase', en: 'happiness / happy' },
      { ja: '匂い', hiragana: 'におい', romaji: 'nioi', en: 'scent / smell' },
      { ja: '寂しさ', hiragana: 'さびしさ', romaji: 'sabishisa', en: 'loneliness' },
      { ja: '雨', hiragana: 'あめ', romaji: 'ame', en: 'rain' },
      { ja: '傘', hiragana: 'かさ', romaji: 'kasa', en: 'umbrella' },
      { ja: '影', hiragana: 'かげ', romaji: 'kage', en: 'shadow / silhouette' },
      { ja: '涙', hiragana: 'なみだ', romaji: 'namida', en: 'tears' },
      { ja: '声', hiragana: 'こえ', romaji: 'koe', en: 'voice' },
      { ja: '言葉', hiragana: 'ことば', romaji: 'kotoba', en: 'words / language' },
      { ja: '笑顔', hiragana: 'えがお', romaji: 'egao', en: 'smile / smiling face' },
      { ja: '痛み', hiragana: 'いたみ', romaji: 'itami', en: 'pain / ache' },
      { ja: '足りない', hiragana: 'たりない', romaji: 'tarinai', en: 'not enough / lacking' },
      { ja: '守る', hiragana: 'まもる', romaji: 'mamoru', en: 'to protect / to guard' },
      { ja: '世界', hiragana: 'せかい', romaji: 'sekai', en: 'world' },
    ],
    extendedVocab: [
      { ja: '味', hiragana: 'あじ', romaji: 'aji', en: 'taste / flavour' },
      { ja: '部屋', hiragana: 'へや', romaji: 'heya', en: 'room' },
      { ja: '窓', hiragana: 'まど', romaji: 'mado', en: 'window' },
      { ja: '電話', hiragana: 'でんわ', romaji: 'denwa', en: 'phone call / telephone' },
      { ja: '手', hiragana: 'て', romaji: 'te', en: 'hand' },
      { ja: '仲直り', hiragana: 'なかなおり', romaji: 'nakanaori', en: 'making up / reconciliation' },
      { ja: '溶かす', hiragana: 'とかす', romaji: 'tokasu', en: 'to melt / dissolve' },
      { ja: '繋ぐ', hiragana: 'つなぐ', romaji: 'tsunagu', en: 'to connect / hold (hands)' },
      { ja: '探る', hiragana: 'さぐる', romaji: 'saguru', en: 'to search / probe' },
      { ja: '終わらせる', hiragana: 'おわらせる', romaji: 'owaraseru', en: 'to put an end to / finish' },
      { ja: '始める', hiragana: 'はじめる', romaji: 'hajimeru', en: 'to begin / start' },
      { ja: 'どうでもいい', hiragana: 'どうでもいい', romaji: 'dō demo ii', en: 'it doesn\'t matter / whatever' },
    ]
  },
];

// ── Basic nouns for grammar practice (beyond the songs) ──────────
const BASIC_NOUNS = [
  { ja: 'いぬ', kanji: '犬', romaji: 'inu', en: 'dog' },
  { ja: 'ねこ', kanji: '猫', romaji: 'neko', en: 'cat' },
  { ja: 'ほん', kanji: '本', romaji: 'hon', en: 'book' },
  { ja: 'みず', kanji: '水', romaji: 'mizu', en: 'water' },
  { ja: 'つき', kanji: '月', romaji: 'tsuki', en: 'moon' },
  { ja: 'はな', kanji: '花', romaji: 'hana', en: 'flower' },
  { ja: 'ともだち', kanji: '友達', romaji: 'tomodachi', en: 'friend' },
  { ja: 'おんがく', kanji: '音楽', romaji: 'ongaku', en: 'music' },
  { ja: 'こえ', kanji: '声', romaji: 'koe', en: 'voice' },
  { ja: 'ゆめ', kanji: '夢', romaji: 'yume', en: 'dream' },
  { ja: 'そら', kanji: '空', romaji: 'sora', en: 'sky' },
  { ja: 'ひ', kanji: '日', romaji: 'hi', en: 'day / sun' },
  { ja: 'みち', kanji: '道', romaji: 'michi', en: 'road / path' },
  { ja: 'かぜ', kanji: '風', romaji: 'kaze', en: 'wind' },
  { ja: 'なまえ', kanji: '名前', romaji: 'namae', en: 'name' },
  { ja: 'いもうと', kanji: '妹', romaji: 'imouto', en: 'younger sister' },
  { ja: 'おにい', kanji: 'お兄', romaji: 'onii', en: 'older brother' },
  { ja: 'まち', kanji: '街', romaji: 'machi', en: 'town' },
  { ja: 'うた', kanji: '歌', romaji: 'uta', en: 'song' },
  { ja: 'きもち', kanji: '気持ち', romaji: 'kimochi', en: 'feeling' },
];

// ── Grammar sections per song ────────────────────────────────────
// Each entry: topic, pattern, anchor (lyric line), highlight (key part),
//             explanation, examples [{ja, romaji, en}]
const SONG_GRAMMAR = {

  lemon: [
    {
      topic: 'の — possessive "of" / "\'s"',
      pattern: '[Person/thing] の [noun]',
      anchor: '今も君はわたしの光',
      highlight: 'わたしの',
      explanation: 'の links two nouns to show possession — like "\'s" in English. わたしの光 = "my light". You can swap any person for any noun.',
      examples: [
        { ja: 'わたしの夢', romaji: 'watashi no yume', en: 'my dream' },
        { ja: '君の声', romaji: 'kimi no koe', en: 'your voice' },
        { ja: 'レモンの匂い', romaji: 'remon no nioi', en: 'the scent of lemon' },
        { ja: 'いぬの名前', romaji: 'inu no namae', en: 'the dog\'s name' },
      ]
    },
    {
      topic: 'は — topic marker',
      pattern: '[Topic] は [comment]',
      anchor: '今も君はわたしの光',
      highlight: '君は',
      explanation: 'は (pronounced "wa") marks what the sentence is *about*. 君は = "as for you" — it sets up the topic before saying something about it.',
      examples: [
        { ja: '世界は美しい', romaji: 'sekai wa utsukushii', en: 'The world is beautiful' },
        { ja: '夢は遠い', romaji: 'yume wa tōi', en: 'Dreams are far away' },
        { ja: 'いぬは可愛い', romaji: 'inu wa kawaii', en: 'Dogs are cute' },
      ]
    },
    {
      topic: 'も — "also" / "even" / "too"',
      pattern: '[Noun/time] も = also / even [noun/time]',
      anchor: '今も君はわたしの光',
      highlight: '今も',
      explanation: 'も replaces は or が to mean "also", "too", or "even". 今も = "even now". Add も to any word to include it: 君も = "you too".',
      examples: [
        { ja: '今も好きだ', romaji: 'ima mo suki da', en: 'I still like you (even now)' },
        { ja: '君も来てね', romaji: 'kimi mo kite ne', en: 'You come too' },
        { ja: 'いぬも好き', romaji: 'inu mo suki', en: 'I like dogs too' },
      ]
    },
  ],

  neko: [
    {
      topic: 'に + なる — "to become"',
      pattern: '[Noun] に なる',
      anchor: '猫になったんだよな君は',
      highlight: '猫に',
      explanation: 'に + なる means "to become [noun]". The に here marks the result of the change. 猫になる = to become a cat. 大人になる = to become an adult. In the chorus, the singer imagines his ex has become a cat — 猫になったんだよな.',
      examples: [
        { ja: '猫になる', romaji: 'neko ni naru', en: 'to become a cat' },
        { ja: '大人になった', romaji: 'otona ni natta', en: 'became an adult' },
        { ja: 'ともだちになろう', romaji: 'tomodachi ni narō', en: 'let\'s become friends' },
      ]
    },
    {
      topic: 'なんて — dismissal / "of all things" / "as if"',
      pattern: '[Noun / phrase] + なんて',
      anchor: '君の顔なんて忘れてやるさ',
      highlight: 'なんて',
      explanation: 'なんて is added after a noun or phrase to express dismissal, disbelief, or that something is hard to believe. 君の顔なんて忘れてやるさ = "I\'ll forget your face — as if!" The speaker knows he probably can\'t, which is exactly why he says it.',
      examples: [
        { ja: '夢なんて', romaji: 'yume nante', en: 'dreams… (said dismissively)' },
        { ja: '泣くなんて', romaji: 'naku nante', en: 'crying — of all things!' },
        { ja: 'さようならなんて言わないで', romaji: 'sayonara nante iwanaide', en: 'don\'t say something like "goodbye"' },
      ]
    },
    {
      topic: 'この / その / あの — "this / that / that over there"',
      pattern: 'この + [noun] = this [noun] (near you)',
      anchor: 'だからこの僕も一緒に',
      highlight: 'この',
      explanation: 'この means "this" and always comes right before a noun. その = "that" (near the other person). あの = "that over there" or refers to something both speaker and listener know. In this line, この僕 = "this me" — the speaker pointing at himself with emotion.',
      examples: [
        { ja: 'この街', romaji: 'kono machi', en: 'this city' },
        { ja: 'あの頃', romaji: 'ano koro', en: 'back then / that time' },
        { ja: 'その声', romaji: 'sono koe', en: 'that voice (of yours)' },
        { ja: 'このいぬは可愛い', romaji: 'kono inu wa kawaii', en: 'this dog is cute' },
      ]
    },
  ],

  betsu: [
    {
      topic: '君 vs あなた — levels of "you"',
      pattern: '君 (casual/close) · あなた (neutral/formal)',
      anchor: '君のことが好きすぎて',
      highlight: '君',
      explanation: 'Japanese has different words for "you" depending on closeness. 君 (kimi) is warm and casual — used with someone you\'re close to. あなた (anata) is more neutral. In songs, 君 is very common between people in love.',
      examples: [
        { ja: '君が好きだ', romaji: 'kimi ga suki da', en: 'I like you (casual, intimate)' },
        { ja: 'あなたは優しい', romaji: 'anata wa yasashii', en: 'You are kind (neutral)' },
        { ja: '君の声が好き', romaji: 'kimi no koe ga suki', en: 'I love your voice' },
        { ja: 'あなたの名前は？', romaji: 'anata no namae wa?', en: 'What is your name?' },
      ]
    },
    {
      topic: '僕 vs 私 — levels of "I"',
      pattern: '僕 (casual, male) · 私 (neutral)',
      anchor: '僕が悪いのかな',
      highlight: '僕が',
      explanation: '僕 (boku) is casual and typically used by males. 私 (watashi) is neutral and used by anyone. Both mean "I / me". In Wacci\'s songs the speaker uses 僕 throughout — warm and a little vulnerable.',
      examples: [
        { ja: '僕は行く', romaji: 'boku wa iku', en: 'I\'m going (casual, male)' },
        { ja: '私は学生です', romaji: 'watashi wa gakusei desu', en: 'I am a student (neutral)' },
        { ja: '僕のいぬ', romaji: 'boku no inu', en: 'my dog (casual)' },
        { ja: '私の夢', romaji: 'watashi no yume', en: 'my dream' },
      ]
    },
    {
      topic: 'すぎる — "too much" / "excessively"',
      pattern: '[verb/i-adj stem] + すぎる',
      anchor: '君のことが好きすぎて',
      highlight: 'すぎて',
      explanation: 'Add すぎる to a verb stem or adjective to mean "too much". 好きすぎる = like too much. It often sounds like a complaint or overwhelmed feeling.',
      examples: [
        { ja: '好きすぎる', romaji: 'suki sugiru', en: 'like too much / love so much' },
        { ja: '食べすぎた', romaji: 'tabesugita', en: 'ate too much' },
        { ja: '眠すぎる', romaji: 'nemusugiru', en: 'too sleepy' },
        { ja: '可愛すぎる', romaji: 'kawaisugiru', en: 'too cute' },
      ]
    },
  ],

  longhair: [
    {
      topic: 'て + ほしい — "I want you to [do]"',
      pattern: '[verb て-form] + ほしい',
      anchor: 'そばにいてほしいな',
      highlight: 'いてほしい',
      explanation: 'て-form + ほしい = "I want [someone] to do [something]". It\'s a request or longing directed at someone else. いてほしい = "I want you to be here / stay".',
      examples: [
        { ja: 'そばにいてほしい', romaji: 'soba ni ite hoshii', en: 'I want you to stay close' },
        { ja: '笑ってほしい', romaji: 'waratte hoshii', en: 'I want you to smile' },
        { ja: '歌ってほしい', romaji: 'utatte hoshii', en: 'I want you to sing' },
        { ja: '来てほしい', romaji: 'kite hoshii', en: 'I want you to come' },
      ]
    },
    {
      topic: 'のに — "even though" / "and yet"',
      pattern: '[plain form] + のに',
      anchor: 'あなたが居ないのも分かっているのに諦めがつかなくて',
      highlight: 'のに',
      explanation: 'のに expresses frustration or surprise at a contradiction — "even though [X], [Y]". It adds an emotional punch: you know something is true, but the feeling doesn\'t follow.',
      examples: [
        { ja: '分かっているのに', romaji: 'wakatte iru no ni', en: 'even though I know' },
        { ja: '好きなのに言えない', romaji: 'suki na no ni ienai', en: 'even though I like you, I can\'t say it' },
        { ja: '雨なのに出かけた', romaji: 'ame na no ni dekaketa', en: 'went out even though it was raining' },
      ]
    },
    {
      topic: '頃 (ころ) — "around the time when"',
      pattern: '[verb plain form] + 頃  ·  [noun + の] + 頃',
      anchor: '私の長い髪が乾く頃あなたは夢の中',
      highlight: '乾く頃',
      explanation: '頃 (koro) always attaches AFTER a time expression — never at the start of a sentence on its own. It softens the time: "around when X", "by the time X", "back in the time of X". Think of it as gluing onto whatever comes before it.\n\nTwo patterns:\n① [verb, plain form] + 頃 → "around when [verb]"\n   乾く頃 = around when [hair] dries · 帰る頃 = by the time we get home · 気づく頃 = by the time you notice\n\n② [noun + の] + 頃 → "around the time of [noun]"\n   春の頃 = around springtime · 子供の頃 = back when I was a child\n\nWhere it sits in the sentence: the whole 頃-phrase sets the time for what follows. It usually floats near the front or middle — "By the time X, [main clause]." In the lyric: [my hair dries — 頃] → [you\'re already dreaming].',
      examples: [
        { ja: '乾く頃、あなたは夢の中', romaji: 'kawaku koro, anata wa yume no naka', en: 'by the time [it] dries, you\'re in a dream (長い髪)' },
        { ja: '帰る頃には暗くなる', romaji: 'kaeru koro ni wa kuraku naru', en: 'it\'ll be dark by the time we get home' },
        { ja: '春の頃に会おう', romaji: 'haru no koro ni aō', en: 'let\'s meet around springtime' },
        { ja: '子供の頃、よく泣いた', romaji: 'kodomo no koro, yoku naita', en: 'when I was a child, I cried a lot' },
        { ja: '気づく頃にはもう遅い', romaji: 'kidzuku koro ni wa mō osoi', en: 'by the time you notice, it\'s already too late' },
      ]
    },
  ],

  refrain: [
    {
      topic: 'まだ — "still" / "not yet"',
      pattern: 'まだ + [positive] = still · まだ + [negative] = not yet',
      anchor: 'まだ　足りなくて',
      highlight: 'まだ',
      explanation: 'まだ means "still" with a positive verb, or "not yet" with a negative verb. まだ足りない = "still not enough". It carries a sense of something unfinished or ongoing.',
      examples: [
        { ja: 'まだ好きだ', romaji: 'mada suki da', en: 'I still like you' },
        { ja: 'まだ言えない', romaji: 'mada ienai', en: 'I still can\'t say it / not yet' },
        { ja: 'まだここにいる', romaji: 'mada koko ni iru', en: 'I\'m still here' },
        { ja: 'まだ夢を見てる', romaji: 'mada yume wo miteru', en: 'still dreaming' },
      ]
    },
    {
      topic: 'ながら — "while doing [X]"',
      pattern: '[verb stem] + ながら + [main verb]',
      anchor: '泣きながら引き止めてよ',
      highlight: '泣きながら',
      explanation: 'ながら connects two simultaneous actions — "while doing X, also doing Y". Drop ます from a verb, add ながら. The main action comes after.',
      examples: [
        { ja: '泣きながら笑う', romaji: 'naki nagara warau', en: 'laugh while crying' },
        { ja: '歌いながら歩く', romaji: 'utainagara aruku', en: 'walk while singing' },
        { ja: '話しながら食べる', romaji: 'hanashinagara taberu', en: 'eat while talking' },
      ]
    },
    {
      topic: 'ている — ongoing state or action',
      pattern: '[verb て-form] + いる = is doing / has become',
      anchor: 'あの季節に まだ焦がれている',
      highlight: '焦がれている',
      explanation: 'て-form + いる shows something is ongoing or in a continuing state. 焦がれている = "am still longing" — the longing hasn\'t stopped. This is one of the most useful patterns in Japanese.',
      examples: [
        { ja: '焦がれている', romaji: 'kogarete iru', en: 'am still longing' },
        { ja: '雨が降っている', romaji: 'ame ga futte iru', en: 'it is raining' },
        { ja: '忘れられずにいる', romaji: 'wasurerarenaide iru', en: 'I find myself unable to forget' },
        { ja: '待っている', romaji: 'matte iru', en: 'I am waiting' },
      ]
    },
  ],

  sayonara: [
    {
      topic: 'ても — "even if" / "even though"',
      pattern: '[て-form] + も = even if [verb]',
      anchor: '離れていても心はいつもそばにある',
      highlight: 'ていても',
      explanation: 'て-form + も = "even if / even though". 離れていても = "even if we\'re apart". It shows the second clause is true *regardless* of the first. Very common in love songs.',
      examples: [
        { ja: '離れていても好きだ', romaji: 'hanarete ite mo suki da', en: 'I like you even if we\'re apart' },
        { ja: '雨でも行く', romaji: 'ame de mo iku', en: 'I\'ll go even in the rain' },
        { ja: '泣いても来ない', romaji: 'naite mo konai', en: 'won\'t come even if I cry' },
        { ja: 'いぬでも猫でもいい', romaji: 'inu de mo neko de mo ii', en: 'a dog or a cat — either is fine' },
      ]
    },
    {
      topic: 'に + ある / いる — existence at a place',
      pattern: '[Place/position] に ある (things) / いる (people/animals)',
      anchor: '心はいつもそばにある',
      highlight: 'そばにある',
      explanation: 'に + ある means something (inanimate) exists at a location. に + いる = someone/something animate exists there. そばにある = "exists close by". 心はそばにある = "my heart is always nearby".',
      examples: [
        { ja: '心はそばにある', romaji: 'kokoro wa soba ni aru', en: 'the heart is nearby (inanimate feeling)' },
        { ja: 'いぬがここにいる', romaji: 'inu ga koko ni iru', en: 'the dog is here (animate)' },
        { ja: '夢の中にいる', romaji: 'yume no naka ni iru', en: 'is inside a dream' },
        { ja: '花が庭にある', romaji: 'hana ga niwa ni aru', en: 'there are flowers in the garden' },
      ]
    },
    {
      topic: 'この / その / あの — "this / that / that over there"',
      pattern: 'この + [noun] = this [noun] (near speaker)',
      anchor: 'この長い話が終わる頃',
      highlight: 'この',
      explanation: 'この means "this" (near you). その = "that" (near the listener). あの = "that over there" (away from both). They always come directly before a noun — never alone.',
      examples: [
        { ja: 'この歌が好き', romaji: 'kono uta ga suki', en: 'I like this song' },
        { ja: 'あの頃', romaji: 'ano koro', en: 'back then / that time (in the past)' },
        { ja: 'その声', romaji: 'sono koe', en: 'that voice (of yours)' },
        { ja: 'このいぬは可愛い', romaji: 'kono inu wa kawaii', en: 'this dog is cute' },
      ]
    },
  ],

  tarinai: [
    {
      topic: 'なきゃ — "have to" (casual must)',
      pattern: '[verb negative stem] + なきゃ (= なければならない)',
      anchor: 'あなたを終わらせなきゃ',
      highlight: 'なきゃ',
      explanation: 'なきゃ is the casual form of "have to / must". 終わらせなきゃ = "I have to end this". It comes from 終わらせなければならない, shortened to なきゃ in everyday speech. You\'ll hear it constantly in casual conversation.',
      examples: [
        { ja: 'あなたを終わらせなきゃ', romaji: 'anata wo owarase nakya', en: 'I have to put an end to you' },
        { ja: '帰らなきゃ', romaji: 'kaeranakya', en: 'I have to go home' },
        { ja: '忘れなきゃ', romaji: 'wasurenakya', en: 'I have to forget' },
        { ja: '言わなきゃ', romaji: 'iwanakya', en: 'I have to say it' },
      ]
    },
    {
      topic: 'のに — "even though / and yet" (frustration)',
      pattern: '[plain form] + のに = even though [X], [Y]',
      anchor: 'あの時私は言えたのに',
      highlight: 'のに',
      explanation: 'のに expresses frustration or a painful contradiction — "even though X, Y". 言えたのに = "I was even able to say it back then — and yet now I can\'t". It carries a sense of things going wrong despite everything.',
      examples: [
        { ja: '言えたのに', romaji: 'ieta no ni', en: 'even though I was able to say it' },
        { ja: '好きなのに言えない', romaji: 'suki na no ni ienai', en: 'even though I like you, I can\'t say it' },
        { ja: '分かっているのに', romaji: 'wakatte iru no ni', en: 'even though I know' },
        { ja: '雨なのに出かけた', romaji: 'ame na no ni dekaketa', en: 'went out even though it was raining' },
      ]
    },
    {
      topic: 'から — "because / so" (giving a reason)',
      pattern: '[reason] から = because / since [reason]',
      anchor: '私を始められないから',
      highlight: 'から',
      explanation: 'から at the end of a clause means "because". The reason comes first, then から. 始められないから = "because I can\'t begin again". In the chorus, this explains why she has to say goodbye — the reason follows the から.',
      examples: [
        { ja: '始められないから', romaji: 'hajimerarenai kara', en: 'because I can\'t begin again' },
        { ja: '好きだから', romaji: 'suki da kara', en: 'because I like you' },
        { ja: '雨だから帰ろう', romaji: 'ame da kara kaerō', en: 'let\'s go home because it\'s raining' },
        { ja: '寂しいから泣いた', romaji: 'sabishii kara naita', en: 'I cried because I was lonely' },
      ]
    },
  ],

};

// ── Script Practice Levels ────────────────────────────────────────
// level1: individual words in kana  |  level2: short phrases  |  level3: full lines
const KANA_LEVELS = {

  level1: [
    // ── Hiragana words ──
    { kana: 'さようなら', meaning: 'goodbye (permanent farewell)', script: 'hira', song: 'さよなら', fullLine: 'さようならが言えなくて', lineEn: 'I can\'t bring myself to say goodbye' },
    { kana: 'ありがとう', meaning: 'thank you', script: 'hira', song: '猫', fullLine: 'ありがとうって言ってくれる声が好きで', lineEn: 'I love the voice that says "thank you" to me' },
    { kana: 'ゆっくり', meaning: 'slowly / gently', script: 'hira', song: '長い髪', fullLine: 'ゆっくりと眠ってね', lineEn: 'Sleep well, take your time' },
    { kana: 'ただ', meaning: 'just / simply / merely', script: 'hira', song: 'レモン', fullLine: 'ただ恋しくて', lineEn: 'I simply miss you' },
    { kana: 'いつか', meaning: 'someday', script: 'hira', song: 'レモン', fullLine: 'いつか君に逢える', lineEn: 'Someday I\'ll be able to meet you' },
    { kana: 'ずっと', meaning: 'always / all along / forever', script: 'hira', song: '別の人の彼女になったよ', fullLine: 'ずっと好きだったんだ', lineEn: 'I\'ve always liked you, all along' },
    { kana: 'また', meaning: 'again', script: 'hira', song: '猫', fullLine: 'また明日ねって手を振るたびに', lineEn: 'Every time we wave goodbye saying "see you tomorrow"' },
    { kana: 'もう', meaning: 'already / no more', script: 'hira', song: '長い髪', fullLine: 'もう何処にも無いのでしょう', lineEn: 'Are gone now, aren\'t they' },
    { kana: 'まだ', meaning: 'still / not yet', script: 'hira', song: 'ref:rain', fullLine: 'まだ足りなくて', lineEn: 'Still not enough' },
    { kana: 'ねえ', meaning: 'hey / come on (casual)', script: 'hira', song: '別の人の彼女になったよ', fullLine: 'ねえ聞いてよ', lineEn: 'Hey, listen to me' },
    { kana: 'なぜ', meaning: 'why', script: 'hira', song: 'レモン', fullLine: 'なぜ君は旅立ってしまったの', lineEn: 'Why did you have to go away' },
    { kana: 'どこ', meaning: 'where', script: 'hira', song: 'ref:rain', fullLine: 'どこを見渡しても通り過ぎた日々', lineEn: 'No matter where I look, those days have passed' },
    { kana: 'ごめん', meaning: 'sorry / I\'m sorry', script: 'hira', song: '別の人の彼女になったよ', fullLine: 'だからもう会えないや ごめんね', lineEn: 'So I can\'t see you anymore. I\'m sorry.' },
    { kana: 'いつも', meaning: 'always / usually', script: 'hira', song: '猫', fullLine: '君との時間はいつも短くて', lineEn: 'The time I spend with you is always so short' },
    { kana: 'もっと', meaning: 'more / even more', script: 'hira', song: '長い髪', fullLine: 'もっと好きになってく', lineEn: 'I fall for you even more' },
    { kana: 'なみだ', meaning: 'tears', script: 'hira', song: 'ref:rain', fullLine: '涙をこらえて笑ってみせる', lineEn: 'Holding back my tears, I put on a smile' },
    { kana: 'こころ', meaning: 'heart / mind / spirit', script: 'hira', song: '猫', fullLine: '心と体が喧嘩して', lineEn: 'My heart and body are fighting each other' },
    { kana: 'ゆめ', meaning: 'dream', script: 'hira', song: 'レモン', fullLine: '夢ならばどれほどよかったでしょう', lineEn: 'How much better it would have been if this were a dream' },
    { kana: 'きせつ', meaning: 'season', script: 'hira', song: 'ref:rain', fullLine: '繰り返す季節に慣れないまま', lineEn: 'The seasons repeat and still I can\'t get used to it' },
    { kana: 'おとな', meaning: 'adult / grown-up', script: 'hira', song: '別の人の彼女になったよ', fullLine: '余裕があって大人で', lineEn: 'He has composure and he\'s grown-up' },
    // ── Katakana words ──
    { kana: 'レモン', meaning: 'lemon', script: 'kata', song: 'レモン', fullLine: '苦いレモンの匂い', lineEn: 'The scent of a bitter lemon' },
    { kana: 'フレーズ', meaning: 'phrase / lyric', script: 'kata', song: 'ref:rain', fullLine: 'そんなフレーズに濡れてく', lineEn: 'Getting soaked in those phrases' },
    { kana: 'バス', meaning: 'bus', script: 'kata', song: 'ref:rain', fullLine: 'あの帰り道 バスに揺られて', lineEn: 'On that way home, swaying on the bus' },
    { kana: 'ポケット', meaning: 'pocket', script: 'kata', song: 'ref:rain', fullLine: '弱さをポケットの中に', lineEn: 'Tucking weakness into a pocket' },
    { kana: 'キス', meaning: 'kiss', script: 'kata', song: '別の人の彼女になったよ', fullLine: 'キスや態度だけで終わらせたりせずに', lineEn: 'Without wrapping things up with just a kiss or body language' },
    { kana: 'フラッと', meaning: 'casually / just dropping in', script: 'kata', song: '猫', fullLine: 'いつかフラッと現れてくれ', lineEn: 'Just show up casually someday' },
    { kana: 'タイプ', meaning: 'type / kind of person', script: 'kata', song: '別の人の彼女になったよ', fullLine: '大はしゃぎとかはしないタイプだけど', lineEn: 'He\'s not the type to go wild and rowdy' },
    { kana: 'スピード', meaning: 'speed / pace', script: 'kata', song: '別の人の彼女になったよ', fullLine: '歩くスピードは君が隣にいる時のまんま', lineEn: 'My walking pace is still the same as when you were beside me' },
    { kana: 'ロングヘアー', meaning: 'long hair', script: 'kata', song: '長い髪', fullLine: 'ロングヘアーのまま', lineEn: 'Just as you are with your long hair' },
  ],

  level2: [
    // ── Hiragana-heavy short phrases ──
    { kana: 'まだ　足りなくて', meaning: 'Still not enough', script: 'hira', song: 'ref:rain', fullLine: 'まだ　足りなくて', lineEn: 'Still not enough' },
    { kana: 'ゆっくりと眠ってね', meaning: 'Sleep well, take your time', script: 'hira', song: '長い髪', fullLine: 'ゆっくりと眠ってね', lineEn: 'Sleep well, take your time' },
    { kana: 'ありがとうって', meaning: 'Saying "thank you"', script: 'hira', song: '猫', fullLine: 'ありがとうって言ってくれる声が好きで', lineEn: 'I love the voice that says "thank you" to me' },
    { kana: 'また明日ねって', meaning: '"See you tomorrow"', script: 'hira', song: '猫', fullLine: 'また明日ねって手を振るたびに', lineEn: 'Every time we wave goodbye saying "see you tomorrow"' },
    { kana: 'ただ恋しくて', meaning: 'I simply miss you', script: 'hira', song: 'レモン', fullLine: 'ただ恋しくて', lineEn: 'I simply miss you' },
    { kana: 'さようならが言えなくて', meaning: 'I can\'t bring myself to say goodbye', script: 'hira', song: 'さよなら', fullLine: 'さようならが言えなくて', lineEn: 'I can\'t bring myself to say goodbye' },
    { kana: 'ずっとここにいたくなる', meaning: 'I find myself wanting to stay here forever', script: 'hira', song: 'さよなら', fullLine: 'ずっとここにいたくなる', lineEn: 'I find myself wanting to stay here forever' },
    { kana: 'ゆっくりとさようなら', meaning: 'Slowly, goodbye', script: 'hira', song: '長い髪', fullLine: 'ゆっくりとさようなら', lineEn: 'Slowly, goodbye' },
    { kana: 'まだ言えなくて', meaning: 'Still unable to say it', script: 'hira', song: 'ref:rain', fullLine: 'まだ　言えなくて', lineEn: 'Still unable to say it' },
    { kana: 'いつか君に逢える', meaning: 'Someday I\'ll be able to meet you', script: 'hira', song: 'レモン', fullLine: 'いつか君に逢える', lineEn: 'Someday I\'ll be able to meet you' },
    // ── Katakana phrases ──
    { kana: 'ロングヘアーのまま', meaning: 'Just as you are with your long hair', script: 'kata', song: '長い髪', fullLine: 'ロングヘアーのまま', lineEn: 'Just as you are with your long hair' },
    { kana: 'バスに揺られて', meaning: 'Swaying on the bus', script: 'kata', song: 'ref:rain', fullLine: 'あの帰り道 バスに揺られて', lineEn: 'On that way home, swaying on the bus' },
    { kana: 'フラッと現れてくれ', meaning: 'Just show up casually', script: 'kata', song: '猫', fullLine: 'いつかフラッと現れてくれ', lineEn: 'Just show up casually someday' },
    { kana: 'ポケットの中に', meaning: 'Into a pocket', script: 'kata', song: 'ref:rain', fullLine: '弱さをポケットの中に', lineEn: 'Tucking weakness into a pocket' },
  ],

};

// Hiragana-rich lines pulled from the songs, for alphabet study
const KANA_SHOWCASE = [
  { song: 'レモン', line: 'ただ恋しくて', romaji: 'Tada koishikute', en: 'I simply miss you', note: 'All hiragana except the kanji 恋 (koi = love)' },
  { song: 'レモン', line: 'いつか君に逢える', romaji: 'Itsuka kimi ni aeru', en: 'Someday I\'ll be able to meet you', note: 'Starts with pure hiragana: いつか (itsuka = someday)' },
  { song: '猫', line: 'ありがとうって', romaji: 'Arigatō tte', en: 'Saying "thank you"', note: '100% hiragana — great for practice!' },
  { song: '猫', line: 'また明日ねって手を振るたびに', romaji: 'Mata ashita ne tte te wo furu tabi ni', en: 'Every time we wave goodbye saying "see you tomorrow"', note: 'Mostly hiragana with two kanji' },
  { song: '別の人の彼女になったよ', line: 'ずっと好きだったんだ', romaji: 'Zutto suki datta nda', en: 'I\'ve always liked you, all along', note: 'Short and sweet — lots of hiragana' },
  { song: '別の人の彼女になったよ', line: 'ねえ聞いてよ', romaji: 'Nee kiite yo', en: 'Hey, listen to me', note: 'ねえ is pure hiragana — a very casual opener' },
  { song: 'ロングヘアー', line: 'それが愛なのかな', romaji: 'Sore ga ai nano kana', en: 'I wonder if that\'s what love is', note: 'Mix of hiragana and kanji 愛 (ai = love)' },
  { song: 'さよなら', line: 'さよならが言えなくて', romaji: 'Sayonara ga ienakute', en: 'I can\'t bring myself to say goodbye', note: 'さよなら is written entirely in hiragana' },
  { song: 'さよなら', line: '心はいつもそばにある', romaji: 'Kokoro wa itsumo soba ni aru', en: 'My heart is always close to you', note: '心 (kokoro) is a single kanji surrounded by hiragana' },
  { song: 'ロングヘアー', line: 'ロングヘアーのまま', romaji: 'Rongu hea no mama', en: 'Just as you are with your long hair', note: 'ロングヘアー is katakana — foreign loanword "Long Hair"' },
];
