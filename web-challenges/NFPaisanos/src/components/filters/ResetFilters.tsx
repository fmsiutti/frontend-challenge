import { CloseButton } from "../common"

export default function ResetFilters({onClick = () => {}}) {
    return (
        <button onClick={onClick} className="flex items-center">
            <CloseButton />
            <span className="text-sm ml-3">Reset filters</span>
        </button>
    )
}