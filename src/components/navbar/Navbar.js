import React,{useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className='navbar'>
        <div className='container'>
            <h1><Link className="alink" to="/"><span><BsFillHouseFill/>MED</span>Locator</Link></h1>
            <button className='btn'><Link className="alink" to="/mainlogin">Sign In</Link></button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link className="alink" to="/register">Register</Link></li>
                <li><Link className="alink" to="/mainlogin">Login</Link></li>
                <li><Link className="alink" to="/produ">Products</Link></li>
                <li><a href='https://www.google.com/'>About</a></li>
                <li><a href='https://www.google.com/'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
            {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
            </div>
        </div>
    </div>
  )
}

export default Navbar