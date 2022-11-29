import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import tefa1 from "./images/tefa1.jpg"
import tefa2 from "./images/tefa2.jpg"
import tefa3 from "./images/tefa3.jpg"
import "tailwindcss/tailwind.css"
import "./App.css"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const handleDragStart = (e) => e.preventDefault()
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}
const items = [
  <div className="card flex w-3/4 rounded-md justify-around border-2 gb-gray-200  ">
    <div className=" border-1 text-center bg-red-200 h-60 grid content-center">
      {" "}
      <h1>
        Our live performance statistics and customized reports give you access to valuable data
        about your cam paign. A complete overview
      </h1>
      <br />
      <h2>Mohamed Atef</h2>
      <br />
      <h2>frontend developer</h2>
    </div>
  </div>,
  <div className="card flex w-3/4 rounded-md justify-around border-2 gb-gray-200  ">
    <div className=" border-1 text-center bg-red-200 h-60 grid content-center">
      {" "}
      <h1>
        Our live performance statistics and customized reports give you access to valuable data
        about your cam paign. A complete overview
      </h1>
      <br />
      <h2>Mohamed Atef</h2>
      <br />
      <h2>frontend developer</h2>
    </div>
  </div>,
  <div className="card flex w-3/4 rounded-md justify-around border-2 gb-gray-200  ">
    <div className=" border-1 text-center bg-red-200 h-60 grid content-center">
      {" "}
      <h1>
        Our live performance statistics and customized reports give you access to valuable data
        about your cam paign. A complete overview
      </h1>
      <br />
      <h2>Mohamed Atef</h2>
      <br />
      <h2>frontend developer</h2>
    </div>
  </div>,
  <div className="card flex w-3/4 rounded-md justify-around border-2 gb-gray-200  ">
    <div className=" border-1 text-center bg-red-200 h-60 grid content-center">
      {" "}
      <h1>
        Our live performance statistics and customized reports give you access to valuable data
        about your cam paign. A complete overview
      </h1>
      <br />
      <h2>Mohamed Atef</h2>
      <br />
      <h2>frontend developer</h2>
    </div>
  </div>,
  <div className="card flex w-3/4 rounded-md justify-around border-2 gb-gray-200  ">
    <div className=" border-1 text-center bg-red-200 h-60 grid content-center">
      {" "}
      <h1>
        Our live performance statistics and customized reports give you access to valuable data
        about your cam paign. A complete overview
      </h1>
      <br />
      <h2>Mohamed Atef</h2>
      <br />
      <h2>frontend developer</h2>
    </div>
  </div>,

  // <img src={tefa1} className="h-80" onDragStart={handleDragStart} role="presentation" />,
  // <img src={tefa2} className="h-80" onDragStart={handleDragStart} role="presentation" />,
  // <img src={tefa3} className="h-80" onDragStart={handleDragStart} role="presentation" />,
  // <img src={tefa3} className="h-80" onDragStart={handleDragStart} role="presentation" />,
]

const Gallery = () => {
  return <AliceCarousel items={items} mouseTracking handleDragStart responsive={responsive} />
}

export default Gallery
