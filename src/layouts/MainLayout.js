import Logo from "@components/Logo"
import BottomNav from "@components/BottomNav"
import styled from "styled-components"

const Div = styled.div`
  padding-bottom: 60px;
`

export default function MainLayout({children}) {
  return (
    <Div>
      <Logo />
      {children}
      <BottomNav />
    </Div>
  )
}