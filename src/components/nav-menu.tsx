import React from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { NavLink } from "./nav-link"

type NavMenuProps = {}

const NavMenu: React.FC<NavMenuProps> = () => {
  return (
    <div>
      <div
        css={css`
          ${tw`flex flex-col pb-5 mt-3`}
        `}
      >
        <NavLink to="#">List your property</NavLink>
        <NavLink to="#">Trips</NavLink>
        <NavLink to="#">Messages</NavLink>
      </div>
      <hr
        css={css`
          ${tw`m-0 -mx-4 bg-gray-800`}
        `}
      />

      <div
        css={css`
          ${tw`flex flex-col`}
        `}
      >
        <div
          css={css`
            ${tw`flex items-center mt-4`}
          `}
        >
          <img
            css={css`
              ${tw`block object-cover w-10 h-10 m-0 border-2 border-gray-600 border-solid rounded-full`}
            `}
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt="avatar-image"
          />
          <span
            css={css`
              ${tw`ml-4 font-medium text-white text-gray-200`}
            `}
          >
            Isla Schoger
          </span>
        </div>
        <NavLink
          css={css`
            ${tw`py-2 mt-4 text-sm font-normal text-gray-400 hover:text-white`}
          `}
          to="#"
        >
          Account Settings
        </NavLink>
        <NavLink
          css={css`
            ${tw`py-2 text-sm font-normal text-gray-400 hover:text-white`}
          `}
          to="#"
        >
          Support
        </NavLink>
        <NavLink
          css={css`
            ${tw`py-2 text-sm font-normal text-gray-400 hover:text-white`}
          `}
          to="#"
        >
          Sign Out
        </NavLink>
      </div>
    </div>
  )
}

export default NavMenu
