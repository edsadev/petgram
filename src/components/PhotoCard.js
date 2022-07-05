import Link from "next/link";
import styled, { keyframes, css } from 'styled-components'
import {MdFavoriteBorder} from 'react-icons/md'
import { fadeIn } from "@styles/animation";

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
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

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`

export default function PhotoCard ({id, likes = 0, src}) {
  return (
    <div>
      <Link href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt={`Imagen ${id}`}/>
        </ImgWrapper>
      </Link>
      <Button>
       <MdFavoriteBorder size="32px"/> {likes} Likes!
      </Button>
    </div>
  )
}