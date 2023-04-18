import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import MainLayout from '@/layouts/MainLayout'
import { allAuthors } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import {
  BsCashCoin,
  BsCoin,
  BsFillWalletFill,
  BsHddNetwork,
  BsHddNetworkFill,
  BsWallet,
} from 'react-icons/bs'
import { HiCheckCircle } from 'react-icons/hi'
import { TbCoin } from 'react-icons/tb'

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import { MoralisProvider } from 'react-moralis'

const DEFAULT_LAYOUT = 'RewardLayout'

export const envData = {
  SERVER_URL: process.env.REACT_APP_MORALIS_SERVER_URL as string,
  APP_ID: process.env.REACT_APP_MORALIS_APPLICATION_ID as string,
}

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID as string
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL as string

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
  const [isClaiming, setisClaiming] = useState(false)

  const handleAnswerChange = (questionId: number, answerId: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answerId }))
    console.log('RESPUESTAS', answers)
  }

  return (
    <MainLayout>
      <div className="pt-8">
        <div className="mb-8 flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {isClaiming
              ? 'Follow the next steps to claim your rewards'
              : 'Solve the puzzle and claims your rewards'}
          </h1>
          <span className="text-gray-700  dark:text-gray-300">
            You will need a Wallet{' '}
            <button
              className="underline-magical"
              onClick={() =>
                window.open('https://geekflare.com/beginners-guide-to-metamask/', '_blank')
              }
            >
              {' '}
              learn more here.
            </button>
          </span>
        </div>
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          {isClaiming
            ? '   In order to claim the rewards, please first add the network and then add OHMIO Contract Token, you just have to connect the wallet and click on the next buttons :)'
            : 'Take a journey on these few questions then connect or create a wallet not worry if you dont have one we are going to guide you click on add network and add OHMIO Token then click on Claim to finally have your tokens.'}
        </div>
      </div>

      {isClaiming ? null : (
        <dl
          style={{
            position: 'fixed',
            bottom: '6rem',
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
              <button
                onClick={() => setisClaiming(true)}
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
              </button>
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
      )}
      {isClaiming ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          <button
            style={{
              width: '100%',
              backgroundColor: 'blue',
              padding: '1rem',
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <BsFillWalletFill size={20} style={{ marginRight: '1rem' }} />
            Connect wallet
          </button>
          <div
            style={{
              borderWidth: '1px',
              borderBottom: '1px',
              borderColor: 'white',
              width: '100%',
            }}
          ></div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flexDirection: 'column',
              gap: '3rem',
            }}
          >
            <button
              style={{
                width: '100%',
                backgroundColor: 'grey',
                padding: '1rem',
                borderRadius: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <BsHddNetworkFill size={20} style={{ marginRight: '1rem' }} />
              Add network
            </button>
            <button
              style={{
                width: '100%',
                backgroundColor: 'orange',
                padding: '1rem',
                borderRadius: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TbCoin size={20} style={{ marginRight: '1rem' }} />
              Add token
            </button>
            <button
              style={{
                width: '100%',
                backgroundColor: 'green',
                padding: '1rem',
                borderRadius: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <BsCashCoin size={20} style={{ marginRight: '1rem' }} />
              Claim OHMIO
            </button>
          </div>
        </div>
      ) : (
        questions.map(({ id }) => {
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
        })
      )}
    </MainLayout>
  )
}
