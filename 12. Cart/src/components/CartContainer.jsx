import React from "react"
import Phone_1 from "../assets/ProductImages/phone-1.png"
import { AiOutlineClose } from "react-icons/ai"

const CartContainer = () => {
  return (
    <section className="container mx-auto max-w-xl my-10 grid grid-cols-1 gap-4">
      {/* <!-- item 1 --> */}
      <div className="flex justify-between items-center border rounded-md relative ">
        <div className="flex space-x-2 px-2 py-2">
          {/* <!-- Product Image Image --> */}
          <img src={Phone_1} className="w-28 h-28  " alt="" />
          {/* <!-- product details --> */}
          <div className="">
            <h2 className="text-xl">Samsung Galaxy S8</h2>
            <p className="text-sm text-gray-800">Unisex White Solid Clogs</p>
            <p className="text-xs text-gray-600 font-light">
              Sold by: Flashtech Retail
            </p>
            <p className=" space-x-2">
              <span className="font-semibold">&#8377;399.99</span>
              <span className="text-gray-500 line-through font-normal text-sm">
                &#8377;3,495
              </span>
              <span className="text-primary uppercase text-sm font-light">
                {" "}
                55% off
              </span>{" "}
            </p>
          </div>
        </div>

        {/* <!-- Value Button --> */}
        <div className="flex space-x-4 px-6 py-2 ">
          <button className=" "> - </button>
          <p className="border px-2 bg-primary text-white rounded-md ">3</p>
          <button className=""> + </button>
        </div>
        <button className="absolute top-2 text-gray-600 right-2 hover:text-black">
          {" "}
          <AiOutlineClose size="20px" />{" "}
        </button>
      </div>

      {/* <!-- Item 2 --> */}
      <div className="flex justify-between items-center border rounded-md relative  ">
        <div className="flex space-x-2 px-2 py-2">
          {/* <!-- Product Image Image --> */}
          <img src={Phone_1} className="w-28 h-28  " alt="" />
          {/* <!-- product details --> */}
          <div className="">
            <h2 className="text-xl">Samsung Galaxy S8</h2>
            <p className="font-semibold">&#8377;399.99</p>
            <button>remove</button>
          </div>
        </div>

        {/* <!-- Value Button --> */}
        <div className="flex space-x-4 px-6">
          <span> - </span>
          <p className="border px-2 bg-primary text-white rounded-md">3</p>
          <span className=""> + </span>
        </div>
        <button className="absolute top-2 text-gray-600 right-2 hover:text-black">
          {" "}
          <AiOutlineClose size="20px" />{" "}
        </button>
      </div>

      {/* <!-- total section --> */}
      <section className=" ">
        <div className="px-6 uppercase py-1 text-sm text-gray-800">
          <p>
            Price details <span className="capitalize"> (2 Item) </span>
          </p>
        </div>
        <div className="flex justify-between py-2 border-y mx-6 font-light">
          <div className="text-gray-500 flex flex-col justify-between w-full ">
            <p className="flex justify-between">
              <span> Total MRP</span>
              <span>&#8377;17,996</span>
            </p>

            <p className="flex justify-between">
              <span> Discount on MRP</span>
              <span className="text-green-400">&#8377;-8,100</span>
            </p>

            <p className="flex justify-between">
              <span>Coupon Discount</span>
              <span className="text-primary">
                {" "}
                <a href="#"> Apply Coupon </a>
              </span>
            </p>

            <p className="flex justify-between">
              <span>
                {" "}
                Convenience Fee{" "}
                <span className="text-primary font-normal text-sm">
                  {" "}
                  <a href="#"> Know More </a>
                </span>{" "}
              </span>
              <span className="line-through">
                &#8377;99 <span className="text-green-400">FREE</span>
              </span>
            </p>
          </div>
        </div>
        {/* <!-- total --> */}
        <div className="flex justify-between mx-6 font-normal  text-black text-lg">
          <p className="">Total</p>
          <p className="">&#8377;2999.99</p>
        </div>
      </section>

      {/* <!-- place order button --> */}
      <button className="bg-primary mx-6 py-4 uppercase font-semibold text-white rounded-sm shadow-lg border border-transparent hover:bg-primary/95">
        Place Order
      </button>
    </section>
  )
}

export default CartContainer
