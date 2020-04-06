import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import {
  usePlaceholderFormDefaults,
  useBasicFormStyling,
} from "../../hooks/useFormStyles"

type InputProps = {
  css?: SerializedStyles
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  placeholder = "Your name",
  ...props
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      css={css`
        ${useBasicFormStyling()}
        ${usePlaceholderFormDefaults()}
      `}
      {...props}
    />
  )
}
