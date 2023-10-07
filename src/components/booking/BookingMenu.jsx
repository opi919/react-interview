import React from "react"
import "./BookingMenu.css"
import BookingMenuItem from "./BookingMenuItem"
import BookingClassItem from "./BookingClassItem"

const bookingClassType = [
  {
    type: "economy",
    text: "Economy",
  },
  {
    type: "premium",
    text: "Premium Economy",
  },
  {
    type: "business",
    text: "Business",
  },
  {
    type: "firstclass",
    text: "First Class",
  },
]

export default function BookingMenu() {
  return (
    <div className="booking-menu-container">
      <div>
        <p className="booking-title mb-1">Travelers</p>
        <BookingMenuItem menuItems={{ title: "adult", age: "12 years+" }} />
        <BookingMenuItem menuItems={{ title: "children", age: "2-12 years" }} />
        <BookingMenuItem menuItems={{ title: "infant", age: "below 2 years" }} />
      </div>
      <div>
        <p className="class-title mt-2 mb-1">Booking class</p>
        {bookingClassType.map((bookingClass) => (
          <BookingClassItem bookingClass={bookingClass} />
        ))}
      </div>
    </div>
  )
}
