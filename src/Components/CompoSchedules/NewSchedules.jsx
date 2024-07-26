import { useState } from 'react'
import Button from '../Ux/Button/Button'
import Modal from '../Ux/Modal/Modal'
import { IoMdAdd } from 'react-icons/io'

export default function NewSchedules() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Agenda criou com sucesso!')
    handleCloseModal()
  }

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <Button
          icon={<IoMdAdd />}
          onClick={handleOpenModal}
          title={'Adicionar Produto'}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={'Criar nova agenda'}
      >
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label className="font-bold">Escolha o CD</label>
              <select className="p-2 border">
                <option>Selecionar o CD</option>
                <option>CD1</option>
                <option>CD2</option>
                <option>CD3</option>
              </select>
            </div>
          </div>
          <div className="flex ">
            <Button onClick={handleSubmit} title={'Criar agenda'} />
          </div>
        </form>
      </Modal>
    </div>
  )
}
