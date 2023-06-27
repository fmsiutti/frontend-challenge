import { Input, RoundedButton } from "../common"
import Search from '../../assets/Search.svg'
import { useSetSearch } from '../../store/FiltersStore';
import { useRef } from 'react';

export default function SearchBar() {

    const inputRef = useRef<HTMLInputElement>(null)

    const setSearch = useSetSearch()

    const handleChange = (search:string) => {
        setSearch(search)
    }

    const handleClick = () => {
        inputRef.current?.focus()
    }


    return (<div className="flex items-center justify-between w-full mb-2 border-medium-grey border-2 rounded-2xl md:rounded-none md:border-0 md:border-b-2 p-1.5">
            <Input inputRef={inputRef} onChange={handleChange} className=" pl-2 md:pl-0 md:h-32 text-sm md:text-2xl" placeHolder="Type to find something nice..." />
            <RoundedButton className="bg-transparent hover:bg-transparent" onClick={handleClick} size="sm" type="main" icon={Search} />
        </div>)
}
