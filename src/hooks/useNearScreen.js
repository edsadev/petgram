import { useRef, useState, useEffect } from "react"

export default function useNearScreen(){
  const cardRef = useRef(null)
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if(isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(cardRef.current)
  }, [cardRef])

  return {
    cardRef,
    show,
  }
} 
