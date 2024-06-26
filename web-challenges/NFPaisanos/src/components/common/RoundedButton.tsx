import Image from 'next/image'
import { RoundedButton } from '@/types/Common'
import useSound from 'use-sound';

export default function RoundedButton({ icon, type, onClick = () => {}, size = '', className = '' }:RoundedButton) {
    let classes = 'rounded-full flex justify-center items-center '
    if(type == 'main'){
        classes += ' bg-main-blue hover:bg-light-blue '
    }else if(type == 'secondary'){
        classes += ' border-medium-grey hover:border-2 '
    }

    if(size == 'sm'){
        classes += 'h-[32px] w-[32px] '
    }else {
        classes += 'h-[40px] w-[40px] '
    }

    const [playSound] = useSound('/sounds/turn-off.mp3')

    return (
        <button onClick={() => { playSound();onClick()}} className={classes + className}><Image src={icon} alt="icon" width={24} height={24} /></button>
    )
}