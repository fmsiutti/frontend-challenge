import { useState } from "react"

import ReactSlider from 'react-slider'
   
export default function RangeSlider() {

    const [value, setValue] = useState('0')

    const handleChange = (value:string) => {
        setValue(value)
    }

    const max = 10;
    const min = 0.5;

    return (<>
        <ReactSlider
            className="horizontal-slider flex items-center h-7 group"
            max={max}
            min={min}
            step={0.1}
            defaultValue={[min, max]}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => {
                if(props && props.style) props.style.zIndex = 20

                return <div {...props} className="w-7 h-7 z-20 bg-main-blue rounded-full border-white border-4">
                    <span className="opacity-0 group-hover:opacity-100 absolute bottom-8 left-[50%] -translate-x-[50%] bg-white rounded-md w-16 h-10 text-sm flex justify-center font-semibold items-center text-dark-grey after:bg-white after:absolute after:top-9 after:rotate-45 after:h-2 after:w-2">{state.valueNow} ETH</span>
                </div>
            }}
            renderTrack={(props, { index, value }) => {
                let scale = 1
                let classes = 'absolute w-full h-4 bg-custom-blue '
                if (index === 0){
                    classes += 'bg-main-grey z-10 origin-left rounded-l-[100%] rounded-r-2xl'
                    scale = value[0] / max
                } else if (index === 1){
                    classes += 'bg-main-grey z-10 origin-right rounded-2xl'
                    scale = 1 - (value[1] / max)
                } else if (index === 2){
                    classes += 'rounded-l-[100%] rounded-r-2xl'
                }
                    return <div {...props} style={{transition: 'none', transform: `scaleX(${scale})`}} className={classes} ></div>
            }}
            minDistance={1}
        />
        </>
        )
}