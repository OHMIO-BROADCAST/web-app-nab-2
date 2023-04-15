import { MDXLayoutRenderer } from '@/components/MDXComponents'
import MainLayout from '@/layouts/MainLayout'
import { allAuthors } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { Widget } from '@typeform/embed-react'

const DEFAULT_LAYOUT = 'ContactLayout'

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
            Contact Form
          </h1>
          <span className="text-gray-700  dark:text-gray-300">
            Claim your <button className="underline-magical"> rewards </button> later
          </span>
        </div>
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          In order to be able to claim your event rewards later or keep in touch
        </div>
        <Widget id="<SVhYuniO>" style={{ width: '100%', height: '100%' }} className="my-form" />
      </div>
    </MainLayout>
  )
}
