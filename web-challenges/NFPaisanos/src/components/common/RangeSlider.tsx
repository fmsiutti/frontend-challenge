import { useState } from "react"

import ReactSlider from 'react-slider'

interface RangeSlider {
    min: number;
    max: number;
    handleChange: (values:[number, number]) => void
}

export default function RangeSlider({ min, max, handleChange }:RangeSlider) {

    return (<>
        <div className="h-0">
            <svg>
                <clipPath id="clip-path-relative" clipPathUnits="objectBoundingBox"><path d="M0,0.512 C0,0.441,0.003,0.383,0.008,0.381 L0.969,0.012 C0.986,0.005,1,0.231,1,0.512 V0.512 C1,0.793,0.986,1,0.969,1 L0.008,0.643 C0.003,0.641,0,0.583,0,0.512 V0.512"></path></clipPath>
            </svg>
        </div>
        <ReactSlider
            className="horizontal-slider flex items-center h-7 group"
            max={max}
            min={min}
            step={0.1}
            defaultValue={[min, max]}
            ariaLabel={['Price min', 'Price max']}
            onChange={(value) => {handleChange([value[0], value[1]])}}
            ariaValuetext={state => `Price range ${state.valueNow}`}
            renderThumb={(props, state) => {
                if(props && props.style) props.style.zIndex = 20
                return <div {...props} className="w-6 h-6 z-20 bg-main-blue rounded-full border-white border-4">
                    <span className="opacity-0 group-hover:opacity-100 absolute bottom-8 left-[50%] -translate-x-[50%] bg-white rounded-md w-16 h-10 text-sm flex justify-center font-semibold items-center text-dark-grey after:bg-white after:absolute after:top-9 after:rotate-45 after:h-2 after:w-2">{state.valueNow} ETH</span>
                </div>
            }}
            renderTrack={(props, { index, value }) => {
                let gradientMin = value[0] / max * 100 
                let gradientMax = value[1] / max * 100
                let classes = 'absolute w-full h-4 bg-custom-blue '
                if (index === 0){
                    classes += 'bg-main-grey z-10 origin-left'
                } else if (index === 1){
                    classes += 'bg-main-grey z-10 origin-right'
                } else if (index === 2){
                    classes += ''
                }
                console.log({gradientMin, gradientMax})
                return <div {...props} style={{transition: 'none', background: `linear-gradient( to right, rgb(35, 38, 47) 0%, rgb(35, 38, 47) ${gradientMin}%, rgb(55, 114, 255) ${gradientMin}%, rgb(55, 114, 255) ${gradientMax}%, rgb(35, 38, 47) ${gradientMax}%, rgb(35, 38, 47) 100%)`, clipPath: `url(#clip-path-relative)`}} className={classes} ></div>
            }}
            minDistance={1.5}
        />
        </>
        )
}