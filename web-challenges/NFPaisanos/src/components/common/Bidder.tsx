import Image from 'next/image'

interface Bidder {
    image: string;
    name: string;
    index?: number;
}

export default function Bidder({ image, name, index = 0 }:Bidder) {
    return (
        <span style={{left: `${index * 18}px`}} className="group/bidder cursor-pointer hover:scale-110 absolute rounded-full bg-main-grey p-0.5">
            <Image alt={name} width={20} height={20} src={image} />
            <span className="absolute left-[50%] -translate-x-[50%] top-[35px] bg-white text-light-grey py-0.5 px-1.5 text-xs opacity-0 group-hover/bidder:opacity-100 whitespace-nowrap rounded-md after:bg-white after:absolute after:left-[50%] after:-translate-x-[50%] after:bottom-[18px] after:rotate-45 after:h-2 after:w-2">{name}</span>
        </span>
    )
}