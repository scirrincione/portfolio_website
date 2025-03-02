import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router';

function NavBar() {
    const [page, setPage] = useState('document.location.pathname')

    const links = [
        { pathname: '/', text: "Home" },
        { pathname: '/Projects', text: "Projects" },
    ]
    const classNames = {
        NavLink: "text-textColor font-bold p-1"
    }

    return (
        <div className="w-full">
            <div className="absolute top-0 left-0 bg-bgColor2 flex p-15 justify-between items-center mb-8 w-full shrink">
                <div className="flex items-center space-x-4">
                    <nav>
                        <ul>
                            <li>
                                {links.map(linkData => {
                                    return (
                                        <NavLink key={linkData.pathname}
                                            to={linkData.pathname}
                                            onClick={() => setPage(linkData.pathname)}
                                            className={`${classNames.NavLink} ${page === linkData.pathname ? 'bg-jasmine border-b-2 mr-8' : 'mr-8'}`}>
                                            {linkData.text}
                                        </NavLink>
                                    );
                                })}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar