interface Badge {
    content: string;
    color: string;
    fill: boolean;
}

export default function Badge({ content, color, fill }:Badge) {
    let borderColor = "border-custom-blue"
    let textColor = "text-custom-blue"
    let bgColor = "bg-custom-blue"

    if (color == 'green'){
        borderColor = "border-custom-green"
        textColor = "text-custom-green"
        bgColor = "bg-custom-green"
    }

    return (
        <span className={`whitespace-nowrap rounded p-1.25 border-2 font-semibold text-xs ${borderColor} ${fill ? `${bgColor} text-white` : ` ${textColor}`} `}>{content}</span>
    )
}