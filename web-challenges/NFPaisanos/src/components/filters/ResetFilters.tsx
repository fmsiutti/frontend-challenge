import { CloseButton } from "../common"
import useSound from 'use-sound';

export default function ResetFilters({onClick = () => {}}) {

    const [playSound] = useSound('/sounds/turn-off.mp3')

    return (
        <button onClick={() => {playSound();onClick()}} className="flex items-center">
            <CloseButton />
            <span className="text-sm ml-3">Reset filters</span>
        </button>
    )
}