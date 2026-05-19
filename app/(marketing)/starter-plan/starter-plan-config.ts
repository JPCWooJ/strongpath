import type {
  AgeRange,
  Baseline,
  Confidence,
  EquipmentAccess,
  Goal,
  IntakeAnswers,
  StarterPlan,
} from './starter-plan-types'

export const ageRangeOptions: Array<{ value: AgeRange; label: string }> = [
  { value: '50-59', label: '50-59' },
  { value: '60-69', label: '60-69' },
  { value: '70-74', label: '70-74' },
  { value: '75-plus', label: '75+' },
]

export const baselineOptions: Array<{ value: Baseline; label: string }> = [
  { value: 'inactive', label: 'Mostly inactive right now' },
  { value: 'walking', label: 'Walking or light activity' },
  { value: 'some-strength', label: 'Some recent strength work' },
]

export const confidenceOptions: Array<{ value: Confidence; label: string }> = [
  { value: 'low', label: 'Low - start very carefully' },
  { value: 'medium', label: 'Medium - simple is best' },
  { value: 'high', label: 'High - ready for structure' },
]

export const equipmentOptions: Array<{ value: EquipmentAccess; label: string }> = [
  { value: 'none', label: 'None yet' },
  { value: 'bands', label: 'Resistance bands' },
  { value: 'dumbbells', label: 'Light dumbbells' },
]

export const goalOptions: Array<{ value: Goal; label: string }> = [
  { value: 'start', label: 'Start safely' },
  { value: 'stairs', label: 'Stairs and standing up' },
  { value: 'carry', label: 'Carry groceries or bags' },
  { value: 'parent-support', label: 'Help a parent begin' },
]

const conservativeDisclaimer =
  'This plan is educational and conservative. It is not medical advice. If there has been a recent fall, surgery, hospitalization, dizziness, chest pain, significant balance change, unexplained weight loss, or a major change in function, consult a physician, physical therapist, or qualified professional before starting.'

const standardDisclaimer =
  'This plan is educational and is not medical advice. Stop if anything feels sharp, unstable, or unusual. Consult a physician, physical therapist, or qualified professional before beginning if there are medical concerns.'

const baseArticles = [
  {
    title: 'What Is Sarcopenia?',
    href: '/blog/what-is-sarcopenia',
    note: 'The plain-language foundation for age-related muscle loss.',
  },
  {
    title: 'Resistance Training for Older Adults',
    href: '/blog/resistance-training-older-adults',
    note: 'Why strength work matters and how to think about progression.',
  },
  {
    title: 'How Much Protein Do Older Adults Need?',
    href: '/blog/protein-for-older-adults',
    note: 'How food supports training and recovery.',
  },
]

const parentArticle = {
  title: 'How to Help Aging Parents Stay Strong',
  href: '/blog/help-aging-parents-stay-strong',
  note: 'How to support a parent without pressure or fear.',
}

const starterEquipment = [
  {
    label: 'Resistance band set',
    asin: 'B088QJ2YTY',
    note: 'Useful when starting without weights.',
  },
]

const dumbbellEquipment = [
  {
    label: 'Light dumbbell pair',
    asin: 'B01LR5RO5U',
    note: 'Useful for simple carries, rows, and controlled strength work.',
  },
]

function isConservative(answers: IntakeAnswers) {
  return answers.safetyFlag || answers.ageRange === '75-plus' || answers.baseline === 'inactive' || answers.confidence === 'low'
}

function levelFor(answers: IntakeAnswers) {
  if (isConservative(answers)) return 'Conservative starter'
  if (answers.baseline === 'some-strength' && answers.confidence === 'high') return 'Structured starter'
  return 'Steady starter'
}

function exercisesFor(answers: IntakeAnswers) {
  const conservative = isConservative(answers)
  const main = conservative
    ? ['Sit-to-stand from a stable chair', 'Wall push-up', 'Supported march', 'Easy band row or towel row']
    : ['Chair squat', 'Wall or counter push-up', 'Band row or light dumbbell row', 'Farmer carry with light load']

  if (answers.goal === 'stairs') return [...main.slice(0, 3), 'Low step practice with support']
  if (answers.goal === 'carry') return [...main.slice(0, 3), 'Light carry practice']
  return main
}

function equipmentFor(answers: IntakeAnswers) {
  if (answers.equipment === 'dumbbells') return dumbbellEquipment
  if (answers.equipment === 'bands') return starterEquipment
  return starterEquipment
}

export function buildStarterPlan(answers: IntakeAnswers): StarterPlan {
  const conservative = isConservative(answers)
  const level = levelFor(answers)
  const exercises = exercisesFor(answers)
  const person = answers.path === 'parent' ? 'your parent' : 'you'
  const articleSet = answers.path === 'parent' ? [parentArticle, ...baseArticles] : baseArticles

  return {
    level,
    summary: `${level}: a simple 2-week plan for helping ${person} begin with strength work at a measured pace.`,
    preview: conservative
      ? 'Start with low-friction, supported movements and leave plenty of recovery.'
      : 'Start with simple strength sessions that are specific enough to build a habit.',
    firstStep: `This week, ${answers.path === 'parent' ? 'share the plan and choose one calm first session' : 'choose one calm first session'} before adding difficulty.`,
    sessions: [
      {
        day: 'Week 1 / Session 1',
        focus: 'Learn the movements',
        exercises,
        note: 'Use an easy effort. The win is finishing comfortably.',
      },
      {
        day: 'Week 1 / Session 2',
        focus: 'Repeat with confidence',
        exercises,
        note: 'Repeat the same movements. Keep the pace controlled.',
      },
      {
        day: 'Week 2 / Session 1',
        focus: 'Add a small progression',
        exercises,
        note: conservative ? 'Add one repetition only if the first week felt easy.' : 'Add one set or a small amount of resistance if the first week felt easy.',
      },
      {
        day: 'Week 2 / Session 2',
        focus: 'Make it repeatable',
        exercises,
        note: 'Finish with a plan for the next two weeks: same schedule, gradual progress.',
      },
    ],
    articles: articleSet,
    equipment: equipmentFor(answers),
    disclaimer: conservative ? conservativeDisclaimer : standardDisclaimer,
  }
}
