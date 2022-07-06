import { useState } from "react"

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      console.log(key)
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (e) {
      console.log(e)
    }
  }

  return [storedValue, setLocalStorage]
}