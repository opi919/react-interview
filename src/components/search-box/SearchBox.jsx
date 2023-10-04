import React, { useContext, useEffect, useState } from "react"
import Menu from "../menu/Menu"
import { SearchContext } from "../context/SearchContext"
import FormItem from "../form/FormItem"
import DateItem from "../date/DateItem"
import "./SearchBox.css"

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
          <div className="col-3 position-relative">
            <FormItem title="from" />
          </div>
          <div className="col-3 position-relative">
            <FormItem title="to" />
          </div>
          <div className="col-3 border border-1 border-black rounded d-flex position-relative">
            <DateItem title="departure" />
            <DateItem title="return" />
          </div>
        </div>
      </form>
    </div>
  )
}
