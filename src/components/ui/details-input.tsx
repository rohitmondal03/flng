import { type InputHTMLAttributes, type ReactNode } from 'react'

import { Label } from './label'
import { Input } from './input'


type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode | string;
}


export function DetailsInput(props: TProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={props.id}>
        {props.label}
      </Label>
      <Input
        id={props.id}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  )
}
