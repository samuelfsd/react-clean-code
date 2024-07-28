import { ReactNode } from 'react'

interface InputProps {
  label?: string
  icon?: ReactNode
  leftIcon: ReactNode
  errorMessage?: string
}

export function Input({
  label,
  icon = null,
  leftIcon = null,
  errorMessage,
}: InputProps) {
  return (
    <div>
      {label ? <label>{label} </label> : null}
      {leftIcon || null}
      <input type="text" />

      {icon || null}

      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  )
}
