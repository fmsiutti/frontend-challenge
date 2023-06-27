import Image from 'next/image'

interface RoundedButton {
    type: string;
    icon: string;
    className?: string;
    size?: string;
    onClick?: () => void;
}

export default function RoundedButton({ icon, type, onClick = () => {}, size = '', className = '' }:RoundedButton) {
    let classes = 'rounded-full flex justify-center items-center '
    if(type == 'main'){
        classes += ' bg-main-blue hover:bg-light-blue '
    }else if(type == 'secondary'){
        classes += ' border-medium-grey hover:border-2 '
    }

    if(size == 'sm'){
        classes += 'h-[32px] w-[32px] '
    }else {
        classes += 'h-[40px] w-[40px] '
    }

    return (
        <button onClick={onClick} className={classes + className}><Image src={icon} alt="icon" width={24} height={24} /></button>
    )
}