import Logo from '../../common/Logo';
import NavMenu from './NavMenu';

export default function Header(){
    return (<header className="mt-[80px]">
            <nav className="fixed top-0 z-40 bg-dark-grey container flex justify-between items-center mx-auto py-4">
                <div className="py-2 min-w-[174px] box-content pr-8  border-r-2 border-medium-grey">
                    <Logo />
                </div>
                <NavMenu />
            </nav>
    </header>)
}