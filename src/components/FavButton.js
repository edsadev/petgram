import styled from 'styled-components'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { gql, useMutation } from '@apollo/client'
import LoadingIcon from '@common/LoadingIcon'

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-inline: 12px;
    cursor: pointer;
  }
`

export default function FavButton({liked, likes, setLiked, idPhoto}) {
  const LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
      likeAnonymousPhoto(input: $input) {
        id,
        liked,
        likes
      }
    }
  `

  const [likePhoto, {data, loading, error}] = useMutation(LIKE_PHOTO)

  const handleLike = async () => {
    await likePhoto({variables: {input: {id: idPhoto}}})
    setLiked(!liked)
  }

  if (error) return <div>Error!</div>

  return (
    <Button onClick={() => handleLike()}>
      {loading
        ? <LoadingIcon size={24}/>
        : liked 
          ? <MdFavorite color="red" size="32px"/>
          : <MdFavoriteBorder color="gray" size="32px"/>
      }
    <span>{likes} Likes!</span>
    </Button>
  )
}