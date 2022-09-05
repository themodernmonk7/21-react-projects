import React from "react"
import Image1 from "../assets/Image_1.jpg"
import Image2 from "../assets/Image_2.jpg"
import Image3 from "../assets/Image_3.jpg"
import Image4 from "../assets/Image_4.jpg"
import Image5 from "../assets/Image_5.jpg"
import Image6 from "../assets/Image_6.jpg"
import Image7 from "../assets/Image_7.jpg"
import Image8 from "../assets/Image_8.jpg"
import Image9 from "../assets/Image_9.jpg"
import ProfileImage from "../assets/avatar-ali.png"
const Card = () => {
  return (
    <>
      <section className="container mx-auto space-y-8 my-6">
        <div className="text-center space-x-6 text-sm md:text-xl ">
          <button className="bg-black text-white px-4 rounded-full py-2">
            Home
          </button>
          <button className="">Videos</button>
          <button>Leaderboard</button>
          <button>Challenges</button>
        </div>
        <div className="flex justify-between items-center px-3 md:px-6">
          <h1 className="text-2xl md:text-2xl text-gray-800">
            Free Stock Photos
          </h1>
          <button className="border px-2 md:px-5 py-3 rounded-md text-xl text-gray-800">
            Trending
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-3 md:gap-6 md:px-6 ">
          <article className="relative overflow-hidden  photo">
            <img src={Image1} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white text-xs md:text-base">
                <h4 className=" font-semibold tracking-wide ">
                  Samsung Memory
                </h4>
                <p className="font-light ">17 Likes</p>
              </div>
              <a href="#">
                <img
                  src={ProfileImage}
                  alt=""
                  className="w-10 h-10 object-cover object-center rounded-full"
                />
              </a>
            </div>
          </article>

          <article className="relative overflow-hidden  photo">
            <img src={Image2} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image3} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image4} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image5} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image6} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image7} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image8} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image9} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative overflow-hidden  photo">
            <img src={Image1} alt="" className="object-cover object-center" />
            <div className="bg-black/50 flex justify-between  items-center px-4 py-2 absolute bottom-0 w-full transform translate-y-full photo-info transition-all duration-300 ease-linear">
              <div className="text-white">
                <h4 className=" font-semibold tracking-wide">Samsung Memory</h4>
                <p className="font-light">17 Likes</p>
              </div>
              <a href="#">
                <img src={ProfileImage} alt="" className="w-10 h-10" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Card
