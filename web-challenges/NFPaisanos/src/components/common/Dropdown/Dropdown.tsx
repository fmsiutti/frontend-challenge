import React, { useState } from 'react';

interface Dropdown {
    def: string;
    list: [string, string][];
    className?: string;
    initialState?: boolean;
    type?: string;
}

import { RoundedButton } from ".."
import ExpandMore from '../../../assets/ExpandMore.svg'
import ExpandLess from '../../../assets/ExpandLess.svg'
import DropdownItem from './DropdownItem';

export default function Dropdown({def, list, type = '', initialState = false, className = ''}:Dropdown) {
    const [expanded, setExpanded] = useState(initialState)
    const toggleExpand = () => {
        setExpanded(!expanded)
    }
    const renderedList = list.map((item, index) => <DropdownItem expanded={expanded} value={item[1]} type={type} key={index} label={item[0]} />)

    return (<div className={`${className} pb-2`}>
        <div onClick={toggleExpand} className="p-1.5 relative flex cursor-pointer color-white w-full rounded-2xl border-2 border-medium-grey justify-between">
            <input className="pl-2 cursor-pointer basis-1/2 bg-transparent w-full focus:outline-0 placeholder-white" type="text" placeholder={def} disabled />
            <RoundedButton className="border-2" type="secondary" icon={expanded ? ExpandLess : ExpandMore} />
        </div>
        <ul className={`${expanded ? 'p-3 mt-2' : 'h-0 scale-y-0'} origin-top  rounded-xl bg-main-grey w-full`}>{renderedList}</ul>
    </div>)
}
