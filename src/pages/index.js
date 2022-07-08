import { useRouter } from 'next/router'

import ListOfCategories from '@components/ListCat'
import ListOfPhotoCards from '@components/ListPhoto'
import Logo from '@components/Logo'
import PhotoCardWithQuery from '@components/PhotoCardWithQuery'

export default function Home() {
  const router = useRouter()
  const detailId = router.query.detail
  return (
    <div>
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
              <ListOfCategories />
              <ListOfPhotoCards />
          </>
      }
    </div>
  )
}
