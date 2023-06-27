import Link from "next/link"
import { Button, CloseButton } from '@/components/common';
import { useState } from "react";
import Hamburger from './Hamburger';

export default function NavMenu(){

    const [loggedIn, setLoggedIn] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleLogin = () => {
        setLoggedIn(!loggedIn)
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const loggedInText = loggedIn ? "0x526A...B38D" : "Connect Wallet"

    return (
        <>
            <Hamburger className="md:hidden" onClick={toggleMenu} />
            <div style={{transition: 'transform .3s, opacity .3s'}} className={`basis-full ${menuOpen ? '' : 'translate-x-full'} md:translate-x-0 origin-right w-full fixed h-full z-50 bg-dark-grey top-0 left-0 px-4 justify-between items-center md:px-0 md:pl-5 md:relative md:bg-transparent md:w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
                <button onClick={toggleMenu} className="md:hidden absolute right-6 top-6">
                    <CloseButton />
                </button>
                <ul className="flex flex-col mt-2 md:mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li className="py-4 md:py-0">
                        <Link onClick={toggleMenu} href="/" className="text-sm block py-2 pr-4 pl-3 text-light-grey hover:text-white">Discover</Link>
                    </li>
                    <li className="py-4 md:py-0">
                        <Link onClick={toggleMenu} href="/" className="text-sm block py-2 pr-4 pl-3 text-light-grey hover:text-white">What we do</Link>
                    </li>
                </ul>
                <div className="flex md:order-2 py-4 md:py-0">
                    <Button onClick={toggleLogin} className={loggedIn ? 'bg-light-grey hover:bg-white hover:text-light-grey hover:border-white' : ''} type="light">{loggedInText}</Button>
                </div>
            </div>
        </>
    )
}