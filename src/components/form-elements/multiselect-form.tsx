import React, { ReactNode } from "react"
import { SerializedStyles } from "@emotion/core"
import { useBasicFormStyling } from "../../hooks/useFormStyles"
import { css } from "@emotion/core"
type MultiSelectFormProps = {
  css?: SerializedStyles
  name: string
  id: string
  children: ReactNode
}

export const MultiSelectForm: React.FC<MultiSelectFormProps> = ({
  id,
  name,
  children,
  ...props
}) => {
  return (
    <select
      name={name}
      id={id}
      css={css`
        ${useBasicFormStyling()}
      `}
      multiple
      {...props}
    >
      {children}
    </select>
  )
}
