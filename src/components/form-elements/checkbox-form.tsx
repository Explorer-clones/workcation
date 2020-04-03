import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import svgToMiniDataURI from "mini-svg-data-uri"
import tw from "tailwind.macro"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/tailwind-types"
type CheckboxFormProps = {
  css?: SerializedStyles
}

export const CheckboxForm: React.FC<CheckboxFormProps> = props => {
  const theme = useTheme<Theme>()
  type SvgToDataURI = (value: string) => string

  const applyColorsToCheckSVGIcon = (
    color: string,
    svgToMiniDataURI: SvgToDataURI
  ): string =>
    `"${svgToMiniDataURI(
      `<svg viewBox='0 0 16 16' fill='${color}' xmlns='http://www.w3.org/2000/svg'><path d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/></svg>`
    )}"`

  return (
    <input
      type="checkbox"
      css={css`
        ${tw`inline-block text-blue-500 align-middle bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline `}
        color-adjust: exact;
        background-origin: border-box;
        user-select: none;
        flex-shrink: 0;
        height: 1em;
        width: 1em;

        &:checked {
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(${applyColorsToCheckSVGIcon(
            theme.colors.white,
            svgToMiniDataURI
          )});
        }

        &::-ms-check {
          @media not print: {
            color: transparent;
            background: inherit;
            border-color: inherit;
            border-radius: inherit;
          }
        }
      `}
      {...props}
    />
  )
}
