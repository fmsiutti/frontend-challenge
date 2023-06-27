import React, { useState } from 'react';

interface Dropdown {
    def: string;
    list: [string, number][];
    className?: string;
    initialState?: boolean;
    type?: string;
    multi?: boolean;
    multiSelected?: number[];
    handleSelect: (selection:number) => void
}

import { RoundedButton } from ".."
import ExpandMore from '../../../assets/ExpandMore.svg'
import ExpandLess from '../../../assets/ExpandLess.svg'
import DropdownItem from './DropdownItem';

export default function Dropdown({def, list, handleSelect, type = '', multiSelected = [], initialState = false, multi = false, className = ''}:Dropdown) {
    const [expanded, setExpanded] = useState(initialState)

    const handleClick = (selectedItem:number) => {
        handleSelect(selectedItem)
        if(!multi){
            toggleExpand();
        }
    }

    const toggleExpand = () => {
        setExpanded(!expanded)
    }
    const renderedList = list.map((item, index) => <DropdownItem onClick={() => {handleClick(item[1]) }} selected={multiSelected.includes(item[1])} expanded={expanded} value={`${item[1]}`} type={type} key={index} label={item[0]} />)

    return (<div className={`${className} pb-2`}>
        <div onClick={toggleExpand} className="p-1.5 relative flex cursor-pointer color-white w-full rounded-2xl border-2 border-medium-grey justify-between">
            <input className="text-sm pl-2 cursor-pointer basis-1/2 bg-transparent w-full focus:outline-0 placeholder-white" type="text" placeholder={`${def}`} disabled />
            <RoundedButton size="sm" className="border-2 w-[32px] h-[32px]" type="secondary" icon={expanded ? ExpandLess : ExpandMore} />
        </div>
        <ul className={`${expanded ? 'p-2 mt-2' : 'h-0 scale-y-0'} gap-y-2 flex flex-col origin-top  rounded-xl bg-main-grey w-full`}>{renderedList}</ul>
    </div>)
}
