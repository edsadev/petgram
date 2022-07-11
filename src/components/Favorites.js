import styled from 'styled-components'
import Link from 'next/link'
import useGetFavorites from '@hooks/useGetFavorites'
import LoadingIcon from '@common/LoadingIcon'
import PhotoCard from './PhotoCard'
import { useEffect } from 'react'
import { useRouter } from "next/router"
import { useAuth } from "@hooks/useAuth"

const LinkTo = styled(Link)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after{
    content:'';
    display: block;
    padding-bottom: 100%;
  }
`

const Div = styled.div`
  padding-top: 32px;
`

export default function Favotires(){
  const { dataFavs, loadingFavs, errorFavs, refetch } = useGetFavorites()
  const { isAuth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth){
      router.push("/login")
    }
  }, [isAuth, router])
  
  useEffect(() => {refetch()}, [refetch])

  if (loadingFavs) return <LoadingIcon />
  if (errorFavs) return <div>Error</div>

  return (
    <Div>
      {dataFavs?.favs?.length <= 0 && <p>No tienes favoritos</p>}
      {dataFavs?.favs?.map(fav => (
        <LinkTo key={fav.id} href={`/detail/${fav.id}`} >
          <PhotoCard id={fav.id} likes={fav.likes} src={fav.src}/>
        </LinkTo>
      ))}
    </Div>
  )
}