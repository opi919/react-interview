import React, { useContext, useRef } from "react"
import { SearchContext } from "../context/SearchContext"

export default function BookingMenuItem({ menuItem }) {
  const { formData, setFormData, totalPassengers } = useContext(SearchContext)
  const { title, age } = menuItem

  const handlePassenger = (e) => {
    const { type } = e.target.dataset
    const totalPassenger = totalPassengers(formData.passengers)
    if (type === "increment") {
      totalPassenger < 9
        ? setFormData((prev) => ({
            ...prev,
            passengers: {
              ...prev.passengers,
              [`${title}`]: prev.passengers[`${title}`] + 1,
            },
          }))
        : alert("maximum 9 passengers are allowed")
    } else if (type === "decrement") {
      if (title === "adult" && formData.passengers.adult > 1) {
        totalPassenger > 1
          ? setFormData((prev) => ({
              ...prev,
              passengers: {
                ...prev.passengers,
                [`${title}`]: prev.passengers[`${title}`] - 1,
              },
            }))
          : ""
      } else if (title !== "adult" && formData.passengers[`${title}`] !== 0) {
        totalPassenger > 1
          ? setFormData((prev) => ({
              ...prev,
              passengers: {
                ...prev.passengers,
                [`${title}`]: prev.passengers[`${title}`] - 1,
              },
            }))
          : ""
      }
    }
  }

  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <div>
        <h6>{title}</h6>
        <small>{age}</small>
      </div>
      <div className="d-flex">
        <div className={`decrement`} data-type="decrement" onClick={handlePassenger} role="button">
          -
        </div>
        <div className={`${title} mx-2`}>{formData.passengers[`${title}`]}</div>
        <div className="increment" data-type="increment" onClick={handlePassenger} role="button">
          +
        </div>
      </div>
    </div>
  )
}
