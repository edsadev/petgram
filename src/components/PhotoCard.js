import Link from "next/link";
import styled from 'styled-components'
import { fadeIn } from "@styles/animation";
import useNearScreen from "@hooks/useNearScreen";
import useLocalStorage from "@hooks/useLocalStorage";
import FavButton from "./FavButton";

const Card = styled.div`
  margin-bottom: 32px;
  box-shadow: 10px 10px 16px rgba(0, 0, 0, .2);
  border-radius: 10px;
  padding-bottom: 12px;
  margin-inline: 12px;
  min-height: 200px;
`

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 70% 0 0 0;
  position: relative;
  cursor: ${(props) => { 
    if (props.extraClass === 'noPointer'){
      return 'default'
    } else {
      return 'pointer'
    }
  }};
  width: 100%;
`

const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export default function PhotoCard ({id, likes = 0, src, extraClass}) {
  const { show, cardRef } = useNearScreen()
  const key = `liked-${id}`
  
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Card ref={cardRef}>
      {
        show && <>
          <Link href={`/detail/${id}`}>
            <ImgWrapper extraClass={extraClass}>
              <Img src={src} alt={`Imagen ${id}`}/>
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} setLiked={setLiked} idPhoto={id} />
        </>
      }
    </Card>
  )
}