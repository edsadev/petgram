import ListOfCategories from '@components/ListCat'
import ListOfPhotoCards from '@components/ListPhoto'
import Logo from '@components/Logo'

export default function Home() {
  return (
    <div>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
