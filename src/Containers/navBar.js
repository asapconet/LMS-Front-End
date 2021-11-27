import React from 'react'

export const NavBar = () => {
    return (
      <nav>
        <div className='flex'>
          <img src="" alt="Our Brand" />
          <span className='mx-4'>
            <a href="sumn.com">Home</a>
            <a href="sumn.com">About Us</a>
            <a href="sumn.com">Blog</a>
          </span>
        </div>
        <div className=''>
          <button>login</button>
          <button>sign up</button>
        </div>
      </nav>
    );
}
