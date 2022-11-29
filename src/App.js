import "./App.scss"
import "tailwindcss/tailwind.css"
import diverse from "./prototypes/diverse.svg"
import fraud from "./prototypes/fraud.svg"
import line from "./prototypes/line.svg"
import robust from "./prototypes/robust.svg"
import optmization from "./prototypes/optmization.svg"
import statistics from "./prototypes/statistics.svg"
import sponsers from "./prototypes/sponsers.svg"
import newLocal from "./prototypes/newLocal.svg"
import window from "./prototypes/window.svg"
import advertiseiIcon from "./prototypes/advertise-icon.svg"
import coinIcon2 from "./prototypes/coin-icon2.svg"
import payments from "./prototypes/payments.svg"
import menu from "./prototypes/menu.svg"

import Footer from "./Footer"
import Item from "./Item"
import Nav from "./Nav"

const App = () => {
  return (
    <div
      className="App  place-content-center bg-gradient-to-r from-purple-900 via-purple-1000 to-blue-800 
    
    "
    >
      <Nav />

      <div className="window  justify-center mt-20  p-7 ">
        <img src={window} alt="" className="window-logo flex justify-center" />
        <div className="flex-col ">
          <div className="letter flex justify-center  rounded-xl   mt-5  mx-auto  rounded-xl  overflow-hidden md:max-w-3xl">
            <h1
              className="   text-center text-white font-sans text-lg py-2 w-full
            
             lg:bg-opacity-0 lg:text-blue-700 lg:py-10 lg:text-2xl mt-5"
            >
              Zwaar is a gateway for affiliates,media buyers and promoters that excel at
              performance and conversions
            </h1>
          </div>
          <div className="register    text-center grid-flow-row auto-rows-max     mt-16 ">
            <button
              className="btn_1 focus:outline-none text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300
            md:max-w-3xl
            font-medium rounded-lg text-lg  h-12 w-full md:w-full lg:w-48 mb-5 md:mr-5 dark:focus:ring-pink-900"
            >
              Create Capmaign
            </button>
            <button
              className="btn_2 bg-sky-600 hover:bg-sky-500 active:bg-sky-300 focus:outline-none focus:ring text-white
            font-medium rounded-lg text-lg w-full md:w-full lg:w-48 h-12 focus:ring-sky-200  md:ml-10 "
            >
              Unpoarding Manger
            </button>
          </div>
        </div>
      </div>

      <div className="flex  justify-center gap-20 h-80 mt-40 mx-auto ">
        <div className="left w-1/3  text-center  text-green-800 font-serif text-2xl relative rounded-md border-2 drop-shadow-md ">
          <div className="flex left-20 ml-12 absolute  -top-10   ">
            <div
              className=" border-indigo-500/100 rounded-t-lg mt-1
                 
            w-2 h-9 bg-gray-300"
            ></div>
            <div className="middle  w-60 relative grid font-serif text-2xl content-center  h-20 ">
              Quality
            </div>
            <div
              className="border-indigo-500/100 rounded-t-lg mt-1
                 
                 w-2 h-9 bg-gray-300"
            ></div>
          </div>

          <div className="flex border-1 mt-10 justify-between">
            <div className="flex flex-col border-1  w-60 mt-5 ml-3 h-60">
              <img src={diverse} alt="fraud" className="" />
              <p className="mt-2">Divers Traffic</p>
              <div className="text-center ml-10 mt-2 text-blue-800 font-serif text-base w-40">
                Reach audience from a wide range of qualities from interest to gender to age you
                need it we have it
              </div>
            </div>

            <img src={line} alt="line" className="mt-5" />

            <div className="flex flex-col mt-5 mr-3 border-1  w-60">
              <img src={fraud} alt="fraud" className="" />
              <p>Divers Traffic</p>

              <p className="text-center ml-10 mt-1 text-blue-800 font-serif text-base w-40">
                Enjoy maximum safety with the latest fraud preventions technologies to ensure you
                receive bot free traffic
              </p>
            </div>
          </div>
        </div>

        <div className="left w-1/3 flex text-center drop-shadow-md border-2  text-blue-800 font-serif text-2xl relative  ">
          <div className="flex left-20 ml-12 absolute  -top-10   ">
            <div
              className=" border-indigo-500/100 rounded-t-lg mt-1
                 
            w-2 h-9 bg-gray-300"
            ></div>
            <div className="middle grid  content-center w-60 relative   h-20  ">Performance</div>
            <div
              className="border-indigo-500/100 rounded-t-lg mt-1
                 
                 w-2 h-9 bg-gray-300"
            ></div>
          </div>

          <div className="flex border-1 mt-10 justify-between">
            <div className="flex flex-col border-1  w-60 mt-5 ml-3 h-60">
              <img src={robust} alt="fraud" className="" />
              <p className="mt-2">Divers Traffic</p>
              <div className="text-center ml-10 mt-2 text-blue-800 font-serif text-base w-40">
                Reach audience from a wide range of qualities from interest to gender to age you
                need it we have it
              </div>
            </div>

            <img src={line} alt="line" className="mt-5" />

            <div className="flex flex-col mt-5 mr-3 border-1  w-60">
              <img src={optmization} alt="fraud" className="" />
              <p>Divers Traffic</p>

              <p className="text-center ml-5 mt-1 text-blue-800 font-serif text-base w-60">
                You think you can go big? Well we will help you get even bigger with a highly
                experienced team and the best tools to scale your campaigns to whole new level of
                success
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero flex flex-col  ">
        <img src={statistics} alt="static" className="static border-1" />

        <div className="intro justify-center  grid content-center ">
          <h1 className="title1 border-1  text-green-400  text-center text-5xl font-thin ">
            With us you get many features and possibilities
          </h1>
          <h1 className="title2 border-1  text-white  font-sans text-2xl text-center mt-6 ">
            Our live performance statistics and customized reports give you access to valuable data
            about your cam paign. A complete overview to refine your campaigns and better target
            your audience. You can track your conversions even via pixel tracking
          </h1>

          <img src={sponsers} alt="sponsers" className=" sponsers border-1 " />
          <Item />
          <div className="advertise  flex justify-center bg-brown-200 ">
            <img
              src={advertiseiIcon}
              alt="sponsers"
              className="img_1 prose prose-img:rounded-xl "
            />

            <img src={coinIcon2} alt="sponsers" className="img_2 " />
          </div>
          <div className="payments">
            <h1 className="text-center text-blue-600 font-bold font-serif   text-2xl">
              You Can Top Up With
            </h1>

            <img src={payments} alt="" className="" />
          </div>
        </div>
      </div>
      <Footer className="" />
    </div>
  )
}

export default App
