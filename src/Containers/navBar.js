import React from 'react'
import '../App.css'


export const NavBar = () => {

  const loginHandler = () => {
    console.log("clickeddd")
    return (null)
  }

  const signupHandler = () => {
    return null
  }
    return (
      <nav>
        <div className="flex">
          <img src="" alt="Our Brand" />
          <span className="mx-4">
            <a href="sumn.com">Home</a>
            <a href="sumn.com">About Us</a>
            <a href="sumn.com">Blog</a>
          </span>
        </div>
        <div>
          <button onClick={loginHandler} className="mx-3">login</button>
          <button onClick={signupHandler}>sign up</button>
        </div>
      </nav>
    );
}
