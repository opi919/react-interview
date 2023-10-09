import React, { useContext, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { SearchContext } from "../context/SearchContext"
import SearchBox from "../search-box/SearchBox"

export default function SearchResult() {
  const { setFormData } = useContext(SearchContext)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const formDataString = searchParams.get("formData")

  useEffect(() => {
    if (formDataString) {
      try {
        const decodedFormData = decodeURIComponent(formDataString)
        const parsedFormData = JSON.parse(decodedFormData)

        setFormData({
          from: { ...parsedFormData.from },
          to: { ...parsedFormData.to },
          minDepartureDate: new Date(parsedFormData.minDepartureDate),
          departureDate: new Date(parsedFormData.departureDate),
          minReturnDate: new Date(parsedFormData.minReturnDate),
          returnDate: new Date(parsedFormData.returnDate),
          bookingClass: parsedFormData.bookingClass,
          passengers: { ...parsedFormData.passengers },
          tripType: parsedFormData.tripType,
        })
      } catch (error) {
        console.error("Error parsing formData:", error)
      }
    } else {
      console.error("formData parameter is not present in the URL")
    }
  }, [formDataString])

  return <SearchBox />
}
