"use client"

import { Provider } from "react-redux"

import type { TLayoutProps } from "@/lib/@types/root.types"
import { reduxStore } from "@/lib/store/store"


export function ReduxProvider({ children }: TLayoutProps) {
  return (
    <Provider store={reduxStore}>
      {children}
    </Provider>
  )
}
