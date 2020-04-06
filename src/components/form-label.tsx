import React, { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/core"
import tw from "tailwind.macro"
type FormLabelProps = {
  children: ReactNode
  css?: SerializedStyles
  legend?: boolean
}

export const FormLabel: React.FC<FormLabelProps> = ({
  children,
  legend,
  ...props
}) => {
  const renderElement = () =>
    legend ? (
      <legend
        css={css`
          ${tw`block text-sm font-semibold text-gray-500`}
        `}
        {...props}
      >
        {children}
      </legend>
    ) : (
      <span
        css={css`
          ${tw`block text-sm font-semibold text-gray-500`}
        `}
        {...props}
      >
        {children}
      </span>
    )

  return renderElement()
}
