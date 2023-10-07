import React, { useContext, useState } from "react"
import CITIES from "../../city.json"
import { SearchContext } from "../context/SearchContext"
import SingleOption from "../select-form/SingleOption"
import Select from "../select-form/Select"
import "./FormItem.css"

function FormItem({ title }) {
  const { formData, setFormData } = useContext(SearchContext)
  const [isOptionsOpen, setOptionsOpen] = useState(false)
  const [options, setOptions] = useState([])
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
    console.log(e.currentTarget.dataset)
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

  return (
    <div className={`col-3 p-0 border border-1 rounded position-relative ${isOptionsOpen ? "active" : ""}`}>
      <div className="p-3 py-3" role="button">
        <div onClick={handleFormClick}>
          <p className="m-0">{title}</p>
          {city && airport ? <Select city={city} airport={airport} /> : <Select />}
        </div>
      </div>

      {isOptionsOpen && <div className="option-container">{isLoading ? <div>Loading...</div> : options.map(({ id, city, airport }) => <SingleOption key={id} optionItems={{ "data-city": city, "data-airport": airport, "data-name": title, onClick: handleOptionClick }} />)}</div>}
    </div>
  )
}

export default FormItem
