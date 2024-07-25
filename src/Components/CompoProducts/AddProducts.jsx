import { useState } from 'react'
import Button from '../Ux/Button/Button'
import Modal from '../Ux/Modal/Modal'

export default function AddProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="p-4">
      <div className="flex justify-end">
        <Button onClick={handleOpenModal} title={'Adicionar Produto'} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Adicionar Produto"
      >
        <p>Este é o conteúdo do modal.</p>
      </Modal>
    </div>
  )
}
