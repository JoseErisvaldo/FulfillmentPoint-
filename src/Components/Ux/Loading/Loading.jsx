import React from 'react'
import { IoReload } from 'react-icons/io5'
import './style.css'

export default function Loading({ color }) {
  return (
    <div className={` is-loading rounded-md text-${color}`}>
      <IoReload />
    </div>
  )
}
