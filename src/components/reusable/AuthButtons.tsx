import React from 'react'

type Props = {
  width?: string
  height?: string
  color?: string
  title: string
  bg?: string
  size?: string
}

export const AuthButtons: React.FC<Props> = ({ width = 'full', height = '14', color = 'black', title, bg = 'transparent', size = 'base' }) => {
  return (
    <div className={`w-${width} h-14 text-${color} bg-${bg} text-${size} flex items-center justify-center`}>
      <p>{title}</p>
    </div>
  )
}
