import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosRemove, IoIosAdd } from "react-icons/io"
import { useGlobalContext } from "./context"

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increase, decrease } = useGlobalContext()
  return (
    <>
      <article className="flex justify-between items-center border rounded-md relative ">
        <div className="flex space-x-2 px-2 py-2">
          {/* <!-- Product Image Image --> */}
          <img src={img} className="w-28 h-28  " alt={title} />
          {/* <!-- product details --> */}
          <div>
            <h2 className="text-xl">{title}</h2>
            <p className=" space-x-2">
              <span className="font-semibold">${price}</span>
              <span className="text-gray-500 line-through font-normal text-sm">
                3,495
              </span>
            </p>
          </div>
        </div>

        {/* <!-- Value Button --> */}
        <div className="flex space-x-4 md:px-6 py-2 ">
          <button
            className="hover:bg-gray-200/40 rounded-full px-1 py-1"
            onClick={() => decrease(id)}
          >
            {" "}
            <IoIosRemove />{" "}
          </button>
          <p className="border px-2 bg-fuchsia-500 text-white rounded-md ">
            {amount}
          </p>
          <button
            className="hover:bg-gray-200/40 rounded-full px-1 py-1"
            onClick={() => increase(id)}
          >
            {" "}
            <IoIosAdd />{" "}
          </button>
        </div>
        <button
          className="absolute top-2 text-gray-600 right-2 hover:text-black hover:bg-gray-200/40 px-1 py-1 rounded-full"
          onClick={() => removeItem(id)}
        >
          {" "}
          <AiOutlineClose size="14px" />{" "}
        </button>
      </article>
    </>
  )
}

export default CartItem
