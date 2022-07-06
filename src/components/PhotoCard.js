import Link from "next/link";
import styled from 'styled-components'
import { MdFavoriteBorder } from 'react-icons/md'
import { fadeIn } from "@styles/animation";
import { useEffect, useState, useRef } from "react";

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
  const cardRef = useRef(null)
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if(isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(cardRef.current)
  }, [cardRef])

  return (
    <Card ref={cardRef}>
      {
        show && <>
          <Link href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={`Imagen ${id}`}/>
            </ImgWrapper>
          </Link>
          <Button>
          <MdFavoriteBorder size="32px"/> {likes} Likes!
          </Button>
        </>
      }
    </Card>
  )
}