'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AmazonLink } from '@/components/AmazonLink'
import {
  ageRangeOptions,
  baselineOptions,
  buildStarterPlan,
  confidenceOptions,
  equipmentOptions,
  goalOptions,
} from './starter-plan-config'
import type {
  AgeRange,
  Baseline,
  Confidence,
  EquipmentAccess,
  Goal,
  IntakeAnswers,
  PlanPath,
  StarterPlan,
} from './starter-plan-types'

const initialAnswers: IntakeAnswers = {
  path: 'myself',
  ageRange: '60-69',
  baseline: 'walking',
  confidence: 'medium',
  equipment: 'none',
  goal: 'start',
  safetyFlag: false,
}

function ChoiceButton({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-14 py-10 text-left font-body text-[16px] leading-[1.35] transition-colors ${
        active
          ? 'border-[#0B2545] bg-[#0B2545] text-warm-white'
          : 'border-[#2E6171]/30 bg-[#FAF8F5] text-[#1A1D24] hover:border-[#0B2545]'
      }`}
    >
      {children}
    </button>
  )
}

function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-[#2E6171]/20 pt-14">
      <legend className="font-display text-[27px] leading-[1.08] text-[#0B2545]">{title}</legend>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">{children}</div>
    </fieldset>
  )
}

function PreviewResult({ plan }: { plan: StarterPlan }) {
  return (
    <section className="border border-[#2E6171]/28 bg-warm-white p-16 md:p-20">
      <p className="font-utility text-[13px] leading-none text-[#2E6171]">Your preview</p>
      <h2 className="mt-8 font-display text-[36px] font-normal leading-[1.06] text-[#0B2545]">
        {plan.level}
      </h2>
      <p className="mt-10 font-body text-[18px] leading-[1.55] text-[#1A1D24]/78">{plan.preview}</p>
      <p className="mt-10 border-l border-[#B8860B] pl-12 font-body text-[17px] leading-[1.55] text-[#1A1D24]/78">
        First step: {plan.firstStep}
      </p>
    </section>
  )
}

function FullPlanResult({ plan }: { plan: StarterPlan }) {
  return (
    <section className="grid gap-18">
      <div>
        <p className="font-utility text-[13px] leading-none text-[#2E6171]">Full 2-week plan</p>
        <h2 className="mt-8 font-display text-[38px] font-normal leading-[1.06] text-[#0B2545]">
          {plan.summary}
        </h2>
      </div>

      <div className="grid gap-10">
        {plan.sessions.map((session) => (
          <article key={session.day} className="border border-[#2E6171]/22 bg-[#FAF8F5] p-14">
            <p className="font-utility text-[13px] leading-none text-[#2E6171]">{session.day}</p>
            <h3 className="mt-7 font-display text-[28px] font-normal leading-[1.08] text-[#0B2545]">
              {session.focus}
            </h3>
            <ul className="mt-10 grid gap-5 font-body text-[17px] leading-[1.5] text-[#1A1D24]/78">
              {session.exercises.map((exercise) => (
                <li key={exercise}>- {exercise}</li>
              ))}
            </ul>
            <p className="mt-10 font-body text-[16px] leading-[1.5] text-[#1A1D24]/70">{session.note}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="border border-[#2E6171]/22 p-14">
          <h3 className="font-display text-[28px] font-normal leading-[1.08] text-[#0B2545]">Read next</h3>
          <div className="mt-10 grid gap-10">
            {plan.articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="border-b border-[#2E6171]/20 pb-8 transition-colors hover:text-[#2E6171]"
              >
                <span className="block font-body text-[17px] font-medium leading-[1.35] text-[#0B2545]">
                  {article.title}
                </span>
                <span className="mt-3 block font-utility text-[13px] leading-[1.35] text-[#1A1D24]/62">
                  {article.note}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="border border-[#2E6171]/22 p-14">
          <h3 className="font-display text-[28px] font-normal leading-[1.08] text-[#0B2545]">
            Suggested equipment
          </h3>
          <div className="mt-10 grid gap-10">
            {plan.equipment.map((item) => (
              <div key={item.asin} className="border-b border-[#2E6171]/20 pb-8">
                <AmazonLink
                  asin={item.asin}
                  className="font-body text-[17px] font-medium leading-[1.35] text-[#0B2545] underline decoration-[#B8860B]/55 underline-offset-4 transition-colors hover:text-[#2E6171]"
                >
                  {item.label}
                </AmazonLink>
                <p className="mt-3 font-utility text-[13px] leading-[1.35] text-[#1A1D24]/62">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-utility text-[12px] leading-[1.4] text-[#1A1D24]/52">
            StrongPath may earn from qualifying Amazon purchases.
          </p>
        </div>
      </div>

      <p className="border-l border-[#B8860B] pl-12 font-utility text-[13px] leading-[1.45] text-[#1A1D24]/62">
        {plan.disclaimer}
      </p>
    </section>
  )
}

export function StarterPlanGenerator() {
  const [answers, setAnswers] = useState<IntakeAnswers>(initialAnswers)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'warning'>('idle')
  const [warning, setWarning] = useState('')
  const plan = buildStarterPlan(answers)

  function updateAnswer<Key extends keyof IntakeAnswers>(key: Key, value: IntakeAnswers[Key]) {
    setAnswers((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setWarning('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'starter-plan-generator' }),
      })

      if (!response.ok) {
        setWarning('Your plan is shown below. We could not add this email to the list locally.')
        setStatus('warning')
        return
      }

      setStatus('success')
    } catch {
      setWarning('Your plan is shown below. We could not add this email to the list locally.')
      setStatus('warning')
    }
  }

  return (
    <div className="grid gap-22 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
      <section className="border border-[#2E6171]/24 bg-[#FAF8F5] p-16 md:p-20">
        <div>
          <p className="font-utility text-[13px] leading-none text-[#2E6171]">5-7 question intake</p>
          <h2 className="mt-8 font-display text-[38px] font-normal leading-[1.06] text-[#0B2545]">
            Build a starter plan.
          </h2>
        </div>

        <div className="mt-18 grid gap-18">
          <FieldGroup title="Who is this for?">
            <ChoiceButton active={answers.path === 'myself'} onClick={() => updateAnswer('path', 'myself' as PlanPath)}>
              For myself
            </ChoiceButton>
            <ChoiceButton active={answers.path === 'parent'} onClick={() => updateAnswer('path', 'parent' as PlanPath)}>
              For my parent
            </ChoiceButton>
          </FieldGroup>

          <FieldGroup title="Approximate age range">
            {ageRangeOptions.map((option) => (
              <ChoiceButton
                key={option.value}
                active={answers.ageRange === option.value}
                onClick={() => updateAnswer('ageRange', option.value)}
              >
                {option.label}
              </ChoiceButton>
            ))}
          </FieldGroup>

          <FieldGroup title="Current baseline">
            {baselineOptions.map((option) => (
              <ChoiceButton
                key={option.value}
                active={answers.baseline === option.value}
                onClick={() => updateAnswer('baseline', option.value as Baseline)}
              >
                {option.label}
              </ChoiceButton>
            ))}
          </FieldGroup>

          <FieldGroup title="Starting confidence">
            {confidenceOptions.map((option) => (
              <ChoiceButton
                key={option.value}
                active={answers.confidence === option.value}
                onClick={() => updateAnswer('confidence', option.value as Confidence)}
              >
                {option.label}
              </ChoiceButton>
            ))}
          </FieldGroup>

          <FieldGroup title="Equipment available">
            {equipmentOptions.map((option) => (
              <ChoiceButton
                key={option.value}
                active={answers.equipment === option.value}
                onClick={() => updateAnswer('equipment', option.value as EquipmentAccess)}
              >
                {option.label}
              </ChoiceButton>
            ))}
          </FieldGroup>

          <FieldGroup title="Primary goal">
            {goalOptions.map((option) => (
              <ChoiceButton
                key={option.value}
                active={answers.goal === option.value}
                onClick={() => updateAnswer('goal', option.value as Goal)}
              >
                {option.label}
              </ChoiceButton>
            ))}
          </FieldGroup>

          <label className="flex gap-10 border-t border-[#2E6171]/20 pt-14 font-body text-[16px] leading-[1.5] text-[#1A1D24]/78">
            <input
              type="checkbox"
              checked={answers.safetyFlag}
              onChange={(event) => updateAnswer('safetyFlag', event.target.checked)}
              className="mt-1 h-16 w-16 accent-[#0B2545]"
            />
            Recent fall, surgery, hospitalization, dizziness, chest pain, major balance change, or major change in function.
          </label>
        </div>
      </section>

      <aside className="grid gap-14 lg:sticky lg:top-8">
        <PreviewResult plan={plan} />

        {status === 'idle' || status === 'loading' ? (
          <form onSubmit={handleSubmit} className="border border-[#2E6171]/24 bg-[#0B2545] p-16 text-warm-white md:p-20">
            <p className="font-utility text-[13px] leading-none text-warm-white/70">Unlock the full plan</p>
            <h2 className="mt-8 font-display text-[34px] font-normal leading-[1.06]">
              Send me the 2-week starter plan.
            </h2>
            <label htmlFor="starter-plan-email" className="sr-only">
              Email address
            </label>
            <input
              id="starter-plan-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="your@email.com"
              className="mt-14 w-full border border-warm-white/50 bg-transparent px-14 py-11 font-body text-[17px] leading-none text-warm-white placeholder:text-warm-white/55 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-10 inline-flex min-h-[44px] w-full items-center justify-center bg-warm-white px-18 py-11 font-body text-[16px] font-medium leading-none text-[#0B2545] transition-colors hover:bg-[#FAF8F5] disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Show full plan'}
            </button>
            <p className="mt-10 font-utility text-[12px] leading-[1.4] text-warm-white/55">
              Trust first: the preview is visible before capture. The full plan appears after signup.
            </p>
          </form>
        ) : (
          <div className="grid gap-12">
            {status === 'warning' && (
              <p role="status" className="border border-[#B8860B]/40 bg-[#FAF8F5] p-10 font-utility text-[13px] leading-[1.4] text-[#1A1D24]/70">
                {warning}
              </p>
            )}
            <FullPlanResult plan={plan} />
          </div>
        )}
      </aside>
    </div>
  )
}
