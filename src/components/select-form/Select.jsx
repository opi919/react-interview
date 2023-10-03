import React from "react"

export default function Select({ city = "Select a city", airport = "Choose an airport" }) {
  return (
    <div>
      <p className="m-0">{city}</p>
      <p className="m-0">{airport}</p>
    </div>
  )
}
