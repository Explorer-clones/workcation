import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

import { ReactComponent as Logo } from "../images/logo.svg"
import { ReactComponent as HamburgerIcon } from "../images/icon-menu.svg"
import { ReactComponent as SearchIcon } from "../images/icon-search.svg"
import { ReactComponent as FilterIcon } from "../images/filter-icon.svg"
import { ReactComponent as IconStar } from "../images/icon-star.svg"
import Villa from "../images/villa.jpg"

type WorkcationProps = {
  children: ReactNode
}

const Workcation: React.FC<WorkcationProps> = () => {
  return (
    <div
      css={css`
        ${tw`min-h-screen bg-gray-200`}
      `}
    >
      <header
        css={css`
          ${tw`flex items-center justify-between px-4 py-4 bg-gray-900`}
        `}
      >
        <Logo />

        <button
          css={css`
            ${tw`inline-flex items-center justify-center w-10 h-10 focus:outline-none focus:shadow-outline`}
          `}
        >
          <HamburgerIcon
            css={css`
              ${tw`w-6 h-6 text-gray-500 fill-current`}
            `}
          />
        </button>
      </header>
      <section
        css={css`
          ${tw`flex items-center justify-between px-4 py-4 bg-gray-800`}
        `}
      >
        <div
          css={css`
            ${tw`relative flex items-center`}
          `}
        >
          <SearchIcon
            css={css`
              ${tw`absolute w-6 h-6 ml-2 text-gray-600 fill-current`}
            `}
          />
          <input
            type="text"
            placeholder="Search by keywords"
            css={css`
              ${tw`w-full py-2 pl-10 pr-4 mr-4 text-white bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-100 focus:text-gray-900`}
              &:focus {
                &::placeholder {
                  ${tw`text-gray-800`}
                }
              }
              &::placeholder {
                ${tw`text-gray-400`}
              }
            `}
          />
        </div>

        <button
          css={css`
            ${tw`flex items-center px-3 py-2 bg-gray-700 rounded-lg`}
          `}
        >
          <FilterIcon
            css={css`
              ${tw`w-6 h-6 mr-2 text-gray-500 fill-current`}
            `}
          />
          <span
            css={css`
              ${tw`text-white`}
            `}
          >
            Filters
          </span>
        </button>
      </section>
      <main
        css={css`
          ${tw`px-4`}
        `}
      >
        <h3
          css={css`
            ${tw`mt-6 mb-0 font-normal`}
          `}
        >
          Los Angeles
        </h3>
        <p
          css={css`
            ${tw`mt-2 text-gray-700`}
          `}
        >
          Live like the stars in these luxurious Southern California estates.
        </p>
        <div>
          <div
            css={css`
              ${tw`relative`}
              padding-bottom: 83.33333333%;
            `}
          >
            <img
              css={css`
                ${tw`absolute inset-0 object-cover w-full h-full rounded-lg shadow-md`}
              `}
              src={Villa}
              alt="Beautiful white house with pool and blue sky"
            />
          </div>
          <div>
            <div
              css={css`
                ${tw`px-4 py-4 bg-white rounded-lg shadow-lg`}
              `}
            >
              <div
                css={css`
                  ${tw`flex items-baseline`}
                `}
              >
                <span
                  css={css`
                    ${tw`px-2 py-1 mr-2 text-sm font-medium leading-none text-teal-800 uppercase bg-teal-200 rounded-full`}
                  `}
                >
                  Plus
                </span>
                <span
                  css={css`
                    ${tw`text-sm font-medium leading-none tracking-tight text-gray-600 uppercase`}
                  `}
                >
                  2 beds &bull; 2 baths
                </span>
              </div>

              <h4
                css={css`
                  ${tw`pt-4 mb-0 text-xl`}
                `}
              >
                Modern home in city center
              </h4>
              <div
                css={css`
                  ${tw`mt-2`}
                `}
              >
                $1,900.00{" "}
                <span
                  css={css`
                    ${tw`text-gray-500 `}
                  `}
                >
                  /wk
                </span>
              </div>
              <div
                css={css`
                  ${tw`flex items-center`}
                `}
              >
                <IconStar
                  css={css`
                    ${tw`w-4 h-4 text-teal-500 fill-current`}
                  `}
                />
                <IconStar
                  css={css`
                    ${tw`w-4 h-4 text-teal-500 fill-current`}
                  `}
                />
                <IconStar
                  css={css`
                    ${tw`w-4 h-4 text-teal-500 fill-current`}
                  `}
                />
                <IconStar
                  css={css`
                    ${tw`w-4 h-4 text-teal-500 fill-current`}
                  `}
                />
                <IconStar
                  css={css`
                    ${tw`w-4 h-4 text-teal-500 fill-current`}
                  `}
                />
                <span
                  css={css`
                    ${tw`block text-sm text-gray-500`}
                  `}
                >
                  34 reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Workcation
