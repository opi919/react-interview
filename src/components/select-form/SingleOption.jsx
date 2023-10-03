import React, { useContext } from "react"
import { SearchContext } from "../context/SearchContext"
import "./SingleOption.css"

export default function SingleOption({ optionItems }) {
  const { formData } = useContext(SearchContext)
  const city = optionItems[`data-city`]
  const airport = optionItems[`data-airport`]
  const name = optionItems[`data-name`]

  const handleClass = () => {
    switch (name) {
      case "from":
        return formData.to.city === city ? "disabled" : ""
      case "to":
        return formData.from.city === city ? "disabled" : ""
    }
  }
  return (
    <div {...optionItems} className={handleClass()} role="button">
      <div>{city}</div>
      <div>{airport}</div>
    </div>
  )
}
