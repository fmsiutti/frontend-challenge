import Image from 'next/image'

interface Author {
    image?: string;
    title: string;
    text: string;
    color?: string;
}

export default function Author({ image, text, title, color }:Author) {
    return (
        <div className="flex">
            {image && <Image className="rounded-full" alt={text} width={50} height={50} src={image} />}
            {color && <span className="w-[50px] h-[50px] bg-custom-orange rounded-full"><span className="m-[12px] w-[26px] h-[26px] rounded-md border-2 border-white block" ></span></span>}
            <div className="flex flex-col pl-2">
                <span className="text-light-grey text-sm">{title}</span>
                <span className="pt-1">{text}</span>
            </div>
        </div>
    )
}