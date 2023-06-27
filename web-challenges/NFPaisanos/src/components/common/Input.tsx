import { Input } from '@/types/Common'

export default function Input({ placeHolder, onChange, inputRef, className = '' }:Input) {
    let classes = ' bg-transparent color-white w-full focus:outline-0 placeholder-white'
    return (
        <>
            <input ref={inputRef} onChange={(e) => {onChange(e.target.value)}} className={className + classes} placeholder={placeHolder} />
        </>
    )
}