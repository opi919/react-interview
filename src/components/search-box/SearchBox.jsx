import React, { useContext, useEffect, useState } from "react"
import Menu from "../menu/Menu"
import { SearchContext } from "../context/SearchContext"
import FormItem from "../form/FormItem"
import DateItem from "../date/DateItem"
import "./SearchBox.css"
import BookingItem from "../booking/Booking"

export default function SearchBox() {
  const { formData, handleChange } = useContext(SearchContext)

  const searchFlights = () => {
    const searchParams = new URLSearchParams(formData).toString()
    const url = `/search?${searchParams}`
    window.location.href = url
  }

  return (
    <div className="container">
      <form>
        <Menu />
        <div className="row">
          <FormItem title="from" />
          <FormItem title="to" />
          <div className="col-3 d-flex position-relative">
            <DateItem title="departure" />
            <DateItem title="return" />
          </div>
          <div className="col-3 p-0 position-relative">
            <BookingItem />
          </div>
        </div>
      </form>
    </div>
  )
}
