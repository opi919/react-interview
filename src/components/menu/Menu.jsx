import React, { useContext, useEffect } from "react"
import { SearchContext } from "../context/SearchContext"
import "./Menu.css"

export default function Menu() {
  const { formData, handleChange } = useContext(SearchContext)
  const { tripType } = formData

  return (
    <div className="menu-container">
      <label>
        <input type="radio" name="tripType" value="oneWay" checked={tripType === "oneWay"} onChange={handleChange} />
        One Way
      </label>
      <label>
        <input type="radio" name="tripType" value="roundTrip" checked={tripType == "roundTrip"} onChange={handleChange} />
        Round Trip
      </label>
      <label>
        <input type="radio" name="tripType" value="multiCity" checked={tripType === "multiCity"} onChange={handleChange} />
        Multi City
      </label>
    </div>
  )
}
