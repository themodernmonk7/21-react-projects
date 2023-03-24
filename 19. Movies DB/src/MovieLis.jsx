import React from "react"
import poster from "./assets/Poster1.jpg"
const MovieLis = () => {
  return (
    <section className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center my-20">
      <article className="w-3/5 sm:w-3/4 md:w-4/5 transform hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-1 duration-300  relative photo overflow-hidden">
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <p className="absolute top-3 left-3 bg-yellow-400/80 text-black rounded-sm text-xs px-3 py-1 font-bold backdrop-blur-md">
          TV Series
        </p>
        <div className="absolute  bottom-0 bg-white/5 backdrop-blur-sm w-full h-32 px-8 flex flex-col justify-center space-y-1 text-gray-200 transform translate-y-full photo-info transition-all duration-300 ease-linear">
          <p className="text-sm tracking-wide">
            USA, <span className="text-yellow-400"> 2020 </span>
          </p>
          <h4 className="font-bold uppercase">Avengers Endgame</h4>
          <p className="text-gray-400">Adventure, Horror</p>
        </div>
      </article>
      <article className="w-3/5 sm:w-3/4 md:w-4/5 transform hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-1 duration-300  relative photo overflow-hidden">
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <p className="absolute top-3 left-3 bg-yellow-400/80 text-black rounded-sm text-xs px-3 py-1 font-bold backdrop-blur-md">
          TV Series
        </p>
        <div className="absolute  bottom-0 bg-white/5 backdrop-blur-sm w-full h-32 px-8 flex flex-col justify-center space-y-1 text-gray-200 transform translate-y-full photo-info transition-all duration-300 ease-linear">
          <p className="text-sm tracking-wide">
            USA, <span className="text-yellow-400"> 2020 </span>
          </p>
          <h4 className="font-bold uppercase">Avengers Endgame</h4>
          <p className="text-gray-400">Adventure, Horror</p>
        </div>
      </article>
      <article className="w-3/5 sm:w-3/4 md:w-4/5 transform hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-1 duration-300  relative photo overflow-hidden">
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <p className="absolute top-3 left-3 bg-yellow-400/80 text-black rounded-sm text-xs px-3 py-1 font-bold backdrop-blur-md">
          TV Series
        </p>
        <div className="absolute  bottom-0 bg-white/5 backdrop-blur-sm w-full h-32 px-8 flex flex-col justify-center space-y-1 text-gray-200 transform translate-y-full photo-info transition-all duration-300 ease-linear">
          <p className="text-sm tracking-wide">
            USA, <span className="text-yellow-400"> 2020 </span>
          </p>
          <h4 className="font-bold uppercase">Avengers Endgame</h4>
          <p className="text-gray-400">Adventure, Horror</p>
        </div>
      </article>
      <article className="w-3/5 sm:w-3/4 md:w-4/5 transform hover:scale-105 transition ease-in-out delay-150 hover:-translate-y-1 duration-300  relative photo overflow-hidden">
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <p className="absolute top-3 left-3 bg-yellow-400/80 text-black rounded-sm text-xs px-3 py-1 font-bold backdrop-blur-md">
          TV Series
        </p>
        <div className="absolute  bottom-0 bg-white/5 backdrop-blur-sm w-full h-32 px-8 flex flex-col justify-center space-y-1 text-gray-200 transform translate-y-full photo-info transition-all duration-300 ease-linear">
          <p className="text-sm tracking-wide">
            USA, <span className="text-yellow-400"> 2020 </span>
          </p>
          <h4 className="font-bold uppercase">Avengers Endgame</h4>
          <p className="text-gray-400">Adventure, Horror</p>
        </div>
      </article>
    </section>
  )
}

export default MovieLis
