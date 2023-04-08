import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

interface Props {
  text: string
  type: number
}

const Tag = ({ text, type }: Props) => {
  return (
    <h1
      className={
        type == 0
          ? 'rounded-md bg-primary-600 p-1 px-3 text-xs font-semibold uppercase text-white duration-300 hover:bg-primary-400 active:bg-primary-500'
          : 'rounded-md bg-cyan-600 p-1 px-3 text-xs font-semibold uppercase text-white duration-300 hover:bg-cyan-400 active:bg-cyan-500'
      }
    >
      {text.split(' ').join('-')}
    </h1>
  )
}

export default Tag
