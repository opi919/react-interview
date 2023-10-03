import { createContext, useState, useMemo } from "react"

export const SearchContext = createContext({
  formData: {
    from: {
      city: "",
      airport: "",
    },
    to: {
      city: "",
      airport: "",
    },
    departureDate: "",
    returnDate: "",
    bookingClass: "",
    passengers: null,
    tripType: "",
  },
  setFormData: () => {},
  handleChange: () => {},
})

export const SearchProvider = ({ children }) => {
  const currentDate = new Date().toISOString().split("T")[0]

  const getDefaultReturnDate = useMemo(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }, [])

  const [formData, setFormData] = useState({
    from: {
      city: "",
      airport: "",
    },
    to: {
      city: "",
      airport: "",
    },
    departureDate: currentDate,
    returnDate: getDefaultReturnDate,
    bookingClass: "economy",
    passengers: 1,
    tripType: "oneWay",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const contextValue = { formData, setFormData, handleChange }

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
}
