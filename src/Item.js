import React from "react"
import "./App.scss"
import AliceCarousel from "react-alice-carousel"
// import "react-alice-carousel/lib/alice-carousel.css"

const Item = () => {
  return (
    <div className="alice ">
      <AliceCarousel
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 3,
          },
        }}
        mouseTracking
        disableDotsControls
        disableButtonsControls
        controlsStrategy="responsive"
        autoPlay={true}
        autoPlayInterval={5000}
        infinite={true}
        keyboardNavigation={true}
      >
        <div className="difine bg-white ">
          <div className=" flex  justify-around ">
            <div className="flex font-semibold w-3/4  justify-center border-1 text-center  h-60 grid content-center">
              {" "}
              <h1 className="text-center text-blue-700 text-1xl">
                Our live performance statistics and customized reports give you access to valuable
                data about your cam paign. A complete overview
              </h1>
              <br />
              <h2 className="text-red-600 text-2xl ">Mohamed Atef</h2>
              <br />
              <h2 className="text-red-700 text-1xl ">frontend developer</h2>
            </div>
          </div>
        </div>
        <div className="difine bg-white ">
          <div className=" flex  justify-around ">
            <div className="flex font-semibold w-3/4  justify-center border-1 text-center  h-60 grid content-center">
              {" "}
              <h1 className="text-center text-blue-700 text-1xl">
                Our live performance statistics and customized reports give you access to valuable
                data about your cam paign. A complete overview
              </h1>
              <br />
              <h2 className="text-red-600 text-2xl ">Mohamed Atef</h2>
              <br />
              <h2 className="text-red-700 text-1xl ">frontend developer</h2>
            </div>
          </div>
        </div>
        <div className="difine bg-white ">
          <div className=" flex  justify-around ">
            <div className="flex font-semibold w-3/4  justify-center border-1 text-center  h-60 grid content-center">
              {" "}
              <h1 className="text-center text-blue-700 text-1xl">
                Our live performance statistics and customized reports give you access to valuable
                data about your cam paign. A complete overview
              </h1>
              <br />
              <h2 className="text-red-600 text-2xl ">Mohamed Atef</h2>
              <br />
              <h2 className="text-red-700 text-1xl ">frontend developer</h2>
            </div>
          </div>
        </div>
        <div className="difine bg-white ">
          <div className=" flex  justify-around ">
            <div className="flex font-semibold w-3/4  justify-center border-1 text-center  h-60 grid content-center">
              {" "}
              <h1 className="text-center text-blue-700 text-1xl">
                Our live performance statistics and customized reports give you access to valuable
                data about your cam paign. A complete overview
              </h1>
              <br />
              <h2 className="text-red-600 text-2xl ">Mohamed Atef</h2>
              <br />
              <h2 className="text-red-700 text-1xl ">frontend developer</h2>
            </div>
          </div>
        </div>
        <div className="difine bg-white ">
          <div className=" flex  justify-around ">
            <div className="flex font-semibold w-3/4  justify-center border-1 text-center  h-60 grid content-center">
              {" "}
              <h1 className="text-center text-blue-700 text-1xl">
                Our live performance statistics and customized reports give you access to valuable
                data about your cam paign. A complete overview
              </h1>
              <br />
              <h2 className="text-red-600 text-2xl ">Mohamed Atef</h2>
              <br />
              <h2 className="text-red-700 text-1xl ">frontend developer</h2>
            </div>
          </div>
        </div>
      </AliceCarousel>
    </div>
  )
}

export default Item
