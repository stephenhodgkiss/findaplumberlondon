import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function EmergencyPlumber() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/services/emergency-plumbing')
  }, [router])

  return null
}
