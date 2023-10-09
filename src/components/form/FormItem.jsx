import React, { useContext, useEffect, useState } from "react"
import CITIES from "../../city.json"
import { SearchContext } from "../context/SearchContext"
import SingleOption from "../select-form/SingleOption"
import Select from "../select-form/Select"
import "./FormItem.css"

function FormItem({ title }) {
  const { formData, setFormData } = useContext(SearchContext)
  const [isOptionsOpen, setOptionsOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [searchedText, setSearchedText] = useState("")
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [isLoading, setLoading] = useState(false)
  const { city, airport } = formData[`${title}`]

  const handleFormClick = async (e) => {
    setOptionsOpen(!isOptionsOpen)
    setLoading(true)
    setOptions(CITIES)

    await setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleOptionClick = (e) => {
    const { name, city, airport } = e.currentTarget.dataset

    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        city,
        airport,
      },
    }))
    setOptionsOpen(!isOptionsOpen)
  }

  const handleSearching = (e) => {
    setSearchedText(e.target.value.toLocaleLowerCase())
  }

  useEffect(() => {
    const filterOption = options.filter((option) => {
      if (option.city.toLocaleLowerCase().includes(searchedText) || option.airport.toLocaleLowerCase().includes(searchedText)) return option
    })

    setFilteredOptions(filterOption)
  }, [options, searchedText])

  return (
    <div className={`col-3 p-0 border border-1 rounded position-relative ${isOptionsOpen ? "active" : ""}`}>
      <div className="p-3 py-3" role="button">
        <div onClick={handleFormClick}>
          <p className="m-0">{title}</p>
          {city && airport ? <Select city={city} airport={airport} /> : <Select />}
        </div>
      </div>

      {isOptionsOpen && (
        <div className="option-container border border-1">
          <div>
            <input type="search" className="option-search" placeholder="search here..." onChange={handleSearching} />
          </div>
          {isLoading ? <div>Loading...</div> : filteredOptions.map(({ id, city, airport }) => <SingleOption key={id} optionItems={{ "data-city": city, "data-airport": airport, "data-name": title, onClick: handleOptionClick }} />)}
        </div>
      )}
    </div>
  )
}

export default FormItem
