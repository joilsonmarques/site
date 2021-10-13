import { useRouter } from 'next/router'

const Episode = () => {
  const router = useRouter()
  const { episode_slug } = router.query

  return <p>Episódio: {episode_slug}</p>
}

export default Episode
