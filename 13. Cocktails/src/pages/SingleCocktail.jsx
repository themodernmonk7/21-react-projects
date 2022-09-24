import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Loading } from "../components"

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  const getCocktail = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }
        setCocktail(newCocktail)
      } else {
        setCocktail(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <p>NO cocktail to display</p>
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail

  return (
    <>
      <section className="container mx-auto max-w-3xl mt-10 flex flex-col justify-center items-center space-y-4 mb-5">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
          <Link to="/">Back to Home</Link>
        </button>
        <div className="flex flex-col md:flex-row justify-center items-center border px-2 py-2">
          <div className="w-1/2 ">
            <img
              src={image}
              alt={name}
              className=" w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="w-1/2 px-4 py-6 space-y-4 capitalize">
            <p className="">
              <span className="  px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                Name
              </span>
              <span>{name}</span>
            </p>
            <p>
              {" "}
              <span className=" px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                {" "}
                Category:
              </span>{" "}
              {category}
            </p>
            <p>
              {" "}
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700 capitalize">
                Info:
              </span>{" "}
              {info}
            </p>
            <p>
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                {" "}
                Glass:
              </span>{" "}
              {glass}
            </p>
            <p>
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                Instructions:
              </span>{" "}
              {instructions}
            </p>
            <p className="space-x-2">
              {" "}
              <span className="px-3 py-1 rounded-full bg-green-300/70 text-sm text-slate-700">
                Ingredients:
              </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item} </span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleCocktail
