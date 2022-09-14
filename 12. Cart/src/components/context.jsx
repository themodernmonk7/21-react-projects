import React, { useContext } from "react"
import { useReducer } from "react"
import { useEffect } from "react"
import { useState } from "react"
import cartItem from "./CartItem"
import cartItems from "./data"
import reducer from "./reducer"
const url = "https://course-api.com/react-useReducer-cart-project"
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  //   const [cart, setCart] = useState(cartItems)
  const [state, dispatch] = useReducer(reducer, initialState)

  // remove Item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }
  //increase amount
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id })
  }
  //decrease
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id })
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" })
  }, [state.cart])
  return (
    <AppContext.Provider value={{ ...state, removeItem, increase, decrease }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
