import React from "react"
import { SerializedStyles } from "@emotion/core"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import {
  usePlaceholderFormDefaults,
  useBasicFormStyling,
} from "../../hooks/useFormStyles"
type TextareaFormProps = {
  css?: SerializedStyles
  placeholder?: string
}

export const TextareaForm: React.FC<TextareaFormProps> = ({
  placeholder = "Enter some long form content.",
  ...props
}) => {
  return (
    <textarea
      css={css`
        ${useBasicFormStyling()}
        ${usePlaceholderFormDefaults()}
        &::placeholder {
          ${tw`text-sm`}
        }
      `}
      placeholder={placeholder}
      {...props}
    ></textarea>
  )
}
