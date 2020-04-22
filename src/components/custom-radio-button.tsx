import React from "react"
import { SerializedStyles } from "@emotion/core"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { RadioButton } from "./form-elements/radio-button"
import { useTheme } from "emotion-theming"
import { Theme } from "../utils/tailwind-types"
type CustomRadioButtonProps = {
  name: string
  id: string
  css?: SerializedStyles
}

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = props => {
  const theme = useTheme<Theme>()
  return (
    <RadioButton
      {...props}
      css={css`
        ${tw`w-6 h-6 text-indigo-500 bg-gray-900 border-none focus:bg-gray-700`}
        &:focus {
          box-shadow: 0 0 0 3px ${`${theme.colors.gray["400"]}50`};
        }
      `}
    />
  )
}
