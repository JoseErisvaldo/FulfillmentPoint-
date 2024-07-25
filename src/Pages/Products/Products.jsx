import AddProducts from '../../Components/CompoProducts/AddProducts'
import TableProducts from '../../Components/CompoProducts/TableProducts'
import HeaderNavigate from '../../Components/Ux/HeaderNavigate/HeaderNavigate'
import TitlePages from '../../Components/Ux/TitlePages/TitlePages'

export default function Products() {
  return (
    <div className=" ">
      <div>
        <div className="flex gap-2">
          <HeaderNavigate title={'Produtos'} />
        </div>
      </div>
      <TitlePages
        title={'Produtos'}
        message={'Gerencie seus produtos e visualize seus detalhes.'}
      />
      <AddProducts />
      <TableProducts />
    </div>
  )
}
