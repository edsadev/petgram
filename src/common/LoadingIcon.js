import styled, {keyframes} from 'styled-components'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const loop = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg{
    animation: ${loop} 1s linear infinite;
  }
`

export default function LoadingIcon({size}){
  return (
    <Loading>
      <AiOutlineLoading3Quarters size={size}/>
    </Loading>
  )
}