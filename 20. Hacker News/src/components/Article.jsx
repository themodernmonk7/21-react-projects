const Article = () => {
  return (
    <>
      <section className="mt-5 p-5 container mx-auto flex justify-center items-center">
        <form className="space-y-3">
          <h2 className="text-2xl text-center">Search Hacker News</h2>
          <input
            type="text"
            placeholder="React"
            className="border px-6 py-2 shadow-pink-300 shadow-sm xl:px-10"
          />
        </form>
      </section>

      {/* <!-- Button container --> */}
      <div className="container mx-auto flex justify-center items-center space-x-6 xl:text-xl">
        <button className="border text-white px-3 text-sm rounded-md bg-gradient-to-r from-[#e052a0] to-[#f15c41] xl:text-xl ">
          Prev
        </button>
        <p>1 of 50 </p>
        <button className="border text-white px-3 text-sm rounded-md bg-gradient-to-r from-[#e052a0] to-[#f15c41] xl:text-xl">
          Next
        </button>
      </div>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 xl:grid-cols-3 p-10  ">
        <article className=" bg-slate-800 px-8 py-4 rounded-sm shadow-md mx-auto ">
          <h4 className="text-white font-semibold tracking-wide">
            Relicensing React, Jest, Flow, and Immutable.js
          </h4>
          <p className="text-gray-400 mt-1">
            2280 points by
            <span>dwwoelfel |</span>
            498 comments
          </p>
          <div className="text-white text-xs mt-4 space-x-2 bg-text-300">
            <a href="#" className=" rounded-sm hover:text-blue-600  uppercase">
              Read more
            </a>
            <button className=" rounded-sm uppercase hover:text-red-600">
              remove
            </button>
          </div>
        </article>
        <article className="block bg-slate-800 px-8 py-4 rounded-sm shadow-md mx-auto">
          <h4 className="text-white font-semibold tracking-wide">
            Relicensing React, Jest, Flow, and Immutable.js
          </h4>
          <p className="text-gray-400 mt-1">
            2280 points by
            <span>dwwoelfel |</span>
            498 comments
          </p>
          <div className="text-white text-xs mt-4 space-x-2 bg-text-300">
            <a href="#" className=" rounded-sm hover:text-blue-600  uppercase">
              Read more
            </a>
            <button className=" rounded-sm uppercase hover:text-red-600">
              remove
            </button>
          </div>
        </article>
        <article className="block bg-slate-800 px-8 py-4 rounded-sm shadow-md mx-auto">
          <h4 className="text-white font-semibold tracking-wide">
            Relicensing React, Jest, Flow, and Immutable.js
          </h4>
          <p className="text-gray-400 mt-1">
            2280 points by
            <span>dwwoelfel |</span>
            498 comments
          </p>
          <div className="text-white text-xs mt-4 space-x-2 bg-text-300">
            <a href="#" className=" rounded-sm hover:text-blue-600  uppercase">
              Read more
            </a>
            <button className=" rounded-sm uppercase hover:text-red-600">
              remove
            </button>
          </div>
        </article>
        <article className="block bg-slate-800 px-8 py-4 rounded-sm shadow-md mx-auto">
          <h4 className="text-white font-semibold tracking-wide">
            Relicensing React, Jest, Flow, and Immutable.js
          </h4>
          <p className="text-gray-400 mt-1">
            2280 points by
            <span>dwwoelfel |</span>
            498 comments
          </p>
          <div className="text-white text-xs mt-4 space-x-2 bg-text-300">
            <a href="#" className=" rounded-sm hover:text-blue-600  uppercase">
              Read more
            </a>
            <button className=" rounded-sm uppercase hover:text-red-600">
              remove
            </button>
          </div>
        </article>
      </section>
    </>
  )
}

export default Article
