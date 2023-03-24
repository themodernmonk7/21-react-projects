import React from "react"

const Title = () => {
  return (
    <section className=" w-full">
      {/* Top section */}
      {/* flex flex-col lg:flex-row justify-center items-center mt-20 lg:space-x-20 space-y-8 px-4 md:px-0 */}
      <div className="grid lg:grid-cols-2 gap-10 mt-20 px-8 place-items-center">
        {/* right */}
        <div className="  font-bold text-3xl sm:text-5xl uppercase flex justify-center items-center">
          <h2 className="">
            {" "}
            <span className="text-yellow-400"> The first</span> online streaming
            movie search engine
          </h2>
        </div>
        {/* left */}
        <div className=" text-gray-400 text-sm  ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            commodi odio assumenda sunt cupiditate fuga magnam omnis nam
            praesentium nulla iusto saepe maxime repellendus ipsa earum suscipit
            deserunt,
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            voluptate quisquam distinctio recusandae illo beatae alias soluta
            debitis praesentium inventore.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Title
