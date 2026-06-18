import { ReactElement } from "react"

export const OutputComponentName = ({children} : {children: string}) => {
  return (
    <><p>{children}</p></>
  )
}