import { useState } from 'react'
import Button from '../Ux/Button/Button'
import Modal from '../Ux/Modal/Modal'
import { IoMdAdd } from 'react-icons/io'
import Loading from '../Ux/Loading/Loading'
import Message from '../Ux/Message/Message'

export default function NewSchedules() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setMessage(true)
      handleCloseModal()
      setIsLoading(false)
      setTimeout(() => {
        setMessage(false)
      }, 2000)
    }, 3000)
  }

  return (
    <div className="p-4">
      {message && (
        <Message
          statusEvent="success"
          children={'Agenda criada com sucesso!'}
        />
      )}
      <div className="flex justify-end">
        <Button
          icon={<IoMdAdd />}
          onClick={handleOpenModal}
          title={'Novo agendamento'}
          bg={'blue'}
          color={'white'}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={'Criar nova agenda'}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Escolha o CD</label>
            <select className="p-2 border">
              <option>Selecionar o CD</option>
              <option>CD1</option>
              <option>CD2</option>
              <option>CD3</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Button
              disabled={isLoading}
              icon={isLoading ? <Loading bg={'blue'} color={'white'} /> : null}
              title={'Criar agenda'}
              bg={'blue'}
              color={'white'}
              type="submit"
            />
          </div>
        </form>
      </Modal>
    </div>
  )
}
