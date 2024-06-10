import type { HTMLAttributes } from "react"


type TBadgeProps = HTMLAttributes<HTMLDivElement>


export function Badge(props: TBadgeProps) {
  return (
    <div
      {...props}
      className={`
        inline-block rounded-lg bg-slate-200 px-3 py-1 text-sm dark:bg-gray-700
        ${props.className}
      `}
    />
  )
}
