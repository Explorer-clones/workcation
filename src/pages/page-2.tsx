import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

import { ReactComponent as Logo } from "../images/logo.svg"
import { ReactComponent as HamburgerIcon } from "../images/icon-menu.svg"
import { ReactComponent as SearchIcon } from "../images/icon-search.svg"
import { ReactComponent as FilterIcon } from "../images/filter-icon.svg"
import { ReactComponent as IconStar } from "../images/icon-star.svg"
import Villa from "../images/villa.jpg"
import { NavLink } from "../components/nav-link"
import { Select } from "../components/form-elements/select"
import { Checkbox } from "../components/form-elements/checkbox"
import { RadioButton } from "../components/form-elements/radio-button"
import { FormLabel } from "../components/form-label"
import { Legend } from "../components/legend"

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
          ${tw`px-4 py-4 bg-gray-900 `}
        `}
      >
        <div
          css={css`
            ${tw`flex items-center justify-between`}
          `}
        >
          <Logo />

          <button
            css={css`
              ${tw`inline-flex items-center justify-center w-10 h-10 text-gray-500 focus:outline-none focus:shadow-outline hover:text-white focus:text-white`}
            `}
          >
            <HamburgerIcon
              css={css`
                ${tw`w-6 h-6 fill-current`}
              `}
            />
          </button>
        </div>

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
      </header>
      <section
        css={css`
          ${tw`px-4 py-4 bg-gray-800`}
        `}
      >
        <div
          css={css`
            ${tw`flex items-center justify-between mb-4`}
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
              ${tw`flex items-center px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:shadow-outline`}
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
        </div>

        <hr
          css={css`
            ${tw`m-0 mb-4 -mx-4 bg-gray-900`}
          `}
        />

        <form
          css={css`
            ${tw`block`}
          `}
        >
          <fieldset
            css={css`
              ${tw`border-none`}
            `}
          >
            <label
              css={css`
                ${tw`inline-block w-1/2 pr-2`}
              `}
            >
              <FormLabel>Bedrooms</FormLabel>
              <Select
                name="bedrooms"
                id="bedrooms"
                iconColor="#FFFFFF"
                css={css`
                  ${tw`w-full mt-2 text-white bg-gray-700 border-none rounded-lg shadow`}
                `}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </label>
            <label
              css={css`
                ${tw`inline-block w-1/2 pl-2`}
              `}
            >
              <FormLabel>Bathrooms</FormLabel>
              <Select
                name="bathrooms"
                id="bathrooms"
                iconColor="#FFFFFF"
                css={css`
                  ${tw`w-full mt-2 text-white bg-gray-700 border-none rounded-lg shadow`}
                `}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </label>
            <label>
              <FormLabel
                css={css`
                  ${tw`mt-4`}
                `}
              >
                Price Range
              </FormLabel>
              <Select
                name="price-range"
                id="price-range"
                iconColor="#FFFFFF"
                css={css`
                  ${tw`w-full mt-2 text-white bg-gray-700 border-none rounded-lg shadow`}
                `}
              >
                <option value="$0-1000/wk">0-$1000/wk</option>
                <option value="$1000-2000/wk">$1000-2000/wk</option>
                <option value="$2000-3000/wk">$2000-3000/wk</option>
                <option value="$3000-4000/wk">$3000-4000/wk</option>
              </Select>
            </label>
          </fieldset>

          <hr
            css={css`
              ${tw`m-0 mb-4 -mx-4 bg-gray-900`}
            `}
          />

          <fieldset
            css={css`
              ${tw`border-none`}
            `}
          >
            <Legend>Property Type</Legend>

            <label
              css={css`
                ${tw`block mt-2`}
              `}
            >
              <input type="radio" name="property-type" id="house" />
              <span>House</span>
            </label>
            <label
              css={css`
                ${tw`block mt-2`}
              `}
            >
              <input type="radio" name="property-type" id="apartment" />
              <span>Apartment</span>
            </label>
            <label
              css={css`
                ${tw`block mt-2`}
              `}
            >
              <input type="radio" name="property-type" id="loft" />
              <span>Loft</span>
            </label>
            <label
              css={css`
                ${tw`block mt-2`}
              `}
            >
              <input type="radio" name="property-type" id="townhouse" />
              <span>Townhouse</span>
            </label>
          </fieldset>

          <div>
            <Legend>Amenities</Legend>
            <label>
              <input type="checkbox" name="amenities" id="balcony" />
              <span>Balcony</span>
            </label>
            <label>
              <input type="checkbox" name="amenities" id="pool" />
              <span>Pool</span>
            </label>
            <label>
              <input type="checkbox" name="amenities" id="beach" />
              <span>Beach</span>
            </label>
            <label>
              <input type="checkbox" name="amenities" id="pet-friendly" />
              <span>Pet friendly</span>
            </label>
            <label>
              <input type="checkbox" name="amenities" id="kid-friendly" />
              <span>Kid friendly</span>
            </label>
            <label>
              <input type="checkbox" name="amenities" id="parking" />
              <span>Parking</span>
            </label>
            <label>
              <input type="checkbox" name="amenities" id="air-conditioning" />
              <span>Air Conditioning</span>
            </label>
          </div>
        </form>
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
                ${tw`relative px-4 py-4 mx-4 -mt-16 bg-white rounded-lg shadow-lg`}
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
