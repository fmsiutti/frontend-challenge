import RoundedButton from '../common/RoundedButton';
import Heart from '../../assets/Heart.svg'
import HeartFull from '../../assets/HeartFull.svg'
import { useState } from 'react';

export default function Favourite({ className = ''}) {

    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <RoundedButton onClick={() => toggleActive()} icon={active ? HeartFull : Heart} size="sm" type="" className={` bg-black hover:opacity-75  ${className}`} />
    )
}