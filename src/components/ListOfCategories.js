import React from 'react'
import Category from './Category'
import styled from 'styled-components'

export const List = styled.ul`
display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`

export default function ListOfCategories() {
  return (
    <List>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(category => <Item key={category}><Category /></Item>)
      }
    </List>
  )
}