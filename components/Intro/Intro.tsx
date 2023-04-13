import { useContext, useRef } from 'react'
import { ScrollContext } from '../ScrollObserver'

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber

  if (progress >= 0 && progress < 1) {
    return 1
  }

  return 0.2
}

export default function Intro() {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 5
  let progress = 0
  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black text-white dark:bg-white  dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-7xl">
        <div className="leading-[1.15]">
          <div
            className="introText"
            style={{ opacity: opacityForBlock(progress, 0), marginTop: '4rem' }}
          >
            OHMIO makes possible tokenize the measures in parameters of transmission stations over
            the world.
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Boost the quality of your stream.
          </span>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Powered by <span className="text-primary-500">Internet of Things (IoT)</span>,{' '}
            <span className="text-cyan-500">Blockchain</span> &{' '}
            <span className="text-green-500">Web 3.0</span>
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Run nodes in your Radio/TV station and generate a new source of income.{' '}
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Improve the <span className="text-cyan-500">Blockchain</span> and validate
            microtransactions.{' '}
          </span>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
            OHMIO uses <span className="text-pink-500">Artificial Intelligence (AI)</span> to
            analyze data.
          </span>

          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 4) }}
          >
            DVB, DVB-T2, ATSC, ISDB-Tb.{' '}
          </span>
          <span
            className="introText inline-block after:content-['_']"
            style={{
              opacity: opacityForBlock(progress, 4),
              textDecoration: 'underline',
              marginBottom: '4rem',
            }}
          >
            All Standards Supported.{' '}
          </span>
        </div>
      </div>
    </div>
  )
}
