import React from "react"
import { useGlobalContext } from "./context"

const Total = () => {
  const { total, amount } = useGlobalContext()
  return (
    <>
      {/* <!-- total section --> */}
      <section>
        <div className="px-6 uppercase py-1 text-sm text-gray-800">
          <p>
            Price details <span className="capitalize"> ({amount} Item) </span>
          </p>
        </div>
        <div className="flex justify-between py-2 border-y mx-6 font-light">
          <div className="text-gray-500 flex flex-col justify-between w-full ">
            <p className="flex justify-between">
              <span> Total MRP</span>
              <span>${total}</span>
            </p>

            <p className="flex justify-between">
              <span> Discount on MRP</span>
              <span className="text-green-400">${-0.0}</span>
            </p>

            <p className="flex justify-between">
              <span>Coupon Discount</span>
              <span className="text-fuchsia-500">
                {" "}
                <a href="#"> Apply Coupon </a>
              </span>
            </p>

            <p className="flex justify-between">
              <span>
                {" "}
                Convenience Fee{" "}
                <span className=" text-fuchsia-500 font-normal text-sm">
                  {" "}
                  <a href="#"> Know More </a>
                </span>{" "}
              </span>
              <span className="line-through">
                $99 <span className="text-green-400">FREE</span>
              </span>
            </p>
          </div>
        </div>
        {/* <!-- total --> */}
        <div className="flex justify-between mx-6 font-normal  text-black text-lg">
          <p className="">Total</p>
          <p className="">${total}</p>
        </div>
      </section>
    </>
  )
}

export default Total
