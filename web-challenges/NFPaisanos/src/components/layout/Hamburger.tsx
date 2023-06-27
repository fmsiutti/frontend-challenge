import HamburgerIcon from '@/assets/Hamburger.svg'
import Image from 'next/image';

export default function Hamburger({ onClick = () => {}, className = '' }){
    return (
        <button onClick={onClick} className={className}>
            <Image src={HamburgerIcon} alt="Open Menu" width={32} height={32} />
        </button>
    )
}