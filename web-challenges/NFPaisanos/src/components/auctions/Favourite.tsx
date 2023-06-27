import RoundedButton from '../common/RoundedButton';
import Heart from '@/assets/Heart.svg'
import HeartFull from '@/assets/HeartFull.svg'
import { useState } from 'react';
import useSound from 'use-sound';

export default function Favourite({ className = ''}) {

    const [active, setActive] = useState(false)
    
    const [playSound] = useSound('/sounds/pop.mp3')

    const toggleActive = () => {
        setActive(!active)
        playSound()
    }

    return (
        <RoundedButton onClick={() => toggleActive()} icon={active ? HeartFull : Heart} size="sm" type="" className={` bg-black hover:opacity-75  ${className}`} />
    )
}