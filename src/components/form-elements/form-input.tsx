import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import tw from "tailwind.macro"

type FormInput = {
  css?: SerializedStyles
}

export const FormInput: React.FC<FormInput> = props => {
  return (
    <input
      type="text"
      placeholder="Jane Doe"
      css={css`
        ${tw`px-3 py-2 leading-normal bg-white border border-gray-300 rounded appearance-none font-base focus:outline-none focus:shadow-outline`}
        &::placeholder: {
          ${tw`text-gray-500 opacity-1`}
        }
      `}
      {...props}
    />
  )
}
