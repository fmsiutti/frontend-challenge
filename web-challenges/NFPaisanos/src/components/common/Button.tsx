import { Button } from '@/types/Common'

export default function Button({ children, type, full = true, onClick, className = '' }:Button) {
    let classes = ` ${full && 'w-full' } rounded-3xl border-2 `
    if(type == 'primary'){
        classes += 'bg-main-blue border-main-blue py-2 px-4 hover:bg-light-blue hover:border-light-blue'
    }else if (type == 'secondary'){
        classes += 'border-medium-grey py-2 px-4 hover:bg-light-grey'
    }else if (type == 'light'){
        classes += 'border-light-grey text-sm py-1.5 px-4 hover:bg-light-grey'
    }else if (type == 'no-border'){
        classes += 'border-0 text-sm py-1.5 px-4 hover:bg-light-grey'
    }

    return (
        <button onClick={onClick} className={className + classes}>{children}</button>
    )
}