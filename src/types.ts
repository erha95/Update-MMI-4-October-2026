export type StageId = 'stage1' | 'stage2' | 'stage3' | 'stage4';

export interface StageInfo {
  id: StageId;
  number: number;
  slug: string;
  name: string;
  subtitle: string;
  ageBadge: string;
  focusFlag: string;
  flagType: 'stage1' | 'stage2' | 'stage3' | 'stage4';
  accentColor: string;
  quote: string;
  description: string;
  longDescription: string;
  whyThisStage: string;
  keyDeliverables: string[];
  workshop: {
    title: string;
    description: string;
    topics: string[];
  };
  mentoring: {
    title: string;
    description: string;
    features: string[];
    certificationNotice?: string;
  };
}

export type ProgramCategory =
  | 'all'
  | 'brokerage'
  | 'investment-mgmt'
  | 'underwriting'
  | 'analysis'
  | 'mutual-funds'
  | 'risk-compliance';

export interface TrainingMethods {
  publicClass: string;
  inHouseClass: string;
  privateClass: string;
  delivery: string;
  language: string;
}

export interface SkkniUnit {
  code: string;
  title: string;
  description: string;
}

export interface ClassPricing {
  price: string;
  earlyBird?: string;
  description?: string;
}

export interface ProgramPricing {
  publicClass: ClassPricing;
  privateClass: ClassPricing;
  examFee: {
    price: string;
    institution: string;
    note?: string;
  };
  totalPublicPlusExam: {
    price: string;
    earlyBird?: string;
  };
  totalPrivatePlusExam: {
    price: string;
    earlyBird?: string;
  };
}

export interface ProgramItem {
  id: string;
  code: string;
  name: string;
  titleEn: string;
  qualificationLevel: string;
  learningHours: string;
  legalBasis: string;
  subfield?: string;
  category: ProgramCategory;
  stage: StageId;
  stageName: string;
  badge: string;
  isPopular?: boolean;
  shortDesc: string;
  fullDesc: string;
  skkniStandard: string;
  targetAudience: string[];
  careerProspects: string[];
  duration: string;
  format: string;
  schedule: string;
  investment: string;
  earlyBird?: string;
  pricing: ProgramPricing;
  unitKompetensi: string[];
  skkniUnits: SkkniUnit[];
  persyaratanPeserta: string[];
  metodePelatihan: TrainingMethods;
  certificationProcess: string[];
  benefits: string[];
}

export interface FaqItem {
  id: string;
  category: 'sertifikasi' | 'asesmen' | 'pembelajaran' | 'umum';
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  program: string;
  quote: string;
  avatarText: string;
  badgeColor: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    text: string;
    stage: StageId;
    points: { stage1: number; stage2: number; stage3: number };
    tag: string;
  }[];
}

export interface QuizResult {
  stage: StageId;
  stageName: string;
  tagline: string;
  summary: string;
  nextSteps: string[];
  recommendedPrograms: string[];
  waMessage: string;
}
