import React, { useState } from 'react';
import { DropdownItem } from '@/types/FIlters';

export default function DropdownItem({onClick, type = '', selected = false, expanded = false, value, label}:DropdownItem) {
    
    let itemColor = ''
    if(value === '0'){
        itemColor = 'bg-transparent border-2 border-custom-blue'
    }else{
        itemColor = `bg-custom-${label.toLowerCase()}`
    }

    return(
        <li onClick={onClick} className={`${expanded ? "" : "hidden"} flex items-center p-2 text-sm rounded-lg cursor-pointer ${selected? 'bg-medium-grey' : '' } hover:bg-dark-grey`} data-value={value} >
            {type == 'colors' && <span className={`mr-3 rounded-full w-6 h-6 ${itemColor}`}></span> }
            <span>{label}</span>
        </li>
    )
}
