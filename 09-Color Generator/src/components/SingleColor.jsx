import { useEffect } from "react"
import { useState } from "react"

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)

  // convert rgb into string
  const bcg = rgb.join(",")
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
      return () => clearTimeout(timeout)
    }, 3000)
  }, [alert])

  return (
    <>
      <article
        className={`color px-8 py-4 ${index > 10 && "text-white"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true), navigator.clipboard.writeText(hexValue)
        }}
      >
        <p>{weight}%</p>
        <p>{hexValue}</p>
        {alert && (
          <p className="text-xs uppercase pt-6"> copied to the clipboard</p>
        )}
      </article>
    </>
  )
}

export default SingleColor
