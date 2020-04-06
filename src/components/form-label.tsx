import React, { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/core"
import tw from "tailwind.macro"
type FormLabelProps = {
  children: ReactNode
  css?: SerializedStyles
}

export const FormLabel: React.FC<FormLabelProps> = ({ children, ...props }) => {
  return (
    <span
      css={css`
        ${tw`block text-sm font-semibold text-gray-500`}
      `}
      {...props}
    >
      {children}
    </span>
  )
}
