import { Button, Navbar, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

    const path = useLocation().pathname;

  return (
      <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1  rounded-lg text-white' style={{backgroundColor : 'rgba(202, 5, 57, 255)'}}>USW</span>Survey
        </Link>
        <form>
            <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
                <Button gradientDuoTone='purpleToBlue' outline>
                    Sign In
                </Button>
            </Link>
            <NavbarToggle />
        </div>
        <Navbar.Collapse>
            <NavbarLink> 
                <Link to='/' active={path === '/'} as={'div'}> 
                    Home
                </Link>
            </NavbarLink>
            <NavbarLink > 
                <Link to='/survey' active={path === '/survey'} as={'div'}> 
                    Survey
                </Link>
            </NavbarLink>
            <NavbarLink > 
                <Link to='/projects' active={path === '/projects'} as={'div'}> 
                    Projects
                </Link>
            </NavbarLink>
            <NavbarLink> 
                <Link to='/about' active={path === '/about'} as={'div'}> 
                    About
                </Link>
            </NavbarLink>
            <NavbarLink> 
                <Link to='/about' active={path === '/contactus'} as={'div'}> 
                    ContactUs
                </Link>
            </NavbarLink>
        </Navbar.Collapse>
      </Navbar>
  )
}
