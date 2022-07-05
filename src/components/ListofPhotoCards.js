import PhotoCard from '@components/PhotoCard'
import { photos } from '@services/db.json'

export default function ListOfPhotoCards() {
  console.log(photos)
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}