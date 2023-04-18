import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import MainLayout from '@/layouts/MainLayout'
import { allAuthors } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiCheckCircle } from 'react-icons/hi'

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

const DEFAULT_LAYOUT = 'RewardLayout'

const questions = [
  {
    id: 1,
    question: 'Please organize the NABShow logo',
    answers: [
      { id: 'A', text: 'A type of cryptocurrency' },
      {
        id: 'B',
        text: 'A digital asset that represents ownership of a unique item or piece of content',
      },
      { id: 'C', text: 'A type of stock' },
    ],
    correctAnswer: 'B',
  },
]

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'uses')
  return { props: { author } }
}

export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [answers, setAnswers] = useState({})
  const [isCorrectAnswer, setisCorrectAnswer] = useState(false)

  const handleAnswerChange = (questionId: number, answerId: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answerId }))
    console.log('RESPUESTAS', answers)
  }

  return (
    <MainLayout>
      <div className="pt-8">
        <div className="mb-8 flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Solve the puzzle and claims your rewards
          </h1>
          <span className="text-gray-700  dark:text-gray-300">
            You will need a Wallet <button className="underline-magical"> learn more here.</button>
          </span>
        </div>
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          Take a journey on these few questions then connect or create a wallet not worry if you
          dont have one we are going to guide you click on add network and add OHMIO Token then
          click on Claim to finally have your tokens.
        </div>
      </div>

      <dl
        style={{
          position: 'fixed',
          bottom: '9rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <dd>
          <div className="flex items-center justify-center">
            <span style={{ textDecoration: 'underline' }}>Your answer is</span>
          </div>
          {isCorrectAnswer ? (
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2F9F21',
                borderRadius: 50,
                padding: '1rem',
              }}
            >
              <HiCheckCircle color="#FFFFFF" style={{ marginRight: '0.4rem' }} /> Correct, claim
              rewards
            </span>
          ) : (
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#9B9C9C',
                borderRadius: 50,
                padding: '1rem',
                width: '15rem',
              }}
            >
              <AiFillCloseCircle color="#FFFFFF" style={{ marginRight: '0.4rem' }} /> Not finished
            </span>
          )}
        </dd>
      </dl>

      {questions.map(({ id }) => {
        return (
          <header
            className="my-10 space-y-1 rounded-lg bg-primary-500 py-4 px-10 text-center sm:py-6 md:py-10"
            key={id}
          >
            <PageTitle>Organize the NAB Show logo</PageTitle>

            <JigsawPuzzle
              imageSrc={'/static/images/nabshow.png'}
              rows={1}
              columns={2}
              onSolved={() => setisCorrectAnswer(true)}
            />
          </header>
        )
      })}
    </MainLayout>
  )
}
