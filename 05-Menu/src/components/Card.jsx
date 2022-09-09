import { BiFoodTag } from "react-icons/bi"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { TiArrowForwardOutline } from "react-icons/ti"
import { AiOutlineHeart } from "react-icons/ai"
import { useState } from "react"

const Card = ({
  id,
  title,
  img,
  description,
  price,
  mealCourse,
  total_reviews,
  stars,
  veg,
}) => {
  const [readMore, setReadMore] = useState(false)
  //   stars
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <>
      <article
        key={id}
        className=" border rounded-lg shadow-sm hover:shadow-red-500 flex justify-center items-center p-4 xl:pb-10 gap-3 mx-2"
      >
        {/* <!-- item info --> */}
        <header className="flex flex-col justify-center space-y-1 w-1/2 h-full ">
          {/* Food tag and seller tag */}
          <div className="text-xs flex space-x-1 w-28 ">
            {veg ? (
              <BiFoodTag size="18px" color="#22c55e" />
            ) : (
              <BiFoodTag size="18px" color="#92282c" />
            )}
            <span className=" px-1.5 bg-orange-100  rounded-md text-red-400 capitalize">
              bestseller
            </span>
          </div>

          <p className="text-gray-400 pt-2 capitalize ">{mealCourse}</p>
          <h4 className="font-semibold text-lg xl:text-2xl ">{title}</h4>

          {/* Stars */}
          <p className="flex justify-evenly items-center border border-yellow-400 w-28  rounded-md text-xs">
            <span className="text-yellow-400 flex justify-evenly space-x-1">
              {tempStars}
            </span>
            <span className="text-xs">{total_reviews}</span>
          </p>

          {/* Price */}
          <p className="text-lg xl:text-xl font-semibold text-gray-700 ">
            &#8377;{price}
          </p>

          {/* Description */}
          <p className="text-sm xl:text-base text-gray-800 ">
            {readMore ? description : `${description.substring(0, 50)}...`}
            <button
              type="button"
              className="text font-semibold text-red-500"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " show less" : " read more "}
            </button>
          </p>

          {/* Like and Share button */}
          <p className="flex gap-4 py-2 ">
            <a href="#" className="social-btn">
              <AiOutlineHeart size="26px" />
            </a>
            <a href="#" className="social-btn">
              <TiArrowForwardOutline size="26px" />
            </a>
          </p>
        </header>

        {/* Image */}
        <div className="w-1/2 relative flex justify-center items-center ">
          <img
            src={img}
            className=" rounded-3xl w-56 h-[11rem] xl:w-96 xl:h-60 object-cover"
            alt={title}
          />
          <button className="add-btn">
            Add{" "}
            <span className="text-xs font-extralight pl-1 md:text-xl top-1 right-3 absolute">
              +
            </span>
          </button>
        </div>
      </article>
    </>
  )
}

export default Card
