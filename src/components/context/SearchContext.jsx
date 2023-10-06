import { createContext, useState, useMemo, useEffect } from "react"

export const SearchContext = createContext({
  formData: {
    from: null,
    to: null,
    minDepartureDate: "",
    departureDate: "",
    returnDate: "",
    minReturnDate: "",
    bookingClass: "",
    passengers: null,
    tripType: "",
  },
  setFormData: () => {},
  handleChange: () => {},
})

export const SearchProvider = ({ children }) => {
  const currentDate = new Date()

  const getDefaultReturnDate = useMemo(
    () => (date) => {
      const tomorrow = new Date(date)
      tomorrow.setDate(tomorrow.getDate() + 1)
      return tomorrow
    },
    []
  )

  const [formData, setFormData] = useState({
    from: {
      city: "",
      airport: "",
    },
    to: {
      city: "",
      airport: "",
    },
    minDepartureDate: currentDate,
    departureDate: currentDate,
    returnDate: "",
    minReturnDate: getDefaultReturnDate(currentDate),
    bookingClass: "economy",
    passengers: {
      adult: 1,
      children: 0,
      infant: 0,
    },
    tripType: "oneWay",
  })

  useEffect(() => {
    setFormData((prev) => {
      const newReturnDate = getDefaultReturnDate(prev.departureDate)
      return {
        ...prev,
        returnDate: newReturnDate,
        minReturnDate: newReturnDate,
      }
    })
  }, [formData.departureDate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const contextValue = { formData, setFormData, handleChange, getDefaultReturnDate }

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
}
