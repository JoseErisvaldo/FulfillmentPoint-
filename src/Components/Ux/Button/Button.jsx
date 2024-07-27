import React from 'react'

export default function Button({ title, onClick, type, icon, bg, color }) {
  return (
    <div
      onClick={onClick}
      type={type}
      className={`flex items-center gap-2 bg-${bg}-600 hover:bg-${bg}-500 text-${color} font-bold py-2 px-4 rounded mt-4 cursor-pointer`}
    >
      <span className="text-white text-2xl">{icon}</span>
      <span>{title}</span>
    </div>
  )
}
