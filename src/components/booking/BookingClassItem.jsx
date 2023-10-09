import React, { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

export default function BookingClassItem({ bookingClass }) {
  const { formData, handleChange } = useContext(SearchContext)
  const { type, text } = bookingClass

  return (
    <label htmlFor={type} className="me-2" role="button">
      <input id={type} type="radio" value={type} name="bookingClass" checked={type === formData.bookingClass} onChange={handleChange} />
      {text}
    </label>
  )
}
