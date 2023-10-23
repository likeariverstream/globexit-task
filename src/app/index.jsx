import { useEffect, useState } from 'react'
import '../index.css'
import { Input } from "../components/input/index.jsx";

const App = () => {
  const [value, setValue] = useState('')

  const handleInputChange = (value) => {
    setValue(value)
  }
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000'
      const data = await fetch(url)
      const json = data.json()
      console.log(json)
      return json
    }
    fetchData().then((res) => console.log(res))
  }, [])
  return (
    <main>
      <Input value={value} onChange={handleInputChange} />
    </main>
  )
}

export { App }
