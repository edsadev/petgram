import PhotoCard from '@components/PhotoCard'
import { gql, useQuery } from "@apollo/client";
import LoadingScreen from '@common/LoadingScreen'

export default function ListOfPhotoCards() {
  const withPhotos = gql`  query getPhotos {
    photos {
    id
    categoryId
    src
    likes
    userId
    liked
    }
  }`

  const { loading, error, data } = useQuery(withPhotos);

  return (
    <ul>
      {loading
       ? <LoadingScreen />
       : data?.photos?.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}