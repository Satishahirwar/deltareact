import React from 'react'
import './index.css'

const Header=()=> {
  return (
    <> 
     <div className='h-20 border  main flex justify-between items-center px-16 bg-gray-200'>
        <div><h1 className='text-2xl font-bold'>Satish Kumar Ahirwar</h1></div>
        <div className='space-x-6'>
          <a href="/Home" className='hover:text-orange-600'>Home</a>
          <a href="/About" className='hover:text-orange-600'>About</a>
          <a href="/Skills" className='hover:text-orange-600'>Skills</a>
          <a href="/Fortfolio" className='hover:text-orange-600'>Fortfolio</a>
          <a href="/Contact" className='hover:text-orange-600'>Contact</a>
        </div>
        <div><button className='px-1 py-1 bg-orange-500 shadow rounded-full text-2xl text-bold'>Hire Me</button></div>
      </div>
    </>
  )
}

export default Header