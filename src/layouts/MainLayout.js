import Logo from "@components/Logo"

export default function MainLayout({children}) {
  return (
    <>
      <Logo />
      {children}
    </>
  )
}