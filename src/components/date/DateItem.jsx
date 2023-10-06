import React, { useContext, useEffect, useRef, useState } from "react"
import { SearchContext } from "../context/SearchContext"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./DateItem.css"

export default function DateItem({ title }) {
  const { formData, setFormData } = useContext(SearchContext)
  const { departureDate, returnDate, minDepartureDate, minReturnDate, tripType } = formData

  const defaultDate = title === "departure" ? departureDate : returnDate
  const [selectedDate, setSelectedDate] = useState(defaultDate)

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const datePickerRef = useRef(null)
  const [classList, setClassList] = useState("")

  useEffect(() => {
    setSelectedDate(defaultDate)
    title === "departure" ? setClassList("border-end-0 rounded-start") : setClassList("border-start-0 rounded-end")
  }, [departureDate, returnDate, title])

  const handleDivClick = () => {
    if (datePickerRef.current) {
      setIsDatePickerOpen(!isDatePickerOpen)
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setIsDatePickerOpen(false)

    setFormData((prev) => ({
      ...prev,
      [`${title}Date`]: date,
    }))
  }

  const handleDate = () => {
    if (tripType === "oneWay" && title === "return") {
      const date = "Not Applicable"
      const getDate = { date }
      return getDate
    } else {
      const date = selectedDate.toLocaleString("en-US", { day: "numeric" })
      const month = selectedDate.toLocaleString("en-US", { month: "short" })
      const year = selectedDate.toLocaleString("en-US", { year: "2-digit" })
      const day = selectedDate.toLocaleString("en-US", { weekday: "short" })

      const getDate = { date, month, year, day }
      return getDate
    }
  }

  // console.log(formData)

  return (
    <>
      <div className={`w-50 ps-2 ${classList} border border-1 border-black ${isDatePickerOpen ? "active" : ""}`}>
        <div onClick={handleDivClick} role="button" className={`py-1 ${title === "return" && tripType === "oneWay" ? "div-disabled" : ""}`}>
          <p className="">{title}</p>
          <h5 className="m-0">
            {handleDate().date}
            <small className="ms-2">
              {handleDate()?.month} {handleDate()?.year}
            </small>
          </h5>
          <small>{handleDate()?.day}</small>
        </div>
      </div>
      <DatePicker id={title} ref={datePickerRef} selected={selectedDate} onChange={handleDateChange} open={isDatePickerOpen} onClickOutside={() => setIsDatePickerOpen(false)} dateFormat="yyyy-MM-dd" minDate={title === "departure" ? minDepartureDate : minReturnDate} />
    </>
  )
}
