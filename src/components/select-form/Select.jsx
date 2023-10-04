import React from "react"

export default function Select({ city = "Select a city", airport = "Choose an airport" }) {
  return (
    <div>
      <h5 className="m-0">{city}</h5>
      <small>{airport}</small>
    </div>
  )
}
