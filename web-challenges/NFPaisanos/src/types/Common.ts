import { RefObject, ReactElement } from "react"

export interface RoundedButton {
    type: string;
    icon: string;
    className?: string;
    size?: string;
    onClick?: () => void;
}

export interface Input {
    placeHolder: string;
    className?: string;
    onChange: (value:string) => void;
    inputRef?: RefObject<HTMLInputElement>
}

export interface Chip {
    content: string;
    active: boolean;
    className?: string;
    onClick?: () => void
}

export interface Button {
    children: ReactElement | string;
    type: string;
    onClick?: () => void;
    className?: string;
}