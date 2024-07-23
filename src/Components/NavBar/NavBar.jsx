import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { CiLogin } from 'react-icons/ci'
import Logo from '../Logo/Logo'

export default function NavBar() {
  return (
    <div className="flex justify-between text-white bg-slate-600 p-4 ">
      <Logo />
      <div>
        <ul className="text-2xl cursor-pointer flex gap-3">
          <li>
            <IoIosNotificationsOutline />
          </li>
          <li>
            <MdOutlineAccountCircle />
          </li>
          <li>
            <CiLogin />
          </li>
        </ul>
      </div>
    </div>
  )
}
