import CompoStockDetails from '../../Components/CompoStockDetails/CompoStockDetails'
import HeaderNavigate from '../../Components/Ux/HeaderNavigate/HeaderNavigate'
import TitlePages from '../../Components/Ux/TitlePages/TitlePages'

export default function StockDetails() {
  return (
    <div className=" ">
      <div>
        <div className="flex gap-2">
          <HeaderNavigate title={'Estoque'} />
          <HeaderNavigate title={'Detalhes'} />
        </div>
      </div>
      <TitlePages
        title={'Detalhes'}
        message={'Gerencie seu estoque e visualize os detalhes.'}
      />
      <CompoStockDetails />
    </div>
  )
}
