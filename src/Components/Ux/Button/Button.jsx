import React from 'react'

export default function Button({ title, onClick, type, icon, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer`}
    >
      <span className="text-white text-2xl">{icon}</span>
      <span>{title}</span>
    </button>
  )
}
