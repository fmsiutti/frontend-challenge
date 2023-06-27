import Image from 'next/image';
import IconLogo from '@/assets/Logo.svg';

export default function BouncingAnimation() {
    return (
        <div className="bg-main-grey rounded-xl h-96 lg:h mt-4 relative">
            <Image className="absolute left-0 animate-dvdBounce lg:animate-dvdBounceSlow" src={IconLogo} width={32} height={32} alt="Paisanos" />
        </div>
    )
}
