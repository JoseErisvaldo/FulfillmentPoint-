import React from 'react'

export default function Input({ type, name, value, onChange, placeholder }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border p-1 "
      required
    />
  )
}
