import Image from 'next/image'

interface Bidder {
    image: string;
    name: string;
    index?: number;
}

export default function Bidder({ image, name, index = 0 }:Bidder) {
    return (
        <span style={{left: `${index * 22}px`}} className="absolute rounded-full bg-main-grey p-0.75">
            <Image alt={name} width={25} height={25} src={image} />
        </span>
    )
}