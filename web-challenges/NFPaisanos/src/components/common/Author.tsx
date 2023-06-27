import Image from 'next/image'

interface Author {
    image?: string;
    title: string;
    text: string;
    color?: string;
}

export default function Author({ image, text, title, color }:Author) {
    return (
        <div className="flex font-alternative">
            {image && <Image className="rounded-full" alt={text} width={40} height={40} src={image} />}
            {color && <span className={`w-[40px] h-[40px] bg-custom-${color} rounded-full`}><span className="m-[10px] w-[20px] h-[20px] rounded-md border-2 border-white block" ></span></span>}
            <div className="flex flex-col pl-2">
                <span className="text-light-grey text-xs">{title}</span>
                <span className="text-sm pt-1 whitespace-nowrap	">{text}</span>
            </div>
        </div>
    )
}