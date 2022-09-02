import { useState } from "react"

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <article className=" ">
        <img
          src={image}
          alt={name}
          className="w-full h-auto md:h-80 object-cover "
        />
        <footer className="p-8 space-y-6">
          <div className="flex justify-between items-center text-lg">
            <h4 className="md:text-2xl font-semibold">{name}</h4>
            <h4 className="bg-yellow-400 px-4 py-1 md:text-lg font-semibold">
              ${price}
            </h4>
          </div>
          <p className="text-gray-500">
            {" "}
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="font-semibold text-black hover:text-black"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " show less" : "read more"}
            </button>
          </p>
          <div className="flex justify-center items-center">
            <button className="remove-btn" onClick={() => removeTour(id)}>
              Not Interested
            </button>
          </div>
        </footer>
      </article>
    </>
  )
}

export default Tour
