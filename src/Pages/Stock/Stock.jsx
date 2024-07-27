import TableStock from '../../Components/CompoStock/TableStock'
import HeaderNavigate from '../../Components/Ux/HeaderNavigate/HeaderNavigate'
import TitlePages from '../../Components/Ux/TitlePages/TitlePages'

export default function Stock() {
  return (
    <div className=" ">
      <div>
        <div className="flex gap-2">
          <HeaderNavigate title={'Estoque'} />
        </div>
      </div>
      <TitlePages
        title={'Estoque'}
        message={'Gerencie seu estoque e visualize os detalhes.'}
      />
      <TableStock />
    </div>
  )
}
