import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import MainLayout from '@/layouts/MainLayout'
import { allAuthors } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

const DEFAULT_LAYOUT = 'RewardLayout'

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'uses')
  return { props: { author } }
}
export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
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
          click on Claim to finally have your tokens
        </div>
      </div>
      <header className="space-y-1 rounded-lg bg-primary-500 py-4 px-2 text-center sm:py-6 md:py-10">
        <PageTitle>Question # 1</PageTitle>
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="flex flex-col justify-center text-base font-medium leading-6 text-white sm:flex-row sm:space-x-2">
            <div className="flex items-center justify-center space-x-2">
              <span>OHMIO</span>
              <span>-</span>
              <time dateTime={'2023-04-11'}>2023-04-11</time>
            </div>
            <span className="hidden sm:block">-</span>
            <span>Summar</span>
          </dd>
        </dl>
      </header>{' '}
      <header className="my-10 space-y-1 rounded-lg bg-primary-500 py-4 px-2 text-center sm:py-6 md:py-10">
        <PageTitle>Question # 2</PageTitle>
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="flex flex-col justify-center text-base font-medium leading-6 text-white sm:flex-row sm:space-x-2">
            <div className="flex items-center justify-center space-x-2">
              <span>OHMIO</span>
              <span>-</span>
              <time dateTime={'2023-04-11'}>2023-04-11</time>
            </div>
            <span className="hidden sm:block">-</span>
            <span>Summar</span>
          </dd>
        </dl>
      </header>{' '}
    </MainLayout>
  )
}
