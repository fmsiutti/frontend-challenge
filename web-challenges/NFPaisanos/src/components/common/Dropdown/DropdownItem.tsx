import React, { useState } from 'react';

interface DropdownItem {
    expanded?: boolean;
    type?: string;
    value: string;
    label: string;
    key: number;
}

export default function DropdownItem({key, type = '', expanded = false, value, label}:DropdownItem) {
    
    let itemColor = ''

    if(type == 'colors'){
        switch(value){
            case 'blue':
                itemColor = 'bg-custom-blue'
                break;
            case 'orange':
                itemColor = 'bg-custom-orange'
                break;
            case 'red':
                itemColor = 'bg-custom-red'
                break;
            case 'pink':
                itemColor = 'bg-custom-pink'
                break;
            case 'black':
                itemColor = 'bg-custom-black'
                break;
            case 'all':
                itemColor = 'bg-transparent border-2 border-custom-blue'
                break;
        }
    }

    return(
        <li key={key} className={`${expanded ? "" : "hidden"} flex items-center px-2 py-3 rounded-lg cursor-pointer hover:bg-dark-grey`} data-value={value} >
            {type == 'colors' && <span className={`mr-3 rounded-full w-7 h-7 ${itemColor}`}></span> }
            <span>{label}</span>
        </li>
    )
}
