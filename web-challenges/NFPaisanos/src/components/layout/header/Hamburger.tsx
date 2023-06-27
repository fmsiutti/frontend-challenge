import HamburgerIcon from '@/assets/Hamburger.svg'
import Image from 'next/image';

interface Hamburger {
    className?:string;
    onClick: () => void
}

export default function Hamburger({ onClick, className='' }:Hamburger){

    return (
        <button onClick={onClick} className={className}>
            <Image src={HamburgerIcon} alt="Open Menu" width={32} height={32} />
        </button>
    )
}