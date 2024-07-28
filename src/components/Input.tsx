import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return <div>{children}</div>
}

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {}
export function FormField(props: FormFieldProps) {
  return <input {...props} />
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export function Label(props: LabelProps) {
  return <label {...props} />
}

interface ErroMessageProps {
  message: string
}
export function ErrorMessage({ message }: ErroMessageProps) {
  return <span>{message}</span>
}

interface IconProps {
  children: ReactNode
}
export function Icon({ children }: IconProps) {
  return <span>{children}</span>
}
