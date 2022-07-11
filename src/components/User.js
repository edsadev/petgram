import styled from "styled-components"
import { useAuth } from "@hooks/useAuth"

const Div = styled.div`
  width: 100%;
  height: calc(100vh - 300px);;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
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
  cursor: pointer;
`


export default function User() {
  const { logOut } = useAuth()
  return (
    <Div>
      <h1>User</h1>
      <Button onClick={() => logOut()}>Log out</Button>
    </Div>
  )
}
