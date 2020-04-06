import React, { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/core"
import tw from "tailwind.macro"

type LegendProps = {
  children: ReactNode
  css?: SerializedStyles
}

export const Legend: React.FC<LegendProps> = ({ children, ...props }) => {
  return (
    <legend
      css={css`
        ${tw`block text-sm font-semibold text-gray-500`}
      `}
      {...props}
    >
      {children}
    </legend>
  )
}
