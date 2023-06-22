interface Input {
    placeHolder: string;
    className?: string;
}

export default function Input({ placeHolder, className = '' }:Input) {
    let classes = ' bg-transparent color-white w-full focus:outline-0 placeholder-white'
    return (
        <>
            <input className={className + classes} placeholder={placeHolder} />
        </>
    )
}