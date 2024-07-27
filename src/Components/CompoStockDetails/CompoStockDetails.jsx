import { Link, useParams } from 'react-router-dom'
import Input from '../Ux/Input/Input'
import Button from '../Ux/Button/Button'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'

export default function CompoStockDetails() {
  const fakeProducts = [
    {
      sku: 1,
      url: 'https://placehold.co/600x400',
      name: 'Smartphone XYZ',
      description:
        'Um smartphone com tela de 6.5 polegadas, câmera tripla e bateria de longa duração.',
      created: '2023-07-24',
      price: 10.0,
      height: '15cm',
      width: '7cm',
      length: '0.8cm',
      weight: '180g',
      color: 'Preto',
      volume: '0.084L',
      warehouse: [
        {
          name: 'CD1',
          quantity: 10,
          status: 'Saudável',
          reservado: 1,
          recebimento: 10,
          blocked: false
        },
        {
          name: 'CD2',
          quantity: 5,
          status: 'Saudável',
          reservado: 1,
          recebimento: 10,
          blocked: true
        }
      ]
    },
    {
      sku: 2,
      url: 'https://placehold.co/600x400',
      name: 'Laptop ABC',
      description: 'Laptop com processador Intel i7, 16GB RAM e 512GB SSD.',
      created: '2023-07-24',
      price: 20.0,
      height: '2cm',
      width: '35cm',
      length: '24cm',
      weight: '1.5kg',
      color: 'Cinza',
      volume: '1.68L',
      warehouse: [
        {
          name: 'CD1',
          quantity: 10,
          status: 'Saudável',
          reservado: 1,
          recebimento: 10,
          blocked: false
        },
        {
          name: 'CD2',
          quantity: 5,
          status: 'Bloqueado',
          reservado: 1,
          recebimento: 10,
          blocked: true
        }
      ]
    },
    {
      sku: 3,
      url: 'https://placehold.co/600x400',
      name: 'Tablet DEF',
      description:
        'Tablet com tela de 10 polegadas, 64GB de armazenamento e suporte para caneta stylus.',
      created: '2023-07-24',
      price: 15.0,
      height: '0.7cm',
      width: '25cm',
      length: '16cm',
      weight: '500g',
      color: 'Branco',
      volume: '0.28L',
      warehouse: [
        {
          name: 'CD1',
          quantity: 20,
          status: 'Saudável',
          reservado: 2,
          recebimento: 20,
          blocked: false
        },
        {
          name: 'CD3',
          quantity: 8,
          status: 'Saudável',
          reservado: 1,
          recebimento: 10,
          blocked: false
        }
      ]
    }
  ]

  console.log(fakeProducts)

  const { sku } = useParams()

  const product = fakeProducts.find(p => p.sku === parseInt(sku, 10))

  return (
    <div className="p-4 overflow-x-auto">
      <div className="flex justify-end">
        <Button title={'Salvar'} bg={'blue'} color={'white'} />
      </div>
      {product && (
        <div className="relative w-full overflow-auto">
          <h1 className="font-bold text-1xl">
            Detalhes do Produto: {product.name}
          </h1>
          <div className="flex  gap-4">
            <div>
              <img className="w-96" src={product.url} alt={product.name} />
              <Button
                icon={<MdOutlineAddPhotoAlternate />}
                title="Alterar foto"
                bg={'blue'}
                color={'white'}
              />
            </div>
            <div className="w-full flex gap-4">
              <div className="w-96">
                <label className="block">
                  Nome:
                  <Input
                    type="text"
                    placeholder="name"
                    value={product.name}
                    className="mt-1 block w-full rounded-md border p-1"
                  />
                </label>
                <label className="">
                  Preço:
                  <Input
                    type="number"
                    placeholder="price"
                    value={product.price}
                    className="mt-1 block w-full rounded-md border p-1"
                  />
                </label>
                <label className="">
                  Descrição:
                  <textarea
                    className="mt-1 h-32 block w-full rounded-md border p-1"
                    placeholder="description"
                    value={product.description}
                  />
                </label>
              </div>
              <div className="flex gap-2">
                <div>
                  <label className="">
                    Altura:
                    <Input
                      type="text"
                      placeholder="height"
                      value={product.height}
                      className="mt-1 block w-full rounded-md border p-1"
                    />
                  </label>
                  <label className="">
                    Largura:
                    <Input
                      type="text"
                      placeholder="width"
                      value={product.width}
                      className="mt-1 block w-full rounded-md border p-1"
                    />
                  </label>
                  <label className="">
                    Comprimento:
                    <Input
                      type="text"
                      placeholder="length"
                      value={product.length}
                      className="mt-1 block w-full rounded-md border p-1"
                    />
                  </label>
                </div>
                <div>
                  <label className="">
                    Peso:
                    <Input
                      type="text"
                      placeholder="weight"
                      value={product.weight}
                      className="mt-1 block w-full rounded-md border p-1"
                    />
                  </label>
                  <label className="">
                    Cor:
                    <Input
                      type="text"
                      placeholder="color"
                      value={product.color}
                      className="mt-1 block w-full rounded-md border p-1"
                    />
                  </label>
                  <label className="">
                    Volume:
                    <Input
                      type="text"
                      placeholder="volume"
                      value={product.volume}
                      className="mt-1 block w-full rounded-md border p-1"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">
                  CD
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Estoque
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Quantidade
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Reservado
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Recebimento
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              {product.warehouse.map((wh, index) => (
                <tr
                  key={index}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">
                    {wh.name}
                  </td>

                  <td className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    {wh.status}
                  </td>
                  <td className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    {wh.quantity}
                  </td>
                  <td className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    {wh.reservado}
                  </td>
                  <td className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    {wh.recebimento}
                  </td>
                  <td className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    <Link to={``} className="text-blue-600 hover:underline">
                      Ação
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
