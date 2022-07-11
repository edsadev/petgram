import { gql, useMutation } from '@apollo/client'


const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useToggleLikeMutation = () => {
  const [likePhoto, {data, loading, error}] = useMutation(LIKE_PHOTO, {fetchPolicy: 'network-only'})
  return {likePhoto, dataToggleLike: data, loadingToggleLike: loading, errorToggleLike: error}
}