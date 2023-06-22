import Image from 'next/image'

interface RoundedButton {
    type: string;
    icon: string;
    className?: string;
}

export default function RoundedButton({ icon, type, className = '' }:RoundedButton) {
    let classes = 'h-[45px] w-[45px] rounded-full flex justify-center items-center'
    if(type == 'main'){
        classes += ' bg-main-blue hover:bg-light-blue '
    }else if(type == 'secondary'){
        classes += ' border-medium-grey hover:border-2 '
    }
    return (
        <button className={classes + className}><Image src={icon} alt="icon" width={25} height={25} /></button>
    )
}