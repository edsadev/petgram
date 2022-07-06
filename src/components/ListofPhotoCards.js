import PhotoCard from '@components/PhotoCard'
import { photos } from '@services/db.json'

export default function ListOfPhotoCards() {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}