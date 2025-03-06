import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const [page, setPage] = useState('/');

    const links = [
        { pathname: '.', text: "Home" },
        { pathname: '/Projects', text: "Projects" },
        { pathname: '/Work', text: "Experience" },
    ]

    const externalLinks = [
        { pathname: 'https://github.com/scirrincione', text: "Github" },
        { pathname: 'https://www.linkedin.com/in/sofia-cirrincione-63b651223/', text: "Linkedin" },
        { pathname: 'https://github.com/scirrincione/portfolio_website', text: "Website Repo"}
    ]
    const classNames = {
        NavLink: "font-bold p-1 mr-5"
    }

    return (
        <div className="w-full">
            <div className="fixed top-0 left-0 bg-bgColor2 flex pt-15 pb-15 justify-between items-center mb-8 w-full shrink border-b-5 border-borderColor">
                <div className="flex items-center space-x-4">
                    <nav>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>
                                {links.map(linkData => {
                                    return (
                                        <NavLink key={linkData.pathname}
                                            to={linkData.pathname}
                                            onClick={() => setPage(linkData.pathname)}
                                            className={`${classNames.NavLink} ${page === linkData.pathname ? 'border-b-2' : ''}`}>
                                            {linkData.text}
                                        </NavLink>
                                    );
                                })}
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className = "flex items-center text-r">
                    {externalLinks.map(linkData => {
                        return (
                            <a key={linkData.pathname}
                            href={linkData.pathname}
                            target="_blank"
                            rel="noopenter noreferrer"
                            className={classNames.NavLink}>
                                {linkData.text}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NavBar