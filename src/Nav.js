import React, { useState } from "react"
import "./nav.scss"
import newLocal from "./prototypes/newLocal.svg"

const Nav = () => {
  const [isActive, setIsActive] = useState(true)
  const menuBtn = document.querySelector(".menu-btn")
  const hamburger = document.querySelector(".menu-btn__burger")
  const nav = document.querySelector(".nav")
  const menuNav = document.querySelector(".menu-nav")
  const navItems = document.querySelectorAll(".menu-nav__item")

  let showMenu = false

  // menuBtn.addEventListener("click", toggleMenu)
  const handleClick = (e) => {
    setIsActive((current) => !current)
  }
  function toggleMenu() {
    if (!showMenu) {
      hamburger.classList.add("open")
      nav.classList.add("open")
      menuNav.classList.add("open")
      navItems.forEach((item) => item.classList.add("open"))
      showMenu = true
    } else {
      hamburger.classList.remove("open")
      nav.classList.remove("open")
      menuNav.classList.remove("open")
      navItems.forEach((item) => item.classList.remove("open"))

      showMenu = false
    }
  }

  return (
    <div className="head">
      <div className={isActive ? "menu-btn" : "open"} onClick={handleClick}>
        <span className={isActive ? "menu-btn__burger" : "open"}></span>
      </div>

      <nav className={isActive ? "nav" : "open"}>
        <nav className="logo-img">
          <img src={newLocal} alt="" className={isActive ? "logo" : "open"} />
        </nav>

        <ul className={isActive ? "menu-nav" : "open"}>
          <li className={isActive ? "menu-nav__item active" : "open"}>
            <a href="index.html" className={isActive ? "menu-nav__item active" : ""}>
              Home
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="about.html" className={isActive ? "menu-nav__item " : ""}>
              Team
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="projects.html" className={isActive ? "menu-nav__item " : ""}>
              Projects
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="contact.html" className={isActive ? "menu-nav__item " : ""}>
              Reports
            </a>
          </li>
        </ul>
        <div className="buttons flex float-right">
          <button className="btn_1 text-white px-8 py-2 text-lg rounded-lg ">Login</button>
          <button className="btn_2 focus:outline-none text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm   dark:focus:ring-pink-900">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav

{
  /* <nav className="navbar flex justify-around space-x-4 pt-5 ">
        <div className="nav-sm ">
          <nav className="flex float-left space-x-4 ">
            <img src={newLocal} alt="" className="logo" />
          </nav>
          <nav class="nav-items flex justify-center space-x-4 ">
            <a
              href="/dashboard"
              class="nav_1 font-b text-white px-3 py-2   
              hover:text-white
              transition 
              hover:underline  hover:underline-offset-8 hover:transition hover:duration-300-delay-150 hover:delay-0 "
            >
              Home
            </a>
            <a
              href="/team"
              class="font-b text-white px-3 py-2               hover:text-white
              no-underline hover:underline  hover:underline-offset-8"
            >
              Team
            </a>
            <a
              href="/projects"
              class="font-b text-white px-3 py-2    hover:text-white no-underline hover:underline  hover:underline-offset-8"
            >
              Projects
            </a>
            <a
              href="/reports"
              class="font-b text-white px-3 py-2   hover:text-white  no-underline hover:underline  hover:underline-offset-8"
            >
              Reports
            </a>
          </nav>{" "}
          <nav className="buttons flex float-right space-x-4">
            <button className="btn_1 text-white px-8 py-2 text-lg">Login</button>
            <button className="btn_2 focus:outline-none text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-8 py-2.5  dark:focus:ring-pink-900">
              Sign up
            </button>
          </nav>
          <img src={menu} onClick={toggleMenu} alt="" className="menu w-10" />
        </div>
      </nav> */
}
