import { Program, Company } from './types';

export const programs: Program[] = [
  {
    id: 'internship',
    title: 'インターン (Internship)',
    subtitle: '大学生または卒業後1年以内の方を対象にアメリカ内企業での実務体験を提供',
    description: 'アメリカの企業で実務体験を積み、グローバルなビジネス環境を学ぶことができます。',
    link: 'https://www.intraxjp.com/j1/',
    linkText: '詳細はこちら →'
  },
  {
    id: 'trainee',
    title: '職業訓練 (Trainee)',
    subtitle: '社会人経験者対象 専門分野でのスキルアップや国際業務トレーニング',
    description: '専門分野でのスキルアップと国際業務トレーニングを提供します。',
    link: 'https://www.intraxjp.com/j1/',
    linkText: '詳細はこちら →'
  },
  {
    id: 'aupair',
    title: 'オペア (AuPair)',
    subtitle: 'ホストファミリーの子どもの世話を通じた文化交流 無料の往復航空券、食事、個室滞在、学費補助もあり',
    description: 'ホストファミリーの子どもの世話を通じて文化交流を深めます。',
    link: 'https://aupaircare.intraxjp.com/',
    linkText: '詳細はこちら →'
  },
  {
    id: 'worktravel',
    title: '大学生アルバイト (Work Travel)',
    subtitle: '大学生を対象とした春季・夏季の短期就労プログラム　観光と就労の両立が可能',
    description: '春・夏休みを利用してアメリカでアルバイトができるプログラムです。',
    link: 'https://worktravel.intraxjp.com/',
    linkText: '詳細はこちら →'
  },
  {
    id: 'teacher',
    title: '教師交流 (Teacher Exchange)',
    subtitle: '認可された教育機関での教育活動 外国人教員がアメリカの学校で一定期間教える制度',
    description: 'アメリカの学校で教育活動を行うことができます。',
    link: 'https://www.intraxjp.com/teacher-ex/',
    linkText: '詳細はこちら →'
  },
  {
    id: 'research',
    title: '研究者派遣 (Research Scholar)',
    subtitle: '研究者・大学教授などが大学・研究機関での研究活動を行う',
    description: '大学・研究機関での研究活動を行うことができます。',
    link: 'https://www.intraxjp.com/research-scholar/',
    linkText: '詳細はこちら →'
  },
  {
    id: 'highschool',
    title: '高校交換留学 (Secondary Student)',
    subtitle: '高校生を対象とした交換留学プログラム 無償の公立高校・家庭に滞在',
    description: 'アメリカの公立高校で交換留学ができます。',
    link: 'https://ayusa.intraxjp.com/',
    linkText: '詳細はこちら →'
  },
  {
    id: 'camp',
    title: 'キャンプカウンセラー (Camp Counselor)',
    subtitle: 'アメリカのサマーキャンプで子どもたちの指導を行う',
    description: 'サマーキャンプで子どもたちの指導を行います。',
    link: 'https://www.intraxjp.com/camp-counselor/',
    linkText: '詳細はこちら →'
  }
];

export const companies: Company[] = [
  { name: 'トヨタ紡織株式会社', industry: '自動車部品' },
  { name: '日本通運株式会社', industry: '物流' },
  { name: '森永製菓株式会社', industry: '食品' },
  { name: '株式会社クラレ', industry: '化学' },
  { name: '日清食品ホールディングス株式会社', industry: '食品' },
  { name: '京セラ株式会社', industry: '電子機器' },
  { name: 'ダイキン工業株式会社', industry: '空調機器' },
  { name: '株式会社UACJトレーディング', industry: '金属' },
  { name: 'ハウス食品グループ本社株式会社', industry: '食品' },
  { name: '株式会社JTBビジネストランスフォーム', industry: '旅行・IT' },
  { name: '三井不動産株式会社', industry: '不動産' }
];

export const tabData = [
  {
    id: 'tab1',
    title: 'J1ビザとは',
    subtitle: '教育・文化・就業研修を目的とした交流訪問者ビザ'
  },
  {
    id: 'tab2',
    title: 'J1ビザでアメリカ駐在',
    subtitle: '企業のグローバル化を支援する駐在プログラム'
  },
  {
    id: 'tab3',
    title: '福利厚生に活用できるJ1プログラム',
    subtitle: '社員満足度向上を実現する福利厚生施策'
  },
  {
    id: 'tab4',
    title: '学校の方へ',
    subtitle: '学生のグローバルな成長を支援する教育機関向けプログラム'
  }
];
