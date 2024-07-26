export default function TableSchedules() {
  const fakeSchedules = [
    {
      id: 1,
      criado: '2023-07-24',
      preço: 10.0,
      cd: 'CD1'
    },
    {
      id: 2,
      criado: '2023-07-25',
      preço: 20.0,
      cd: 'CD2'
    },
    {
      id: 3,
      criado: '2023-07-26',
      preço: 30.0,
      cd: 'CD3'
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
          {fakeSchedules.map(product => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.criado}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.cd}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.preço.toFixed(2)}
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
