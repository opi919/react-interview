import React, { useContext, useEffect, useState } from "react"
import CITIES from "../../city.json"
import Menu from "../menu/Menu"
import { SearchContext } from "../context/SearchContext"
import FormItem from "../form/FormItem"

export default function SearchBox() {
  const { formData, handleChange } = useContext(SearchContext)

  const [loadingFromOptions, setLoadingFromOptions] = useState(false)
  const [loadingToOptions, setLoadingToOptions] = useState(false)

  const [fromOptions, setFromOptions] = useState([])
  const [toOptions, setToOptions] = useState([])

  const currentDate = new Date().toISOString().split("T")[0]

  const getDefaultReturnDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  const loadFromOptions = () => {
    if (!fromOptions.length) {
      setLoadingFromOptions(true)
      setFromOptions(CITIES)

      setTimeout(() => {
        setLoadingFromOptions(false)
      }, 1000)
    }
  }

  const loadToOptions = () => {
    if (!toOptions.length) {
      setLoadingToOptions(true)

      setTimeout(() => {
        setToOptions(["City A", "City B", "City C"])
        setLoadingToOptions(false)
      }, 1000)
    }
  }

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
