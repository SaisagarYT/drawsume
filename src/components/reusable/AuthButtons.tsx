type Props = {
  width?: string
  color?: string
  title: string
  bg?: string
  size?: string
}

export const AuthButtons = ({ width = 'full', color = 'black', title, bg = 'transparent', size = 'base' }: Props) => {
  return (
    <div className={`w-${width} h-14 text-${color} bg-${bg} text-${size} flex items-center justify-center`}>
      <p>{title}</p>
    </div>
  )
}
