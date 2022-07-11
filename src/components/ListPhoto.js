import PhotoCard from '@components/PhotoCard'
import LoadingIcon from '@common/LoadingIcon'
import useGetAnimals from '@hooks/useGetAnimals'

export default function ListOfPhotoCards({categoryId}) {
  const { dataGetAnimals, loadingGetAnimals, errorGetAnimals } = useGetAnimals(categoryId)

  if (errorGetAnimals) console.log('error')

  return (
    <ul>
      {loadingGetAnimals
       ? <LoadingIcon size={32}/>
       : dataGetAnimals?.photos?.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}