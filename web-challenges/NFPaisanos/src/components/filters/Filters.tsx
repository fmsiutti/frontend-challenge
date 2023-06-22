import { Dropdown, Divider, RangeSlider, CloseButton, Button } from '../common';
import ResetFilters from './ResetFilters';

export default function Filters() {
    return (
        <div className="pr-8">
            <div>
                <Dropdown def="Newest" list={[['Newest', 'newest'], ['Oldest', 'oldest']]} />
            </div>
            <div className="pl-1 pt-4 pb-6 ">
                <h4 className="font-black text-xs text-lighter-grey mb-2">PRICE RANGE</h4>
                <RangeSlider />
            </div>
            <div className="pl-1 pt-4 pb-2 ">
                <h4 className="font-black text-xs text-lighter-grey mb-2">LIKES</h4>
                <Dropdown def="Most Liked" list={[['Most liked', 'most_liked'], ['Least liked', 'least_liked']]} />
            </div>
            <div className="pl-1 pt-4 pb-2 ">
                <h4 className="font-black text-xs text-lighter-grey mb-2">COLORS</h4>
                <Dropdown initialState type="colors" className="mb-4" def="Colors" list={[['All Colors', 'all'], ['Blue', 'blue'], ['Pink', 'pink'], ['Black', 'black'], ['Red', 'red'], ['Orange', 'orange']]} />
            </div>
            <Divider />
            <div className="pl-1 pt-6 pb-2 ">
                <ResetFilters />
            </div>
        </div>
    )
}
