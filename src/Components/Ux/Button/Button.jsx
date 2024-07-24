import React from 'react'

export default function Button({ title }) {
  return (
    <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
      {title}
    </div>
  )
}
