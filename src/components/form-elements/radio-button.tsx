import React from "react"
type RadioButtonProps = {
  name: string
  id: string
}

export const RadioButton: React.FC<RadioButtonProps> = props => {
  return <input type="radio" {...props} />
}
