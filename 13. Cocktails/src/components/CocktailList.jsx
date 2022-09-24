import React from "react"
import { useGlobalContext } from "../context/context"
import { Loading, Cocktail } from "../components"
const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return (
      <section className="grid place-items-center mt-20 text-2xl tracking-wide capitalize text-gray-600">
        <p>No cocktails matched your search criteria.</p>
      </section>
    )
  }

  return (
    <>
      <section className="container mx-auto gap-5 mt-10 grid grid-cols-2 md:grid-cols-3 max-w-3xl px-2 md:px-0 py-4">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </section>
    </>
  )
}

export default CocktailList
