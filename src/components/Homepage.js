import ListOfCategories from '@components/ListCat'
import ListOfPhotoCards from '@components/ListPhoto'

export default function Homepage({id}) {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id}/>
    </>
  )
}