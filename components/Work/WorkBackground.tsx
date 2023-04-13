import { useEffect } from 'react'
import { renderCanvas } from '../renderCanvas'

export function WorkBackground() {
  useEffect(() => {
    renderCanvas()
  }, [])

  return (
    <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="h-[30vh] lg:h-auto" style={{ backgroundColor: '#000a39' }}></div>
      <div className="h-[70vh] bg-white lg:h-auto"></div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  )
}
