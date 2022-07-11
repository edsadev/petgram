import styled from 'styled-components'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import LoadingIcon from '@common/LoadingIcon'
import { useToggleLikeMutation } from '@hooks/useToggleLikeMutation'

const Button = styled.button`
  display: flex;
  align-items: center;
  & svg {
    margin-inline: 12px;
    cursor: pointer;
  }
  padding-block: 16px;
`

export default function FavButton({liked, likes, idPhoto}) {
  const { likePhoto, loadingToggleLike, errorToggleLike } = useToggleLikeMutation()

  const handleLike = async () => {
    await likePhoto({variables: {input: {id: idPhoto}}})
  }


  if (errorToggleLike) return <div>Error!</div>

  return (
    <Button onClick={() => handleLike()}>
      {loadingToggleLike
        ? <LoadingIcon size={24}/>
        : liked 
          ? <MdFavorite color="red" size="32px"/>
          : <MdFavoriteBorder color="gray" size="32px"/>
      }
    <span>{likes} Likes!</span>
    </Button>
  )
}