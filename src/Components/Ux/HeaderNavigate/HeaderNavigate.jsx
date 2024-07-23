import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function HeaderNavigate({ title }) {
  return (
    <div className="flex items-center gap-2">
      <FaArrowRight />
      {title}
    </div>
  )
}
