import React from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { FormLabel } from "./form-label"
import { Select } from "./form-elements/select"
import { Legend } from "./legend"
import { CustomRadioButton } from "./custom-radio-button"
import { RadioLabel } from "./radio-label"
import { CustomCheckbox } from "./custom-checkbox"
type FormFiltersProps = {}

export const FormFilters: React.FC<FormFiltersProps> = () => {
  return (
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
          <CustomRadioButton name="property-type" id="house" />
          <RadioLabel>House</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomRadioButton name="property-type" id="apartment" />
          <RadioLabel>Apartment</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomRadioButton name="property-type" id="loft" />
          <RadioLabel>Loft</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomRadioButton name="property-type" id="townhouse" />
          <RadioLabel>Townhouse</RadioLabel>
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
        <Legend>Amenities</Legend>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomCheckbox name="amenities" id="balcony" />
          <RadioLabel>Balcony</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomCheckbox name="amenities" id="pool" />
          <RadioLabel>Pool</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomCheckbox name="amenities" id="beach" />
          <RadioLabel>Beach</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomCheckbox name="amenities" id="pet-friendly" />
          <RadioLabel>Pet friendly</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomCheckbox name="amenities" id="kid-friendly" />
          <RadioLabel>Kid friendly</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomCheckbox name="amenities" id="parking" />
          <RadioLabel>Parking</RadioLabel>
        </label>
        <label
          css={css`
            ${tw`block mt-2`}
          `}
        >
          <CustomCheckbox name="amenities" id="air-conditioning" />
          <RadioLabel>Air Conditioning</RadioLabel>
        </label>
      </fieldset>

      <div
        css={css`
          ${tw`flex items-center justify-center py-4 -mx-4 bg-gray-900`}
        `}
      >
        <button
          type="submit"
          css={css`
            ${tw`w-full py-2 mx-4 font-medium text-center text-white bg-indigo-500 rounded-lg`}
          `}
        >
          Update results
        </button>
      </div>
    </form>
  )
}
