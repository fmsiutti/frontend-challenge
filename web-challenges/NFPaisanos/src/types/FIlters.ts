export interface DropdownItem {
    expanded?: boolean;
    type?: string;
    value: string;
    label: string;
    onClick: () => void;
    selected?: boolean;
}

export interface Dropdown {
    def: string;
    list: [string, number][];
    className?: string;
    initialState?: boolean;
    type?: string;
    multi?: boolean;
    multiSelected?: number[];
    handleSelect: (selection:number) => void
}

export interface RangeSlider {
    min: number;
    max: number;
    handleChange: (values:[number, number]) => void
}