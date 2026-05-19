export type PlanPath = 'myself' | 'parent'

export type AgeRange = '50-59' | '60-69' | '70-74' | '75-plus'
export type Baseline = 'inactive' | 'walking' | 'some-strength'
export type Confidence = 'low' | 'medium' | 'high'
export type EquipmentAccess = 'none' | 'bands' | 'dumbbells'
export type Goal = 'start' | 'stairs' | 'carry' | 'parent-support'

export type IntakeAnswers = {
  path: PlanPath
  ageRange: AgeRange
  baseline: Baseline
  confidence: Confidence
  equipment: EquipmentAccess
  goal: Goal
  safetyFlag: boolean
}

export type EquipmentLink = {
  label: string
  asin: string
  note: string
}

export type ArticleLink = {
  title: string
  href: string
  note: string
}

export type PlanSession = {
  day: string
  focus: string
  exercises: string[]
  note: string
}

export type StarterPlan = {
  level: string
  summary: string
  preview: string
  firstStep: string
  sessions: PlanSession[]
  articles: ArticleLink[]
  equipment: EquipmentLink[]
  disclaimer: string
}
