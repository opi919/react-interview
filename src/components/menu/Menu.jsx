import React, { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

export default function Menu() {
  const { formData, handleChange } = useContext(SearchContext)
//   console.log(formData)
  const { tripType } = formData

  return (
    <div>
      <label>
        <input type="radio" name="tripType" value="oneWay" defaultChecked={tripType === "oneWay"} onChange={handleChange} />
        One Way
      </label>
      <label>
        <input type="radio" name="tripType" value="roundTrip" defaultChecked={tripType === "roundTrip"} onChange={handleChange} />
        Round Trip
      </label>
      <label>
        <input type="radio" name="tripType" value="multiCity" defaultChecked={tripType === "multiCity"} onChange={handleChange} />
        Multi City
      </label>
    </div>
  )
}
