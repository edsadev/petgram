import PhotoCard from '@components/PhotoCard'
import { gql, useQuery } from "@apollo/client";
import LoadingIcon from '@common/LoadingIcon'

export default function ListOfPhotoCards({categoryId}) {
  const ANIMAL_QUERY = gql`  
    query getPhotos($categoryId: ID) {
      photos (categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
      }
    }`

  const { loading, error, data } = useQuery(ANIMAL_QUERY, {
    variables: {
      categoryId 
    }
  });

  if (error) {
    console.log(error);
    return <div>Error!</div>
  }

  return (
    <ul>
      {loading
       ? <LoadingIcon size={32}/>
       : data?.photos?.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}