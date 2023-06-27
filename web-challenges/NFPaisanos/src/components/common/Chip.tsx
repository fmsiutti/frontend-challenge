import { Chip } from "@/types/Common"

export default function Chip({ content, active, onClick, className= "" }:Chip) {

    return (
        <button onClick={onClick} className={`font-semibold text-sm py-1 px-4 rounded-full  ${active? 'text-dark-grey bg-white' : ' text-light-grey hover:text-dark-grey hover:opacity-75 hover:bg-white'}`}>{content}</button>
    )
}