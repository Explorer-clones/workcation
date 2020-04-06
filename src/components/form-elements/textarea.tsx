import React from "react"
import { SerializedStyles } from "@emotion/core"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import {
  usePlaceholderFormDefaults,
  useBasicFormStyling,
} from "../../hooks/useFormStyles"
type TextareaProps = {
  css?: SerializedStyles
  placeholder?: string
}

export const Textarea: React.FC<TextareaProps> = ({
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
