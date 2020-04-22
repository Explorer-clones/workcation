import React from "react"
import { SerializedStyles } from "@emotion/core"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { useTheme } from "emotion-theming"
import { Theme } from "../utils/tailwind-types"
import { Checkbox } from "./form-elements/checkbox"
type CustomCheckboxProps = {
  name: string
  id: string
  css?: SerializedStyles
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = props => {
  const theme = useTheme<Theme>()
  return (
    <Checkbox
      {...props}
      css={css`
        ${tw`w-6 h-6 text-indigo-500 bg-gray-900 border-none rounded-lg focus:bg-gray-700`}
        &:focus {
          box-shadow: 0 0 0 3px ${`${theme.colors.gray["400"]}50`};
        }
      `}
    />
  )
}
