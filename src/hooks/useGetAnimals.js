import { gql, useQuery } from "@apollo/client";

const ANIMAL_QUERY = gql`  
query getPhotos($categoryId: ID) {
  photos (categoryId: $categoryId) {
  id
  categoryId
  src
  likes
  userId
  liked
  }
}`

export default function useGetAnimals(categoryId) {
  const { loading, error, data } = useQuery(ANIMAL_QUERY, {
  variables: {
    categoryId
  },
  fetchPolicy: "cache-and-network"
  });

  return {
    dataGetAnimals: data,
    loadingGetAnimals: loading,
    errorGetAnimals: error
  }
}
