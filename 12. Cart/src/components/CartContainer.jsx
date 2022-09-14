import React from "react"
import CartItem from "./CartItem"
import { useGlobalContext } from "./context"
import Total from "./Total"

const CartContainer = () => {
  const { cart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className="">
        <header>
          <h2>Your Bag</h2>
          <h4>is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="container mx-auto max-w-xl my-10 grid grid-cols-1 gap-4">
      {/* <!-- item 1 --> */}
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <Total />

      {/* <!-- place order button --> */}
      <button className="bg-fuchsia-500 mx-6 py-4 uppercase font-semibold text-white rounded-sm shadow-lg border border-transparent hover:bg-fuchsia-500/95">
        Place Order
      </button>
    </section>
  )
}

export default CartContainer
