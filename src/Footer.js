import React from "react"
import bigArrow from "./prototypes/bigArrow.svg"
import smallArrow from "./prototypes/smallArrow.svg"
import zwarIcon from "./prototypes/zwarIcon.svg"
import mediaIcon from "./prototypes/mediaIcon.svg"

const PaymentMethods = () => {
  return (
    <div className="footer flex flex-col justify-center bg-gradient-to-r from-blue-800 via-violet-700  to-purple-800 ">
      <div className="first flex-col ">
        <div className="letter  text-center h-32 grid content-end ">
          <h1 className="text-white text-white font-bold font-serif   text-2xl">
            Subscribe to our newsletter
          </h1>
          <h2 className="text-white text-white font-bold font-serif   text-1xl">
            our live performance statistics and customized reports give you access
          </h2>
        </div>

        <div className="input flex justify-center  content-start h-20">
          <label class="relative block ">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class="placeholder:italic w-96  h-12 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter Your Email here..."
              type="text"
              name="search"
            />
          </label>
          <img src={smallArrow} alt="" className="small-arrow absolute ml-56  " />

          <button class=" h-12 w-44 focus:outline-none text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg related ">
            Subscribe
          </button>
          <img src={bigArrow} alt="" className="big-arrow absolute ml-64  " />
        </div>
      </div>

      <div className="second flex w-full  justify-center">
        <div className="left-col  flex mt-5 flex-col w-2/4 border-1 grid ">
          <img src={zwarIcon} alt="" className=" border-1 w-1/2 ml-4 " />

          <div className="flex justify-center">
            <h1 className="w-2/3 text-center text-white border-1 mr-11 leading-relaxed font-serif grid  text-1xl">
              Zwaar is an Ad Network the first ad network in middle east, established in 2010 the
              network has grown rapidly to become one of the top ad network worldwide thanks to its
              high satisfaction rate and the decent ROI it provides for thouthands of media buyers,
              affiliates and promoters
            </h1>
          </div>

          <img src={mediaIcon} alt="" className=" mt-2 border-1  w-1/2" />
        </div>

        <div className="right-col flex  mt-5 text-white  w-2/4   ">
          <div className="flex flex-col  text-center leading-10 justify-center corder-1 w-1/2">
            <ul>
              <li>
                <h1 className="font-bold font-mono  text-white  text-1xl">Useful Links</h1>
              </li>
              <li>Monetize</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="flex flex-col  leading-10 justify-center corder-1 w-1/2">
            <ul className="">
              <li>
                <h1 className="font-bold font-mono  text-white text-1xl">Useful Links</h1>
              </li>
              <li>Monetize</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods
