import React, { ReactNode } from "react"
import { SerializedStyles } from "@emotion/core"
import svgToMiniDataURI from "mini-svg-data-uri"
import { useBasicFormStyling } from "../../hooks/useFormStyles"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import tw from "tailwind.macro"
import { Theme } from "../../utils/tailwind-types"
type SelectProps = {
  css?: SerializedStyles
  name: string
  id: string
  iconColor?: string
  children: ReactNode
}

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  children,
  iconColor,
  ...props
}) => {
  const theme = useTheme<Theme>()

  type SvgToDataURI = (value: string) => string

  const applyColorsToCheveronSVGIcon = (
    color: string,
    svgToMiniDataURI: SvgToDataURI
  ): string =>
    `"${svgToMiniDataURI(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${color}'>
        <path
          className='heroicon-ui'
          d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'
        />
      </svg>`
    )}"`

  console.log(iconColor)

  return (
    <select
      name={name}
      id={id}
      {...props}
      css={css`
        ${useBasicFormStyling()}
        ${tw`pr-10`};
        background-position: ${`right ${theme.spacing[2]} center`};
        background-size: 1.5em 1.5em;
        background-repeat: no-repeat;
        background-image: ${iconColor
          ? `url(${applyColorsToCheveronSVGIcon(iconColor, svgToMiniDataURI)})`
          : `url(${applyColorsToCheveronSVGIcon(
              theme.colors.gray[500],
              svgToMiniDataURI
            )})`};
      `}
    >
      {children}
    </select>
  )
}

//  background-image: url(${applyColorsToCheveronSVGIcon(
//    theme.colors.gray[500],
//    svgToMiniDataURI
//  )});
