import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import {useCategoriesData} from '@hooks/useCategoriesData'
import LoadingIcon from '@common/LoadingIcon'

export const List = styled.ul`
display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
  position: sticky;
  top: 0;
  background-color: #fefefe;
  z-index: 10;
  padding: 10px;
`

export const Item = styled.li`
  padding: 0 8px;
`

function ListOfCategories() {
  const {categories, loading} = useCategoriesData()

  return (
    <List>
      {
        loading 
          ? <LoadingIcon size={32}/>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}

export default React.memo(ListOfCategories)