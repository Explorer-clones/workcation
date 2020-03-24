import React from "react"
import { Global, css } from "@emotion/core"
import defaultConfig from "tailwindcss/defaultConfig"
import tw from "tailwind.macro"

import base from "tailwindcss/base.css"
import { Theme } from "./tailwind-types"

export const theme: Theme = {
  ...defaultConfig.theme,
}

type GlobalStylesProps = {
  theme: Theme
}

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ theme }) => (
  <Global
    styles={css`
      ${base}
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      body {
        ${tw`leading-normal`}
        font-family: ${theme.fontFamily.sans.toString()}
      }
    `}
  />
)
