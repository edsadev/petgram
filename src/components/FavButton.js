import styled, { keyframes } from 'styled-components'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useToggleLikeMutation } from '@hooks/useToggleLikeMutation'

const Div = styled.div`
  display: flex;
  flex-flow: column;
  padding-block: 16px;
  p {
    color: red;
    margin-left: 12px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  animation: sweep 0.5s ease;
  display: flex;
  align-items: center;
  & svg {
    margin-inline: 12px;
    cursor: pointer;
    flex-shrink: 1;
  }
  span {
    width: 100%;
    text-align: left;
  }
`

export default function FavButton({liked, likes, idPhoto}) {
  
  const { likePhoto, loadingToggleLike, errorToggleLike } = useToggleLikeMutation()

  const handleLike = async () => {
    try {
      await likePhoto({variables: {input: {id: idPhoto}}})
    } catch (e){
      console.log(e)
    }
  }

  return (
    <Div>
      <Container>
        <Button>
          {liked 
            ? <MdFavorite onClick={() => handleLike()} color="red" size="32px"/>
            : <MdFavoriteBorder onClick={() => handleLike()} color="gray" size="32px"/>
          }
        </Button>
        <span>{likes} Likes!</span>
      </Container>

      {errorToggleLike && <p>{errorToggleLike.message.charAt(0).toUpperCase() + errorToggleLike.message.slice(1, errorToggleLike.message.length)}</p>}
    </Div>
  )
}