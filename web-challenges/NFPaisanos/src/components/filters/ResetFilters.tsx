import { CloseButton } from "../common"

export default function ResetFilters() {
    return (
        <button className="flex">
            <CloseButton />
            <span className="ml-3">Reset filters</span>
        </button>
    )
}