import React from 'react'
import ListOfCategories from '@components/ListCat'
import ListOfPhotoCards from '@components/ListPhoto'

function Homepage({id}) {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id}/>
    </>
  )
}

export default React.memo(Homepage, (prevProps, nextProps) => prevProps.id === nextProps.id)