import React from "react"

const Articles = ({ text }) => {
  return (
    <>
      <article className=" max-w-2xl lg:max-w-3xl mt-8 p-8 space-y-2 flex flex-col justify-center items-center text-center text-gray-400 tracking-wide">
        {/* paragraph */}
        {text.map((item, index) => {
          return (
            <p key={index} className=" p-6">
              {" "}
              {item}{" "}
            </p>
          )
        })}
      </article>
    </>
  )
}

export default Articles
