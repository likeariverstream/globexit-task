import { useEffect, useState } from 'react'
import { Input } from '../components/input/index.jsx'
import { List } from '../components/list/index.jsx'
import { MainLayout } from '../layouts/main-layout/index.jsx'
import { UserInfo } from '../components/user-info/index.jsx'
import { Modal } from '../components/modal/modal.jsx'

const App = () => {
  const [value, setValue] = useState('')
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [card, setCard] = useState({})
  const handleInputChange = (value) => {
    setValue(value)
  }

  const handleCardClick = (card) => {
    setCard(card)
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
    setCard({})
  }
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3000?term=${value}`
      const data = await fetch(url)
      return data.json()
    }
    fetchData().then((res) => setData(res))
  }, [value])
  return (
    <>
      <MainLayout>
        <Input value={value} onChange={handleInputChange} />
        <List data={data} handleClick={handleCardClick} />
      </MainLayout>
      {isOpen && (
        <Modal onClose={closeModal}>
          <UserInfo card={card} />
        </Modal>
      )}
    </>
  )
}

export { App }
