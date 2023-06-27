import { CloseButton } from "../common"

export default function ResetFilters({onClick}:{onClick:() => void}) {
    return (
        <button onClick={onClick} className="flex">
            <CloseButton />
            <span className="text-sm ml-3">Reset filters</span>
        </button>
    )
}