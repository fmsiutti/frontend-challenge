import Link from "next/link"
import Logo from "@/assets/Logo"
import Button from '../../common/Button';

export const Header = function(){

return (<header>
    <nav className="px-4 lg:px-6 py-5">
        <div className="container flex items-center mx-auto">
            <div className="py-2 pr-8 border-r-2 border-medium-grey">
                <Link className="flex items-center" href="/" >
                    <Logo />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NFPaisanos</span>
                </Link>
            </div>
            <div className="pl-4 basis-full hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="/components" className="text-sm block py-2 pr-4 pl-3 text-light-grey hover:text-white">Discover</Link>
                    </li>
                    <li>
                        <Link href="/components" className="text-sm block py-2 pr-4 pl-3 text-light-grey hover:text-white">What we do</Link>
                    </li>
                </ul>
                <div className="flex lg:order-2">
                    <Button type="light">Connect Wallet</Button>
                </div>
            </div>
        </div>
    </nav>
</header>)
}