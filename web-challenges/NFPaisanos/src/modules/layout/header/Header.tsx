import { Logo } from '@/components/layout';
import NavMenu from './NavMenu';

export default function Header(){
    return (<header className="container sticky top-0 z-40">
        <nav className="bg-dark-grey flex justify-between items-center pt-10 md:pt-4 pb-4">
            <div className="py-2 min-w-[174px] box-content pr-8  border-r-2 border-medium-grey">
                <Logo />
            </div>
            <NavMenu />
        </nav>
    </header>)
}