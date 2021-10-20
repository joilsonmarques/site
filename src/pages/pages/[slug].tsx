import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { slug } = router.query
  return <div>Page: {slug}</div>
}
