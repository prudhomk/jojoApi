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
    image: 'platinum.png',
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
    image: 'hierophantgreen.jpg',
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
    image: 'towergray.png',
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
    image: 'image.com',
    standUser: '48',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Super Strength, Super Speed, Precision, Restoration',
    battlecry: 'DORARARA'
  },
  {
    name: 'The Hand',
    alternateName: 'none',
    japaneseName: 'ザ・ハンド（手)',
    image: 'image.com',
    standUser: '50',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Erasure',
    battlecry: 'none'
  },
  {
    name: 'Bad Company',
    alternateName: 'Worse Company',
    japaneseName: 'バッド・カンパニー (極悪中隊)',
    image: 'image.com',
    standUser: '51',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Military Firepower',
    battlecry: 'none'
  },
  {
    name: 'Echoes',
    alternateName: 'Reverb',
    japaneseName: 'エコーズ',
    image: 'image.com',
    standUser: '53',
    chapter: 'Diamond is Unbreakable',
    abilities: 'ACT 1: Sound Generation, ACT 2: Sound Effects, ACT 3: Freeze',
    battlecry: 'Ok, Master! Let\'s kill da ho! Beeetch!'
  },
  {
    name: 'Heaven\'s Door',
    alternateName: 'none',
    japaneseName: 'ヘブンズ・ドアー（天国への扉)',
    image: 'image.com',
    standUser: '54',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Book Transmutation, Memory Removal, Written-in Commands',
    battlecry: 'none'
  },
  {
    name: 'Harvest',
    alternateName: 'none',
    japaneseName: 'ハーヴェスト',
    image: 'image.com',
    standUser: '56',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Strength in Numbers (500), Persistence, Harvesting, Hypodermic Needle, Range',
    battlecry: 'none'
  },
  {
    name: 'Earth Wind and Fire',
    alternateName: 'Terra Ventus',
    japaneseName: 'アース・ウインド・アンド・ファイヤー',
    image: 'image.com',
    standUser: '57',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Shapeshifting',
    battlecry: 'none'
  },
  {
    name: 'Love Deluxe',
    alternateName: 'none',
    japaneseName: 'ラブ・デラックス',
    image: 'image.com',
    standUser: '58',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Hair Manipulation',
    battlecry: 'none'
  },
  {
    name: 'Highway Star',
    alternateName: 'Highway Go Go',
    japaneseName: 'ハイウェイ・スター',
    image: 'image.com',
    standUser: '59',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Room Creation, Lifeforce Steal, Body Dismantlement, Enhanced sense of Smell, Speed, Range',
    battlecry: 'none'
  },
  {
    name: 'Surface',
    alternateName: 'Show Off',
    japaneseName: 'サーフィス（うわっ面)',
    image: 'image.com',
    standUser: '60',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Mimicry, Forced Synchronization',
    battlecry: 'none'
  },
  {
    name: 'Pearl Jam',
    alternateName: 'none',
    japaneseName: 'パール・ジャム',
    image: 'image.com',
    standUser: '61',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Curative Cooking',
    battlecry: 'MESHAA'
  },
  {
    name: 'Cinderella',
    alternateName: 'none',
    japaneseName: 'シンデレラ',
    image: 'image.com',
    standUser: '62',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Body Part Replacement, Permanent Body Replacement',
    battlecry: 'none'
  },
  {
    name: 'Killer Queen',
    alternateName: 'Deadly Queen',
    japaneseName: 'キラークイーン',
    image: 'image.com',
    standUser: '63',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Bomb Transmutation, Air Bomb Transmutation, Sheer Heart Attack, Bites the Dust',
    battlecry: 'SHIBABABA'
  },
  {
    name: 'Atom Heart Father',
    alternateName: 'Heart Father',
    japaneseName: 'アトム・ハート・ファーザー',
    image: 'image.com',
    standUser: '64',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Supernatural Photography',
    battlecry: 'none'
  },
  {
    name: 'Stray Cat',
    alternateName: 'none',
    japaneseName: 'ストレイ・キャット (猫草)',
    image: 'image.com',
    standUser: '65',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Reincarnation, Air Manipulation, Plant/Cat Constitution',
    battlecry: 'none'
  },
  {
    name: 'Red Hot Chili Pepper',
    alternateName: 'Chili Pepper',
    japaneseName: 'レッド・ホット・チリ・ペッパー',
    image: 'image.com',
    standUser: '66',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Electricity Absorption, Electrical Transfer, Speed',
    battlecry: 'none'
  },
  {
    name: 'Aqua Necklace',
    alternateName: 'none',
    japaneseName: 'アクア・ネックレス（水の首飾り)',
    image: 'image.com',
    standUser: '67',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Liquid Form, Possession',
    battlecry: 'none'
  },
  {
    name: 'Ratt',
    alternateName: 'none',
    japaneseName: 'ラット',
    image: 'image.com',
    standUser: '68',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Melting Darts',
    battlecry: 'none'
  },
  {
    name: 'Boy II Man',
    alternateName: 'none',
    japaneseName: 'ボーイ・II・マン',
    image: 'image.com',
    standUser: '69',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Energy Theft',
    battlecry: 'none'
  },
  {
    name: 'Super Fly',
    alternateName: 'none',
    japaneseName: 'スーパーフライ',
    image: 'image.com',
    standUser: '70',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Occupant Restriction, Damage Reflection',
    battlecry: 'none'
  },
  {
    name: 'Enigma',
    alternateName: 'Misterioso',
    japaneseName: 'エニグマ',
    image: 'image.com',
    standUser: '71',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Paper Seal',
    battlecry: 'none'
  },
  {
    name: 'Cheap Trick',
    alternateName: 'Cheap Trap',
    japaneseName: 'チープ・トリック',
    image: 'image.com',
    standUser: '72',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Attachement, Universal Speech',
    battlecry: 'none'
  },
  {
    name: 'The Lock',
    alternateName: 'none',
    japaneseName: '錠前',
    image: 'image.com',
    standUser: '73',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Guilt Increase, Lie Detection',
    battlecry: 'none'
  },
  {
    name: 'Achtung Baby',
    alternateName: 'Invisible Baby',
    japaneseName: 'アクトン・ベイビー',
    image: 'image.com',
    standUser: '74',
    chapter: 'Diamond is Unbreakable',
    abilities: 'Invisibility',
    battlecry: 'none'
  },
];


export default stands;
