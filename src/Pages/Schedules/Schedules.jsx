import React from 'react'
import TitlePages from '../../Components/Ux/TitlePages/TitlePages'
import HeaderNavigate from '../../Components/Ux/HeaderNavigate/HeaderNavigate'
import TableSchedules from '../../Components/CompoSchedules/TableSchedules'
import NewSchedules from '../../Components/CompoSchedules/NewSchedules'

export default function Schedules() {
  return (
    <div className=" ">
      <div>
        <div className="flex gap-2">
          <HeaderNavigate title={'Agendas'} />
        </div>
      </div>
      <TitlePages
        title={'Agendas'}
        message={'Gerencie seus agendamentos, crie e visualize seus detalhes.'}
      />
      <NewSchedules />
      <TableSchedules />
    </div>
  )
}
