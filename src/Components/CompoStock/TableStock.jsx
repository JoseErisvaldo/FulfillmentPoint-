import { Link } from 'react-router-dom'

export default function TableStock() {
  const fakeProducts = [
    {
      sku: 1,
      url: 'https://placehold.co/600x400',
      name: 'Produto 1',
      created: '2023-07-24',
      price: 10.0,
      quantity: 10,
      warehouse: 'CD1'
    },
    {
      sku: 2,
      url: 'https://placehold.co/600x400',
      name: 'Produto 2',
      created: '2023-07-25',
      price: 20.0,
      quantity: 10,
      warehouse: 'CD2'
    },
    {
      sku: 3,
      url: 'https://placehold.co/600x400',
      name: 'Produto 3',
      created: '2023-07-26',
      price: 30.0,
      quantity: 10,
      warehouse: 'CD3'
    }
  ]

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 sm:max-w-md sm:m-auto sm:w-full sm:table-fixed">
        <thead>
          <tr className="bg-slate-600 text-white">
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Criado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              CD
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Preço
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fakeProducts.map(product => (
            <tr key={product.sku}>
              <td className="px-6 py-4 whitespace-nowrap">{product.sku}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.created}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.warehouse}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link
                  className="text-indigo-600 hover:text-indigo-900 mr-2"
                  to={`detalhesestoque/${product.sku}`}
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
