import { useState } from "react"
import { Title, Categories, Menu } from "./components"
import items from "./constants/data"
const allCategories = ["all", ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // Filter Items
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <main className="container mx-auto">
        <Title />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </main>
    </>
  )
}

export default App
