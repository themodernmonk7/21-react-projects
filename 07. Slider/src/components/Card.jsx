const Card = () => {
  return (
    <main className=" h-screen container mx-auto  flex justify-center items-center ">
      <section className="w-3/4 mx-auto bg-white rounded-md shadow-2xl p-8 space-y-4 xl:w-1/2">
        {/* <!--top title --> */}
        <div className="text-center space-y-2">
          <h1 className="font-semibold capitalize">What Our Client says</h1>
          <p className="text-gray-500">
            Our clients send us bunch of smilies with our services and we love
            them
          </p>
        </div>
        {/* <!-- image --> */}
        <div className="flex justify-center items-center ">
          <img
            src="/img/avatar-ali.png"
            className="shadow-lg rounded-full border-2 border-fuchsia-500 w-24 h-24"
            alt=""
          />
        </div>

        {/* <!-- info --> */}
        <header className=" flex flex-col justify-center items-center">
          <h2 className=" font-semibold tracking-wider">Raymond Galario</h2>
          <p className="text-gray-500 text-sm">Sydney, Australia</p>
          <p>stars</p>
          <p className=" w-4/6 text-center">
            You'll get the best of what you put in. The team is working at their
            best to provide us variety of spaces and homes. Had a great
            experience working with them. Thanks a lot.
          </p>
        </header>
      </section>
    </main>
  )
}

export default Card
