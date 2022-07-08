import {useRef} from 'react';
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-flow: column;
  height: calc(100vh - 144px);
  justify-content: center;
  margin-inline: 24px;
`

const Form = styled.form`
  padding: 16px 0;
  margin: 0 24px;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

const Button = styled.button`
  background: rgb(253,0,2);
  background: linear-gradient(28deg, rgba(253,0,2,1) 0%, rgba(159,0,129,1) 100%);
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 12px 24px;
`

export default function UserForm({login, title}){
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    login()
  }
  return (
    <Div>
      <Title>{title}</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" name="Email" />
        <Input type="password" name="Password" />
        <Button type="submit" value="Submit">{title}</Button>
      </Form>
    </Div>
  )
}