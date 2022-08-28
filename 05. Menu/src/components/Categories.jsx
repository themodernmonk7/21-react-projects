const Categories = ({ categories, filterItems }) => {
  return (
    <>
      <section>
        {/* <!-- button container --> */}
        <div className="flex justify-center items-center mb-8 gap-2 md:space-x-4 ">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                type="button"
                className="menu-btn"
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Categories
