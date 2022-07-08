import Homepage from '@components/Homepage'
import MainLayout from '@layouts/MainLayout'
import { useRouter } from 'next/router'

export default function Pet(){
  const router = useRouter()
  const id = router.query.id
  return (
    <MainLayout>
      <Homepage id={id}/>
    </MainLayout>
  )
}