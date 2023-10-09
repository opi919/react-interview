import React, { useContext, useEffect, useState } from "react"
import Menu from "../menu/Menu"
import { SearchContext } from "../context/SearchContext"
import FormItem from "../form/FormItem"
import DateItem from "../date/DateItem"
import "./SearchBox.css"
import BookingItem from "../booking/Booking"
import { useNavigate } from "react-router-dom"

export default function SearchBox() {
  const navigate = useNavigate()
  const { formData, handleChange } = useContext(SearchContext)

  const searchFlights = () => {
    const formDataString = JSON.stringify(formData)
    navigate(`/flights?formData=${encodeURIComponent(formDataString)}`)
  }

  return (
    <div className="px-5">
      <form className="search-container">
        <Menu />
        <div className="row mt-3 w-100 m-0 p-0">
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
        <input type="button" value="Search" className="submitBtn" onClick={searchFlights} />
      </form>
    </div>
  )
}
