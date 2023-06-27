import Link from 'next/link';
import Image from 'next/image';
import IconLogo from "@/assets/Logo.svg"

export default function Logo() {
    return (
        
        <Link className="flex items-center" href="/" >
            <Image src={IconLogo} width={32} height={32} alt="NFPaisanos" />
            <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NFPaisanos</span>
        </Link>
    )
}