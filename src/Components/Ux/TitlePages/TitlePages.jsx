import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function TitlePages({ title, message }) {
  return (
    <div>
      <div className="text-3xl m-3 font-bold">{title}</div>
      <div>{message}</div>
    </div>
  )
}
