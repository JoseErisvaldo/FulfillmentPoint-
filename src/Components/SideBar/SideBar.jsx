import { IoMenu } from 'react-icons/io5'
import { CiHome } from 'react-icons/ci'
import { AiOutlineProduct } from 'react-icons/ai'
import { CgClipboard } from 'react-icons/cg'
import { FaNetworkWired } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'

import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
export default function SideBar() {
  const [sideBar, setSideBar] = useState(false)
  function handleSideBar() {
    if (sideBar) {
      setSideBar(false)
    } else {
      setSideBar(true)
    }
  }
  return (
    <div className={`w-full  ${sideBar ? 'sm:w-14' : 'sm:w-56'} `}>
      <div
        onClick={handleSideBar}
        className="flex justify-end text-3xl cursor-pointer text-white p-3 bg-slate-600"
      >
        {sideBar ? <IoMenu /> : <IoIosClose />}
      </div>
      <div
        className={` ${
          sideBar != false && 'hidden'
        }  h-screen flex flex-col justify-between p-3 bg-slate-600 text-white`}
      >
        <ul>
          <li className=" flex gap-1 items-center p-2 cursor-pointer hover:text-slate-900 hover:border-b">
            <span>
              <CiHome />
            </span>
            <Link to={'/'}>
              <span>Home</span>
            </Link>
          </li>
          <li className="flex gap-1 items-center p-2 cursor-pointer hover:text-slate-900 hover:border-b">
            <span>
              <AiOutlineProduct />
            </span>
            <Link to={'/produtos'}>
              <span>Produtos</span>
            </Link>
          </li>
          <li className="flex gap-1 items-center p-2 cursor-pointer hover:text-slate-900 hover:border-b">
            <span>
              <AiOutlineProduct />
            </span>
            <span>Estoque</span>
          </li>
          <li className="flex gap-1 items-center p-2 cursor-pointer hover:text-slate-900 hover:border-b">
            <span>
              <CgClipboard />
            </span>
            <span>Pedidos</span>
          </li>
          <li className="flex gap-1 items-center p-2 cursor-pointer hover:text-slate-900 hover:border-b">
            <span>
              <FaNetworkWired />
            </span>
            <span>Minha Empresa</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
