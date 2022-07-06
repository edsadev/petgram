import React from 'react'
import styled, {keyframes} from 'styled-components'
import Category from './Category'
import {useCategoriesData} from '@hooks/useCategoriesData'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

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

const loop = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  & svg{
    animation: ${loop} 1s linear infinite;
  }
`

export default function ListOfCategories() {
  const {categories, loading} = useCategoriesData()

  return (
    <List>
      {
        loading 
          ? <LoadingScreen><AiOutlineLoading3Quarters size={'32px'}/></LoadingScreen> 
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}