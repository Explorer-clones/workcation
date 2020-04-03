declare module "tailwind.macro"

declare module "*.svg" {
  import React from "react"
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module "tailwindcss/base.css"
declare module "tailwindcss/defaultConfig"
declare module "mini-svg-data-uri"
declare module "*.jpg"
