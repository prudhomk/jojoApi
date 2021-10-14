const stands = [
  {
    name: 'The World',
    alternateName: 'none',
    japaneseName: 'ザ・ワールド(世界)',
    image: 'theworld.png',
    standUser: '2',
    chapter: 'Stardust Crusaders, Steel Ball Run',
    abilities: 'Time Stop, Super Speed, Super Strength',
    battlecry: 'MUDAMUDAMUDA'
  },
  {
    name: 'Hermit Purple',
    alternateName: 'none',
    japaneseName: 'ハーミットパープル（隠者の紫)',
    image: 'hermitpurple.webp',
    standUser: '10',
    chapter: 'Stardust Crusaders',
    abilities: 'Transmit Messages, Grappling, Creating Images',
    battlecry: 'none'
  },
  {
    name: 'Star Platinum',
    alternateName: 'none',
    japaneseName: 'スタープラチナ（星の白金)',
    image: 'starplatinum.png',
    standUser: '18',
    chapter: 'Stardust Crusaders, Diamond Is Unbreakable, Stone Ocean',
    abilities: 'Time Stop, Super Speed, Super Strength, Breath, Star-Finger',
    battlecry: 'ORAORAORAORAORAORA'
  },
  {
    name: 'Magician\'s Red',
    alternateName: 'none',
    japaneseName: 'マジシャンズレッド（魔術師の赤)',
    image: 'magicianred.png',
    standUser: '19',
    chapter: 'Stardust Crusaders',
    abilities: 'Pyrokinesis, Super Strength, Super Speed, Cross Fire Hurricane, Red Bind, Life Detector',
    battlecry: 'none'
  },
  {
    name: 'Hierophant Green',
    alternateName: 'none',
    japaneseName: 'ハイエロファントグリーン（法皇の緑)',
    image: 'hierophantgreen.png',
    standUser: '20',
    chapter: 'Stardust Crusaders',
    abilities: 'Coiled Body, Marionette Controll, Emerald Splash',
    battlecry: 'none'
  },
  {
    name: 'Silver Chariot',
    alternateName: 'none',
    japaneseName: 'シルバーチャリオッツ（銀の戦車)',
    image: 'silverchariot.png',
    standUser: '21',
    chapter: 'Stardust Crusaders, Vento Aureo',
    abilities: 'Speed, Power, Precision, Armor, Sword Shot',
    battlecry: 'HORAHORAHORA'
  },
  {
    name: 'The Fool',
    alternateName: 'none',
    japaneseName: 'ザ・フール（愚者)',
    image: 'thefool.webp',
    standUser: '22',
    chapter: 'Stardust Crusaders',
    abilities: 'Sand Manifestation, Shapeshifting',
    battlecry: 'none'
  },
  {
    name: 'Justice',
    alternateName: 'none',
    japaneseName: 'ジャスティス（正義）',
    image: 'justice.webp',
    standUser: '23',
    chapter: 'Stardust Crusaders',
    abilities: 'Fog String Puppetry, Illusions',
    battlecry: 'none'
  },
  {
    name: 'Cream',
    alternateName: 'none',
    japaneseName: 'クリーム',
    image: 'cream.png',
    standUser: '24',
    chapter: 'Stardust Crusaders',
    abilities: 'Void',
    battlecry: 'none'
  },
  {
    name: 'Emperor',
    alternateName: 'none',
    japaneseName: 'エンペラー（皇帝)',
    image: 'emperor.webp',
    standUser: '25',
    chapter: 'Stardust Crusaders',
    abilities: 'Homing Bullets',
    battlecry: 'none'
  },
  {
    name: 'Hanged Man',
    alternateName: 'none',
    japaneseName: 'ハングドマン（吊られた男)',
    image: 'hangedman.png',
    standUser: '26',
    chapter: 'Stardust Crusaders',
    abilities: 'Light Manifestation (reflections), wrist knives',
    battlecry: 'none'
  },
  {
    name: 'Osiris',
    alternateName: 'none',
    japaneseName: 'オシリス神',
    image: 'osiris.webp',
    standUser: '27',
    chapter: 'Stardust Crusaders',
    abilities: 'Soul Steal',
    battlecry: 'none'
  },
  {
    name: 'Atum',
    alternateName: 'none',
    japaneseName: 'アトゥム神',
    image: 'atum.webp',
    standUser: '28',
    chapter: 'Stardust Crusaders',
    abilities: 'Soul Steal, Binary Soul Reading',
    battlecry: 'none'
  },
  {
    name: 'Horus',
    alternateName: 'none',
    japaneseName: 'ホルス神',
    image: 'horus.webp',
    standUser: '29',
    chapter: 'Stardust Crusaders',
    abilities: 'Cryokinesis',
    battlecry: 'none'
  },
  {
    name: 'Geb',
    alternateName: 'none',
    japaneseName: 'ゲブ神',
    image: 'geb.png',
    standUser: '30',
    chapter: 'Stardust Crusaders',
    abilities: 'Water Amorphism',
    battlecry: 'none'
  },
  {
    name: 'Bastet',
    alternateName: 'Bast',
    japaneseName: 'バステト女神',
    image: 'bastet.webp',
    standUser: '31',
    chapter: 'Stardust Crusaders',
    abilities: 'Magnetic Attraction',
    battlecry: 'none'
  },
  {
    name: 'Sethan',
    alternateName: 'Set',
    japaneseName: 'セト神',
    image: 'sethan.webp',
    standUser: '32',
    chapter: 'Stardust Crusaders',
    abilities: 'Shadow Reflection, Age Regression',
    battlecry: 'none'
  },
  {
    name: 'Khnum',
    alternateName: 'none',
    japaneseName: 'クヌム神',
    image: 'khnum.webp',
    standUser: '33',
    chapter: 'Stardust Crusaders',
    abilities: 'Transfiguration',
    battlecry: 'none'
  },
  {
    name: 'Tohth',
    alternateName: 'none',
    japaneseName: 'トト神',
    image: 'tohth.png',
    standUser: '34',
    chapter: 'Stardust Crusaders',
    abilities: 'Prediction',
    battlecry: 'none'
  },
  {
    name: 'Anubis',
    alternateName: 'none',
    japaneseName: 'アヌビス神',
    image: 'anubis.png',
    standUser: '35',
    chapter: 'Stardust Crusaders',
    abilities: 'Adaptation, Selective Intangibility, Mind Control',
    battlecry: 'USHYAAAAA!'
  },
  {
    name: 'Tower of Gray',
    alternateName: 'none',
    japaneseName: 'タワー・オブ・グレー（灰の塔)',
    image: 'towerofgray.png',
    standUser: '36',
    chapter: 'Stardust Crusaders',
    abilities: 'Secondary Jaw, High Speed',
    battlecry: 'none'
  },
  {
    name: 'Dark Blue Moon',
    alternateName: 'none',
    japaneseName: 'ダークブルームーン（暗青の月)',
    image: 'darkbluemoon.webp',
    standUser: '37',
    chapter: 'Stardust Crusaders',
    abilities: 'Sharp Scales, Barnacles, Aquatic Prowess',
    battlecry: 'none'
  },
  {
    name: 'Strength',
    alternateName: 'none',
    japaneseName: 'ストレングス（力)',
    image: 'strength.webp',
    standUser: '38',
    chapter: 'Stardust Crusaders',
    abilities: 'Ship Manipulation',
    battlecry: 'none'
  },
  {
    name: 'Ebony Devil',
    alternateName: 'none',
    japaneseName: 'エボニーデビル（悪魔)',
    image: 'ebonydevil.webp',
    standUser: '39',
    chapter: 'Stardust Crusaders',
    abilities: 'Hatered Amplification',
    battlecry: 'none'
  },
  {
    name: 'Yellow Temperance',
    alternateName: 'none',
    japaneseName: 'イエローテンパランス（黄の節制)',
    image: 'yellowtemperance.png',
    standUser: '40',
    chapter: 'Stardust Crusaders',
    abilities: 'Assimilation, Physical Imperviousness, Appearance Replication',
    battlecry: 'none'
  },
  {
    name: 'Empress',
    alternateName: 'none',
    japaneseName: 'エンプレス（女帝)',
    image: 'empress.webp',
    standUser: '41',
    chapter: 'Stardust Crusaders',
    abilities: 'Parasitism, Flesh Disguise',
    battlecry: 'CHUMIMI'
  },
  {
    name: 'Wheel of Fortune',
    alternateName: 'none',
    japaneseName: 'ホウィール・オブ・フォーチュン（運命の車輪)',
    image: 'wheel.png',
    standUser: '42',
    chapter: 'Stardust Crusaders',
    abilities: 'Transformation from Confidence, Gasoline Bullets, Radio Comunication',
    battlecry: 'none'
  },
  {
    name: 'Lovers',
    alternateName: 'none',
    japaneseName: 'ラバーズ（恋人)',
    image: 'lovers.png',
    standUser: '43',
    chapter: 'Stardust Crusaders',
    abilities: 'Pain Synchronization, Organic Waste Clones, Spores Cultivation, Range',
    battlecry: 'none'
  },
  {
    name: 'Sun',
    alternateName: 'none',
    japaneseName: 'サン（太陽)',
    image: 'sun.webp',
    standUser: '44',
    chapter: 'Stardust Crusaders',
    abilities: 'Sun Replica, Lasers',
    battlecry: 'none'
  },
  {
    name: 'Death Thirteen',
    alternateName: 'none',
    japaneseName: 'デスサーティーン（死神13)',
    image: 'death13.webp',
    standUser: '45',
    chapter: 'Stardust Crusaders',
    abilities: 'Dreamworld Control',
    battlecry: 'Lo-Li-Ho'
  },
  {
    name: 'Judgement',
    alternateName: 'none',
    japaneseName: 'ジャッジメント（審判)',
    image: 'judgement.webp',
    standUser: '46',
    chapter: 'Stardust Crusaders',
    abilities: 'False Wish Granting',
    battlecry: 'HAIL 2U!'
  },
  {
    name: 'High Priestess',
    alternateName: 'none',
    japaneseName: 'ハイプリエステス（女教皇)',
    image: 'highpriestess.png',
    standUser: '47',
    chapter: 'Stardust Crusaders',
    abilities: 'Mineral Posession and Reformation',
    battlecry: 'none'
  },
  {
    name: 'Crazy Diamond',
    alternateName: 'Shining Diamond',
    japaneseName: 'クレイジー・ダイヤモンド',
    image: 'crazydiamond.png',
    standUser: '48',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Super Strength, Super Speed, Precision, Restoration',
    battlecry: 'DORARARA'
  },
  {
    name: 'The Hand',
    alternateName: 'none',
    japaneseName: 'ザ・ハンド（手)',
    image: 'thehand.png',
    standUser: '50',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Erasure',
    battlecry: 'none'
  },
  {
    name: 'Bad Company',
    alternateName: 'Worse Company',
    japaneseName: 'バッド・カンパニー (極悪中隊)',
    image: 'badcompany.webp',
    standUser: '51',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Military Firepower',
    battlecry: 'none'
  },
  {
    name: 'Echoes',
    alternateName: 'Reverb',
    japaneseName: 'エコーズ',
    image: 'echoes.png',
    standUser: '53',
    chapter: 'Diamond is Unbreakable',
    abilities: 'ACT 1: Sound Generation, ACT 2: Sound Effects, ACT 3: Freeze',
    battlecry: 'Ok, Master! Let\'s kill da ho! Beeetch!'
  },
  {
    name: 'Heaven\'s Door',
    alternateName: 'none',
    japaneseName: 'ヘブンズ・ドアー（天国への扉)',
    image: 'heavensdoor.png',
    standUser: '54',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Book Transmutation, Memory Removal, Written-in Commands',
    battlecry: 'none'
  },
  {
    name: 'Harvest',
    alternateName: 'none',
    japaneseName: 'ハーヴェスト',
    image: 'harvest.webp',
    standUser: '56',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Strength in Numbers (500), Persistence, Harvesting, Hypodermic Needle, Range',
    battlecry: 'none'
  },
  {
    name: 'Earth Wind and Fire',
    alternateName: 'Terra Ventus',
    japaneseName: 'アース・ウインド・アンド・ファイヤー',
    image: 'earthwind.jpg',
    standUser: '57',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Shapeshifting',
    battlecry: 'none'
  },
  {
    name: 'Love Deluxe',
    alternateName: 'none',
    japaneseName: 'ラブ・デラックス',
    image: 'lovedeluxe.png',
    standUser: '58',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Hair Manipulation',
    battlecry: 'none'
  },
  {
    name: 'Highway Star',
    alternateName: 'Highway Go Go',
    japaneseName: 'ハイウェイ・スター',
    image: 'highwaystar.png',
    standUser: '59',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Room Creation, Lifeforce Steal, Body Dismantlement, Enhanced sense of Smell, Speed, Range',
    battlecry: 'none'
  },
  {
    name: 'Surface',
    alternateName: 'Show Off',
    japaneseName: 'サーフィス（うわっ面)',
    image: 'surface.webp',
    standUser: '60',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Mimicry, Forced Synchronization',
    battlecry: 'none'
  },
  {
    name: 'Pearl Jam',
    alternateName: 'none',
    japaneseName: 'パール・ジャム',
    image: 'pearljam.webp',
    standUser: '61',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Curative Cooking',
    battlecry: 'MESHAA'
  },
  {
    name: 'Cinderella',
    alternateName: 'none',
    japaneseName: 'シンデレラ',
    image: 'cinderella.png',
    standUser: '62',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Body Part Replacement, Permanent Body Replacement',
    battlecry: 'none'
  },
  {
    name: 'Killer Queen',
    alternateName: 'Deadly Queen',
    japaneseName: 'キラークイーン',
    image: 'killerqueen.webp',
    standUser: '63',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Bomb Transmutation, Air Bomb Transmutation, Sheer Heart Attack, Bites the Dust',
    battlecry: 'SHIBABABA! SHIBOBOBO!'
  },
  {
    name: 'Atom Heart Father',
    alternateName: 'Heart Father',
    japaneseName: 'アトム・ハート・ファーザー',
    image: 'yoshihirokira.webp',
    standUser: '64',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Supernatural Photography',
    battlecry: 'none'
  },
  {
    name: 'Stray Cat',
    alternateName: 'none',
    japaneseName: 'ストレイ・キャット (猫草)',
    image: 'straycat.png',
    standUser: '65',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Reincarnation, Air Manipulation, Plant/Cat Constitution',
    battlecry: 'none'
  },
  {
    name: 'Red Hot Chili Pepper',
    alternateName: 'Chili Pepper',
    japaneseName: 'レッド・ホット・チリ・ペッパー',
    image: 'chilipepper.png',
    standUser: '66',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Electricity Absorption, Electrical Transfer, Speed',
    battlecry: 'none'
  },
  {
    name: 'Aqua Necklace',
    alternateName: 'none',
    japaneseName: 'アクア・ネックレス（水の首飾り)',
    image: 'aquanecklace.webp',
    standUser: '67',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Liquid Form, Possession',
    battlecry: 'none'
  },
  {
    name: 'Ratt',
    alternateName: 'none',
    japaneseName: 'ラット',
    image: 'ratt.webp',
    standUser: '68',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Melting Darts',
    battlecry: 'none'
  },
  {
    name: 'Boy II Man',
    alternateName: 'none',
    japaneseName: 'ボーイ・II・マン',
    image: 'boy2man.webp',
    standUser: '69',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Energy Theft',
    battlecry: 'none'
  },
  {
    name: 'Super Fly',
    alternateName: 'none',
    japaneseName: 'スーパーフライ',
    image: 'superfly.webp',
    standUser: '70',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Occupant Restriction, Damage Reflection',
    battlecry: 'none'
  },
  {
    name: 'Enigma',
    alternateName: 'Misterioso',
    japaneseName: 'エニグマ',
    image: 'enigma.png',
    standUser: '71',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Paper Seal',
    battlecry: 'none'
  },
  {
    name: 'Cheap Trick',
    alternateName: 'Cheap Trap',
    japaneseName: 'チープ・トリック',
    image: 'cheaptrick.png',
    standUser: '72',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Attachement, Universal Speech',
    battlecry: 'none'
  },
  {
    name: 'The Lock',
    alternateName: 'none',
    japaneseName: '錠前',
    image: 'lock.webp',
    standUser: '73',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Guilt Increase, Lie Detection',
    battlecry: 'none'
  },
  {
    name: 'Achtung Baby',
    alternateName: 'Invisible Baby',
    japaneseName: 'アクトン・ベイビー',
    image: 'shizuka.webp',
    standUser: '74',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Invisibility',
    battlecry: 'none'
  },
  {
    name: 'Gold Experience',
    alternateName: 'Golden Wind',
    japaneseName: 'ゴールド・エクスペリエンス (黄金体験)',
    image: 'goldexperience.png',
    standUser: '75',
    chapter: 'Vento Aureo',
    abilities: 'Create Life, Life Shot, Flesh/Organ Creation, Life Sensor',
    battlecry: 'MUDA MUDA MUDA'
  },
  {
    name: 'Gold Experience Requiem',
    alternateName: 'Golden Wind Requiem',
    japaneseName: 'ゴールド・エクスペリエンス・レクイエム',
    image: 'goldrequirem.png',
    standUser: '75',
    chapter: 'Vento Aureo',
    abilities: 'Return to Zero, Life Giver, Super Strength, Super Speed, Autonomy',
    battlecry: 'MUDA MUDA MUDA'
  },
  {
    name: 'Sticky Fingers',
    alternateName: 'Zipper Man',
    japaneseName: 'スティッキィ・フィンガーズ',
    image: 'stickyfingers.png',
    standUser: '76',
    chapter: 'Vento Aureo',
    abilities: 'Zippers',
    battlecry: 'ARI, ARI, ARI, Arriverderci!'
  },
  {
    name: 'Moody Blues',
    alternateName: 'Moody Jazz',
    japaneseName: 'ムーディー・ブルース',
    image: 'moodyblues.png',
    standUser: '77',
    chapter: 'Vento Aureo',
    abilities: 'Chronological Rebroadcasting',
    battlecry: 'URYAAAAA!'
  },
  {
    name: 'Sex Pistols',
    alternateName: 'Six Bullets',
    japaneseName: 'セックス・ピストルズ',
    image: 'sexpistols.png',
    standUser: '78',
    chapter: 'Vento Aureo',
    abilities: 'Bullet Control, Deflection, Enhanced Perception, Enhanced Reloading, Autonomy, Persistence',
    battlecry: 'PASS PASS PASS! YEE-HAW!'
  },
  {
    name: 'Aerosmith',
    alternateName: 'Li\'l Bomber',
    japaneseName: 'エアロスミス',
    image: 'aerosmith.png',
    standUser: '79',
    chapter: 'Vento Aureo',
    abilities: 'Machine Guns and Bomb, Carbon Dioxide Radar',
    battlecry: 'VOLAVOLAVOLA! VOLARE VIA!'
  },
  {
    name: 'Purple Haze',
    alternateName: 'Purple Smoke',
    japaneseName: 'パープル・ヘイズ',
    image: 'purplehaze.png',
    standUser: '80',
    chapter: 'Vento Aureo',
    abilities: 'Killer Infection',
    battlecry: 'UBASHAAAAAAA!'
  },
  {
    name: 'Spice Girl',
    alternateName: 'Spicy Lady',
    japaneseName: 'スパイス・ガール',
    image: 'spicegirl.png',
    standUser: '81',
    chapter: 'Vento Aureo',
    abilities: 'Softening',
    battlecry: 'WANNABEEE~'
  },
  {
    name: 'Chariot Requiem',
    alternateName: 'Requiem',
    japaneseName: 'チャリオッツ・レクイエム',
    image: 'chariotrequirem.png',
    standUser: '82',
    chapter: 'Vento Aureo',
    abilities: 'Regeneration, Soul Manipulation, Grand Scale Soul Swapping, Stand Manipulation, Complete Alteration of All Life, Autonomy',
    battlecry: 'none'
  },
  {
    name: 'Mr. President',
    alternateName: 'none',
    japaneseName: 'ミスター・プレジデント',
    image: 'mrpresident.png',
    standUser: '83',
    chapter: 'Vento Aureo',
    abilities: 'Hidden Room',
    battlecry: 'none'
  },
  {
    name: 'King Crimson',
    alternateName: 'Emporer Crimson (Eulogy)',
    japaneseName: 'キング・クリムゾン',
    image: 'kingcrimson.png',
    standUser: '84',
    chapter: 'Vento Aureo',
    abilities: 'Superior Strength, Time Erasure, Epitaph (Time Prediction)',
    battlecry: 'none'
  },
  {
    name: 'Clash',
    alternateName: 'Crush',
    japaneseName: 'クラッシュ',
    image: 'clash.png',
    standUser: '86',
    chapter: 'Vento Aureo',
    abilities: 'Liquid Warp',
    battlecry: 'none'
  },
  {
    name: 'Talking Head',
    alternateName: 'Talking Mouth',
    japaneseName: 'トーキング・ヘッド',
    image: 'talkinghead.png',
    standUser: '86',
    chapter: 'Vento Aureo',
    abilities: 'True-Statement Elimination, Tongue Control',
    battlecry: 'none'
  },
  {
    name: 'Notorious B.I.G',
    alternateName: 'Notorious Chase',
    japaneseName: 'ノトーリアス・B・I・G',
    image: 'notorious.png',
    standUser: '87',
    chapter: 'Vento Aureo',
    abilities: 'Post-Mortem Activation, Energy Absorption, Partial Symbiosis, Speed Detection',
    battlecry: 'none'
  },
  {
    name: 'Green Day',
    alternateName: 'Green Tea',
    japaneseName: 'グリーン・ディ',
    image: 'greenday.png',
    standUser: '88',
    chapter: 'Vento Aureo',
    abilities: 'Mold Infestation, Dismemberment Control',
    battlecry: 'none'
  },
  {
    name: 'Oasis',
    alternateName: 'Sanctuary',
    japaneseName: 'オアシス',
    image: 'oasis.webp',
    standUser: '89',
    chapter: 'Vento Aureo',
    abilities: 'User Suit, Ground Liquefaction, Physical Enhancement',
    battlecry: 'OAAAAAAAAAAASIS!'
  },
  {
    name: 'Black Sabbath',
    alternateName: 'Shadow Sabbath',
    japaneseName: 'ブラック・サバス',
    image: 'blacksabbath.png',
    standUser: '90',
    chapter: 'Vento Aureo',
    abilities: 'Long-Range, Shadow Power, Soul Pull, Storage',
    battlecry: 'none'
  },
  {
    name: 'Soft Machine',
    alternateName: 'Tender Machine',
    japaneseName: 'ソフト・マシーン',
    image: 'softmachine.png',
    standUser: '91',
    chapter: 'Vento Aureo',
    abilities: 'Pinch Deflating',
    battlecry: 'none'
  },
  {
    name: 'Kraft Work',
    alternateName: 'Arts & Crafts',
    japaneseName: 'クラフト・ワーク',
    image: 'kraftwork.png',
    standUser: '92',
    chapter: 'Vento Aureo',
    abilities: 'Kinetic Energy Manipulation, Position Locking, Kinetic Energy Accumulation',
    battlecry: 'none'
  },
  {
    name: 'Metallica',
    alternateName: 'Metallic',
    japaneseName: 'メタリカ',
    image: 'metallica.png',
    standUser: '93',
    chapter: 'Vento Aureo',
    abilities: 'Iron Manipulation, Invisibility, Stand Posession',
    battlecry: 'LOOOOOOOAAAAAAD'
  },
  {
    name: 'Little Feet',
    alternateName: 'Tiny Feet',
    japaneseName: 'リトル・フィート',
    image: 'littlefeet.png',
    standUser: '94',
    chapter: 'Vento Aureo',
    abilities: 'Shrinking, Speed',
    battlecry: 'none'
  },
  {
    name: 'Man in the Mirror',
    alternateName: 'Mirror Man',
    japaneseName: 'マン・イン・ザ・ミラー',
    image: 'mirrorman.png',
    standUser: '95',
    chapter: 'Vento Aureo',
    abilities: 'Mirror World Entry',
    battlecry: 'none'
  },
  {
    name: 'The Grateful Dead',
    alternateName: 'none',
    japaneseName: 'ザ・グレイトフル・デッド (偉大なる死)',
    image: 'grateful.png',
    standUser: '96',
    chapter: 'Vento Aureo',
    abilities: 'Accelerated Aging',
    battlecry: 'none'
  },
  {
    name: 'Beach Boy',
    alternateName: 'Fisher Man',
    japaneseName: 'ビーチ・ボーイ',
    image: 'beachboy.webp',
    standUser: '97',
    chapter: 'Vento Aureo',
    abilities: 'Hook and Line, Extreme Line Sensibility, Damage Reflection',
    battlecry: 'none'
  },
  {
    name: 'Baby Face',
    alternateName: 'Babyhead',
    japaneseName: 'ベイビィ・フェイス',
    image: 'babyface.png',
    standUser: '98',
    chapter: 'Vento Aureo',
    abilities: 'Homunculus Generation, Computer, Junior, Matter Manipulation, Physical Growth and Aging, Autonomy',
    battlecry: 'none'
  },
  {
    name: 'White Album',
    alternateName: 'White Ice',
    japaneseName: 'ホワイト・アルバム',
    image: 'whitealbum.png',
    standUser: '99',
    chapter: 'Vento Aureo',
    abilities: 'User Suit, Cryokinesis, Ice Armor, Gently Weeps',
    battlecry: 'none'
  },
  {
    name: 'Rolling Stones',
    alternateName: 'Prophecy Stones',
    japaneseName: 'ローリング・ストーン(ズ)',
    image: 'rollingstone.webp',
    standUser: '100',
    chapter: 'Vento Aureo',
    abilities: 'Homing to Dying Target',
    battlecry: 'none'
  },
  {
    name: 'Stone Free',
    alternateName: 'Stone Ocean',
    japaneseName: 'ストーン・フリー',
    image: 'rollingstone.webp',
    standUser: '101',
    chapter: 'Stone Ocean',
    abilities: 'String Decomposition, String Manipulation, Speed, Strength',
    battlecry: 'ORA ORA ORA'
  },
  {
    name: 'Kiss',
    alternateName: 'none',
    japaneseName: 'キッス',
    image: 'rollingstone.webp',
    standUser: '102',
    chapter: 'Stone Ocean',
    abilities: 'Duplicating Stickers',
    battlecry: 'OSHAAAA!'
  },
  {
    name: 'Burning Down the House',
    alternateName: 'none',
    japaneseName: 'バーニング・ダウン・ザ・ハウス',
    image: 'rollingstone.webp',
    standUser: '103',
    chapter: 'Stone Ocean',
    abilities: 'Ghost Objects, Ghost Room',
    battlecry: 'none'
  },
  {
    name: 'Foo Fighters',
    alternateName: 'none',
    japaneseName: 'フー・ファイターズ',
    image: 'rollingstone.webp',
    standUser: '104',
    chapter: 'Stone Ocean',
    abilities: 'Plankton Colony Form, Body Invasion, Water Control, Plankton Shot, Wound Seal',
    battlecry: 'none'
  },
  {
    name: 'Diver Down',
    alternateName: 'none',
    japaneseName: 'ダイバー・ダウン',
    image: 'rollingstone.webp',
    standUser: '105',
    chapter: 'Stone Ocean',
    abilities: 'Stand Power Storage, Restructuring',
    battlecry: 'none'
  },
  {
    name: 'Weather Report',
    alternateName: 'none',
    japaneseName: 'ウェザー・リポート',
    image: 'rollingstone.webp',
    standUser: '106',
    chapter: 'Stone Ocean',
    abilities: 'Weather Control, Air and Wind Manipulation, Humidity and Cloud Manipulation, Oxygen Build-Up, Cloud Suit, Heavy Weather, Snail Projection',
    battlecry: 'none'
  },
  {
    name: 'Goo Goo Dolls',
    alternateName: 'none',
    japaneseName: 'グー・グー・ドールズ',
    image: 'rollingstone.webp',
    standUser: '107',
    chapter: 'Stone Ocean',
    abilities: 'Size Reduction',
    battlecry: 'none'
  },
  {
    name: 'Whitesnake',
    alternateName: 'none',
    japaneseName: 'ホワイトスネイク',
    image: 'rollingstone.webp',
    standUser: '108',
    chapter: 'Stone Ocean',
    abilities: '"Melt Your Heart", Illusion, Disc Creation',
    battlecry: 'UOSHAAA!'
  },
  {
    name: 'C-Moon',
    alternateName: 'none',
    japaneseName: 'C-Moon',
    image: 'rollingstone.webp',
    standUser: '108',
    chapter: 'Stone Ocean',
    abilities: 'Gravity Shift, Surface Inversion, Time Acceleration, Speed, Power',
    battlecry: 'USHYAAA!'
  },
  {
    name: 'Made in Heaven',
    alternateName: 'none',
    japaneseName: 'メイド・イン・ヘブン',
    image: 'rollingstone.webp',
    standUser: '108',
    chapter: 'Stone Ocean',
    abilities: 'Time Acceleration, Universal Reset',
    battlecry: 'none'
  },
  {
    name: 'Under World',
    alternateName: 'none',
    japaneseName: 'アンダー・ワールド',
    image: 'rollingstone.webp',
    standUser: '109',
    chapter: 'Stone Ocean',
    abilities: 'Memory Unearthing',
    battlecry: 'none'
  },
  {
    name: 'Sky High',
    alternateName: 'none',
    japaneseName: 'スカイ・ハイ',
    image: 'rollingstone.webp',
    standUser: '110',
    chapter: 'Stone Ocean',
    abilities: 'Rods (sky fish), Rod Manipulation, Localized Illness',
    battlecry: 'none'
  },
  {
    name: 'Bohemian Rhapsody',
    alternateName: 'none',
    japaneseName: 'ボヘミアン・ラプソディー (自由人の狂想曲)',
    image: 'rollingstone.webp',
    standUser: '111',
    chapter: 'Stone Ocean',
    abilities: 'Fiction Realization',
    battlecry: 'none'
  },
  {
    name: 'Green, Green Grass of Home',
    alternateName: 'none',
    japaneseName: 'グリーン・グリーン・グラス・オブ・ホーム',
    image: 'rollingstone.webp',
    standUser: '112',
    chapter: 'Stone Ocean',
    abilities: 'Shrinking',
    battlecry: 'none'
  },
  {
    name: 'Manhattan Transfer',
    alternateName: 'none',
    japaneseName: 'マンハッタン・トランスファー',
    image: 'rollingstone.webp',
    standUser: '113',
    chapter: 'Stone Ocean',
    abilities: 'Wind Reading, Bullet Redirection',
    battlecry: 'none'
  },
  {
    name: 'Limp Bizkit',
    alternateName: 'Flaccid Pancake',
    japaneseName: 'リンプ・ビズキット',
    image: 'rollingstone.webp',
    standUser: '114',
    chapter: 'Stone Ocean',
    abilities: 'Invisible Reincarnation',
    battlecry: 'none'
  },
  {
    name: 'Jail House Lock',
    alternateName: 'none',
    japaneseName: 'ジェイル・ハウス・ロック（JAIL HOUSE LOCK)',
    image: 'rollingstone.webp',
    standUser: '115',
    chapter: 'Stone Ocean',
    abilities: 'Short-term Memory Loss',
    battlecry: 'none'
  },
  {
    name: 'Marilyn Manson',
    alternateName: 'none',
    japaneseName: '取り立て人マリリン・マンソン',
    image: 'rollingstone.webp',
    standUser: '116',
    chapter: 'Stone Ocean',
    abilities: 'Debt Collection',
    battlecry: 'none'
  },
  {
    name: 'Jumpin\' Jack Flash',
    alternateName: 'none',
    japaneseName: 'ジャンピン・ジャック・フラッシュ',
    image: 'rollingstone.webp',
    standUser: '117',
    chapter: 'Stone Ocean',
    abilities: 'Gravitational Removal, Built-in Centrifuges',
    battlecry: 'none'
  },
  {
    name: 'Dragon\'s Dream',
    alternateName: 'none',
    japaneseName: 'ドラゴンズ・ドリーム（龍の夢)',
    image: 'rollingstone.webp',
    standUser: '118',
    chapter: 'Stone Ocean',
    abilities: 'Autonomy, Feng Shui, Feng Shui Luck Reading, Neutrality',
    battlecry: 'none'
  },
  {
    name: 'Yo-Yo Ma',
    alternateName: 'none',
    japaneseName: 'ヨーヨーマッ',
    image: 'rollingstone.webp',
    standUser: '119',
    chapter: 'Stone Ocean',
    abilities: 'Automatic Stand, Intelligence, Acid Saliva, Indestructible',
    battlecry: 'none'
  },
  {
    name: 'Survivor',
    alternateName: 'none',
    japaneseName: 'サバイバー',
    image: 'rollingstone.webp',
    standUser: '120',
    chapter: 'Stone Ocean',
    abilities: 'Aggresiveness Stimulation, Automatic Stand',
    battlecry: 'none'
  },
  {
    name: 'Planet Waves',
    alternateName: 'none',
    japaneseName: 'プラネット・ウェイブス',
    image: 'rollingstone.webp',
    standUser: '121',
    chapter: 'Stone Ocean',
    abilities: 'Meteorite Attraction',
    battlecry: 'none'
  },
  {
    name: 'Highway to Hell',
    alternateName: 'none',
    japaneseName: 'ハイウェイ・トゥ・ヘル (地獄のハイウェイ)',
    image: 'rollingstone.webp',
    standUser: '122',
    chapter: 'Stone Ocean',
    abilities: 'Damage Sharing',
    battlecry: 'none'
  },
];


export default stands;
