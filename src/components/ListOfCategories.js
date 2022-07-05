import React, {useState, useEffect} from 'react'
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
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://petgram-server-edmundo0994.vercel.app/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}