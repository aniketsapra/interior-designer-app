import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'

const Navbar = () => {
  return (
    <header className='fixed py-8 z-10 w-full font-lora bg-white'>
        <nav className='flex flex-col justify-between items-center max-container'>
          <div>

            <div>
              <a href='/'>
                <h3 className='text-center text-2xl text-custeal hover:text-cusnavy  transition-colors duration-400 ease-in-out'>abhisheksapradesigns.</h3>
              </a>
            </div>

            <div>
            <ul className='flex-1 flex mt-3 justify-center items-center gap-10 max-lg:hidden'>
              <li className='mr-6'>
                <Link to="/" className="customtext">Home</Link>
              </li>
              <li className='mr-6'>
                <Link to="/portfolio" className="customtext">Portfolio</Link>
              </li>
              <li className='mr-6'>
                <Link to="/about" className="customtext">About</Link>
              </li>
              <li className='mr-6'>
                <Link to="/contact" className="customtext">Contact</Link>
              </li>
            </ul>
            </div> 

          </div>
        </nav>
        <div className='flex justify-end items-end mr-5 text-custeal hover:text-cusnavy  transition-colors duration-400 ease-in-out'>
            <a href='https://www.instagram.com/abhisheksapradesigns/' target='_blank' rel="noopener noreferrer"> 
              <InstagramIcon />
            </a>
          </div>
    </header>
  )
}

export default Navbar
