import { gql, useQuery } from '@apollo/client'

const GET_FAVORITES = gql`
  query getFavs {
      favs {
        id
        categoryId
        src
        likes
        userId
      }
    }
`;

export default function useGetFavorites() {
  const { data, loading, error, refetch } = useQuery(GET_FAVORITES, {fetchPolicy: "network-only"});
  return {
    dataFavs: data,
    loadingFavs: loading,
    errorFavs: error,
    refetch
  }
}