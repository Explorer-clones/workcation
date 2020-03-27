import React, { ReactNode } from "react"
import { Link } from "gatsby"
import tw from "tailwind.macro"
import { css, SerializedStyles } from "@emotion/core"

type NavLink = {
  children: ReactNode
  to: string
  css?: SerializedStyles
}

export const NavLink: React.FC<NavLink> = ({ children, ...props }) => {
  return (
    <Link
      css={css`
        ${tw`py-1 font-medium text-white`}
      `}
      {...props}
    >
      {children}
    </Link>
  )
}
