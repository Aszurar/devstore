import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  title: string
}

export function Button({ title, ...rest }: Readonly<ButtonProps>) {
  return (
    <button
      className="bg-emerald-600 text-center py-2.5 px-5 rounded-full text-white font-semibold hover:bg-emerald-600/90 active:bg-emerald-600 transition-colors duration-300"
      {...rest}
    >
      {title}
    </button>
  )
}
