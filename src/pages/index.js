import ListOfCategories from '../components/ListOfCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
