import { useState } from 'react'
import Button from '../Ux/Button/Button'
import Modal from '../Ux/Modal/Modal'
import { IoMdAdd } from 'react-icons/io'

export default function AddProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [product, setProduct] = useState({
    nome: '',
    preço: '',
    file: null,
    categoria: '',
    descrição: ''
  })

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleChange = e => {
    const { name, value, type, files } = e.target
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: type === 'file' ? files[0] : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Produto adicionado:', product)
    handleCloseModal()
    setProduct({
      nome: '',
      preço: '',
      file: null,
      categoria: '',
      descrição: ''
    })
    document.querySelector('input[name="file"]').value = ''
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
        title="Adicionar Produto"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              name="nome"
              value={product.nome}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border p-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Foto</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border p-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Preço</label>
            <input
              type="number"
              name="preço"
              value={product.preço}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border p-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Categoria</label>
            <select className="mt-1 block w-full rounded-md border p-1">
              <option value="">Selecione uma categoria</option>
              <option value="categoria1">Categoria 1</option>
              <option value="categoria2">Categoria 2</option>
              <option value="categoria3">Categoria 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Descrição</label>
            <textarea
              name="descrição"
              value={product.descrição}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border p-1"
              required
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              icon={<IoMdAdd />}
              type="submit"
              title="Adicionar Produto"
            />
          </div>
        </form>
      </Modal>
    </div>
  )
}
