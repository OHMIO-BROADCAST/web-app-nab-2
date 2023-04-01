export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `Control and Management your`,
    title: `Parameters of transmision`,
    image: {
      src: '/static/images/aphex.png',
      width: 800,
      height: 770,
    },
  },
  {
    description: 'Run blockchain nodes through OHMIO Box',
    title: 'into the transport stream',
    image: {
      src: '/static/images/field-app.png',
      width: 600,
      height: 554,
    },
  },
  {
    description: `Boost your transmission`,
    title: '& earn rewards',
    image: {
      src: '/static/images/planner-app.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `Special reward for`,
    title: 'NAB Show participants',
    image: {
      src: '/static/images/nabshow.png',
      width: 600,
      height: 717,
    },
  },
]
