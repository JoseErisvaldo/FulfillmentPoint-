export default function TableProducts() {
  const fakeProducts = [
    {
      id: 1,
      imagem: 'https://via.placeholder.com/40',
      criado: '2023-07-24',
      nome: 'Produto 1',
      preço: 10.0,
      categoria: 'Categoria 1',
      descrição: 'Descrição do produto 1'
    },
    {
      id: 2,
      imagem: 'https://via.placeholder.com/40',
      criado: '2023-07-25',
      nome: 'Produto 2',
      preço: 20.0,
      categoria: 'Categoria 2',
      descrição: 'Descrição do produto 2'
    },
    {
      id: 3,
      imagem: 'https://via.placeholder.com/40',
      criado: '2023-07-26',
      nome: 'Produto 3',
      preço: 30.0,
      categoria: 'Categoria 3',
      descrição: 'Descrição do produto 3'
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
              Imagem
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Criado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Preço
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Categoria
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Descrição
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fakeProducts.map(product => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={product.imagem}
                  alt={`Produto ${product.id}`}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.criado}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.nome}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.preço.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.categoria}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.descrição}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
