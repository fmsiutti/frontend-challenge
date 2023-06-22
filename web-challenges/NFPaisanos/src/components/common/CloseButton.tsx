
export default function CloseButton({className = '' }) {
    let classes = 'bg-white border-2 h-[25px] w-[25px] rounded-full flex justify-center items-center'
    return (
        <span className={classes + className}>
            <span className="rotate-45 bg-black w-[10px] h-0.5 absolute"></span>
            <span className="rotate-45 bg-black w-0.5 h-[10px] absolute"></span>
        </span>
    )
}