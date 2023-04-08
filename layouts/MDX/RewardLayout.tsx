import { PageSEO } from '@/components/SEO'
import type { Authors } from 'contentlayer/generated'
import { ReactNode } from 'react'
interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function ContactLayout({ children, content }: Props) {
  const { name } = content

  return (
    <>
      <PageSEO title={`Uses - ${name}`} description={`What I Use - ${name}`} />
      <div className="pt-8">
        <div className="mb-8 flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Rewards Form
          </h1>
          <span className="text-gray-700  dark:text-gray-300">
            OHMIO team <button className="underline-magical">rewards</button> later
          </span>
        </div>
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
