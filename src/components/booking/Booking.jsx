import React, { useContext, useState } from "react"
import { SearchContext } from "../context/SearchContext"
import "./Booking.css"
import BookingMenu from "./BookingMenu"

export default function Booking() {
  const { formData, setFormData, totalPassengers } = useContext(SearchContext)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenuOptions = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className={`p-3 border border-1 rounded ${isMenuOpen ? "active" : ""}`} role="button" onClick={toggleMenuOptions}>
        <p className="mb-2">Travellers & Booking Class</p>
        <h5 className="m-0">{totalPassengers(formData.passengers)} Traveler</h5>
        <small>{formData.bookingClass}</small>
      </div>

      {isMenuOpen && <BookingMenu />}
    </>
  )
}
