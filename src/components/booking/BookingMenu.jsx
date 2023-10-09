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

const bookingMenuItems = [
  { title: "adult", age: "12 years+" },
  { title: "children", age: "2-12 years" },
  { title: "infant", age: "below 2 years" },
]

export default function BookingMenu() {
  return (
    <div className="booking-menu-container border border-1">
      <div>
        <p className="booking-title mb-1">Travelers</p>
        {bookingMenuItems.map((menuItem) => (
          <BookingMenuItem key={menuItem.title} menuItem={menuItem} />
        ))}
      </div>
      <div>
        <p className="class-title mt-2 mb-1">Booking class</p>
        {bookingClassType.map((bookingClass) => (
          <BookingClassItem key={bookingClass.type} bookingClass={bookingClass} />
        ))}
      </div>
    </div>
  )
}
