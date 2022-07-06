import { useEffect, useState } from "react"

export function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-edmundo0994.vercel.app/categories')
      .then(res => res.json())
      .then(json => {
        setCategories(json)
        setLoading(false)
      })
    }, [])

  return { categories, loading }
}
