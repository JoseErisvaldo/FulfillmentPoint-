import React from 'react'
import './style.css'
export default function Message({ children, statusEvent }) {
  let textColor
  let bgColor

  switch (statusEvent) {
    case 'error':
      textColor = 'white'
      bgColor = 'bg-red-600'
      break
    case 'success':
      textColor = 'white'
      bgColor = 'bg-green-600'
      break
    case 'alert':
      textColor = 'white'
      bgColor = 'bg-yellow-600'
      break
    default:
      textColor = 'black'
      bgColor = 'bg-gray-200' // Definindo um fundo padrão
      break
  }

  return (
    <div
      className={` is-active absolute top-20 rounded-md text-${textColor} p-3 ${bgColor}`}
    >
      {children}
    </div>
  )
}
