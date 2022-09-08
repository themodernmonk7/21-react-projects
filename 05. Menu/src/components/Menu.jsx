import React, { useState } from "react"

import Card from "./Card"

const Menu = ({ props }) => {
  return (
    <>
      {/* Articles Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {props.map((menuItem) => {
          return <Card key={menuItem.id} {...menuItem} />
        })}
      </div>
    </>
  )
}

export default Menu
