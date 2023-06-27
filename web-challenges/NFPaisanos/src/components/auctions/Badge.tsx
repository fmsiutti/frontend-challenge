import { Badge } from '@/types/Auction'

export default function Badge({ content, color, fill, className = '' }:Badge) {
    let borderColor = `border-custom-${color}`
    let textColor = fill ? 'text-white' : `text-custom-${color}`
    let bgColor = fill ? `bg-custom-${color}` : ''

    return (
        <span className={`${className} whitespace-nowrap rounded px-1.5 py-1 border-2 font-semibold text-xs ${borderColor} ${bgColor} ${textColor} `}>{content}</span>
    )
}