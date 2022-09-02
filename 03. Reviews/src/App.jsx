import Review from "./components/Review"

function App() {
  return (
    <>
      <main className=" grid place-content-center h-screen ">
        <section className="md:max-w-[660px] pt-5 ">
          {/* Heading */}
          <div className=" py-2 flex flex-col justify-center items-center space-y-2">
            <h1 className="text-center text-slate-800 md:text-4xl text-3xl font-semibold tracking-wider">
              Our Reviews
            </h1>
            <div className="w-40 h-2 bg-pink-500"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  )
}

export default App
