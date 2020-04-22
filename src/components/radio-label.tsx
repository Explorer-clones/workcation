import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css, SerializedStyles } from "@emotion/core"
type RadioLabelProps = {
  children: ReactNode
  css?: SerializedStyles
}

export const RadioLabel: React.FC<RadioLabelProps> = ({
  children,
  ...props
}) => {
  return (
    <span
      css={css`
        ${tw`ml-2 text-white`}
      `}
      {...props}
    >
      {children}
    </span>
  )
}
