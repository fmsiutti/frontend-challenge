import { Input, RoundedButton } from "../common"
import Search from '../../assets/Search.svg'

export default function SearchBar() {
    return (<div className="flex items-center justify-between w-full mb-8 border-medium-grey border-b-2">
            <Input className=" h-32 text-2xl" placeHolder="Type to find something nice..." />
            <RoundedButton type="main" icon={Search} />
        </div>)
}
