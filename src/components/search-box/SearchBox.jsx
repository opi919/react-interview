import React, { useContext, useEffect, useState } from "react"
import CITIES from "../../city.json"
import Menu from "../menu/Menu"
import { SearchContext } from "../context/SearchContext"
import FormItem from "../form/FormItem"

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
        </div>
      </form>
    </div>
  )
}
