import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import {
  usePlaceholderFormDefaults,
  useBasicFormStyling,
} from "../../hooks/useFormStyles"

type InputFormProps = {
  css?: SerializedStyles
  placeholder?: string
}

export const InputForm: React.FC<InputFormProps> = ({
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
