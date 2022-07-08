import PhotoCard from '@components/PhotoCard'
import { gql, useQuery } from "@apollo/client";
import LoadingScreen from '@common/LoadingScreen'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  .left-arrow {
    box-sizing: content-box;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 10px;
    margin-inline: 12px;
    cursor: pointer;
  }
`


export default function PhotoCardWithQuery({id}) {
  const router = useRouter()

  const GET_ANIMAL = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }`

  const { loading, error, data } = useQuery(GET_ANIMAL, {variables: {id}});

  if (error) {
    console.log(error);
    return <div>Error!</div>
  }

  return (
    <Div>
      <AiOutlineArrowLeft className="left-arrow" size={24} onClick={() => router.back()} />
      <ul>
        {loading
        ? <LoadingScreen />
        : <PhotoCard {...data.photo} extraClass="noPointer"/>}
      </ul>
    </Div>
  )
}