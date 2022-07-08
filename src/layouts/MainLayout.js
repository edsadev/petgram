import Logo from "@components/Logo"
import BottomNav from "@components/BottomNav"

export default function MainLayout({children}) {
  return (
    <>
      <Logo />
      {children}
      <BottomNav />
    </>
  )
}