import React from 'react';
import logo from '../assets/Logo.svg'
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div className='flex'>
            <Link to="/">
                <img src={logo} width={160} height={32} loading="lazy"/>
            </Link>
            <nav className='flex gap-5'>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>

                <div >
                    {
                        <Link to="/login">
                            <button>
                                Login
                            </button>
                        </Link>
                    }
                    {
                        <Link to="/signup">
                            <button>
                                Signup
                            </button>
                        </Link>
                    }
                    {
                        <Link to="/">
                            <button>
                                Logout
                            </button>
                        </Link>
                    }{
                        <Link to="/dashboard">
                            <button>
                                Dashboard
                            </button>
                        </Link>
                    }
                </div>
            </nav>
        </div>  
    );
}

export default Navbar;
