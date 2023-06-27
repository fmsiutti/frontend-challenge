import { useEffect } from 'react';

import { Dropdown, Divider, RangeSlider } from '../common';
import ResetFilters from './ResetFilters';

import { capitalize } from '../../utils/string.utils';
import { useAuctions, useFilterAuctions } from '../../store/AuctionStore';

import { useSetOrderByDate, useSetOrderByLikes, useOrderByDate, useOrderByLikes, useSelectedColors, useSetSelectedColors, useClearFilters, usePriceRange, useSetPriceRange, useColors, useSetColors, useSelectedCategory, useSelectedPriceRange, useSetSelectedPriceRange, useSearch } from '../../store/FiltersStore';

import { ORDER_NEWEST, ORDER_OLDEST, ORDER_LABELS, ORDER_MOST_LIKES, ORDER_LEAST_LIKES, LIKES_LABELS, DEFAULT_COLOR_VALUE, DEFAULT_COLOR_LABEL } from '../../config/constants';

export default function Filters() {
    const auctions = useAuctions()
    const colors = useColors()
    const parametrizedColors = colors.map((color:string, index): [string, number] => [capitalize(color), index + 1])
    const [min, max] = usePriceRange()

    const setColors = useSetColors()
    const setPriceRange = useSetPriceRange()

    const setOrderByDate = useSetOrderByDate()
    const setOrderByLikes = useSetOrderByLikes()
    const setSelectedColors = useSetSelectedColors()
    const setSelectedPriceRange = useSetSelectedPriceRange()
    const clearFilters = useClearFilters()
    
    const orderByDate = useOrderByDate()
    const orderByLikes = useOrderByLikes()
    const selectedColors = useSelectedColors()
    const selectedCategory = useSelectedCategory()
    const selectedPriceRange = useSelectedPriceRange()
    const search = useSearch()
    const filterAuctions = useFilterAuctions()

    useEffect(() => {
        setPriceRange(auctions)
        setColors(auctions)
        
    }, [setPriceRange, setColors, auctions])

    useEffect(() => {
        const filterColors = colors.filter((color, index) => selectedColors.includes(index + 1))

        filterAuctions({
            colors: filterColors,
            dateOrder: orderByDate,
            likesOrder: orderByLikes,
            category: selectedCategory,
            priceRange: selectedPriceRange,
            search: search
        })

    }, [filterAuctions, selectedColors, colors, selectedCategory, orderByDate, orderByLikes, selectedPriceRange, search])

    const rangeHandleChange = (values:[number, number]) => {
        setSelectedPriceRange(values)
    }

    return (
        <>
            <div>
                <Dropdown handleSelect={setOrderByDate} def={ORDER_LABELS[orderByDate]} list={[[ORDER_LABELS[ORDER_NEWEST], ORDER_NEWEST], [ORDER_LABELS[ORDER_OLDEST], ORDER_OLDEST]]} />
            </div>
            <div className="pl-1 pt-4 pb-6 ">
                <h4 className="font-black text-xs text-lighter-grey mb-2">PRICE RANGE</h4>
                {max && <RangeSlider handleChange={rangeHandleChange} min={min} max={max} />}
            </div>
            <Divider />
            <div className="pl-1 pt-6 ">
                <h4 className="font-black text-xs text-lighter-grey mb-2">LIKES</h4>
                <Dropdown handleSelect={setOrderByLikes} def={LIKES_LABELS[orderByLikes]} list={[[LIKES_LABELS[ORDER_MOST_LIKES], ORDER_MOST_LIKES], [LIKES_LABELS[ORDER_LEAST_LIKES], ORDER_LEAST_LIKES]]} />
            </div>
            <div className="pl-1 pt-6 ">
                <h4 className="font-black text-xs text-lighter-grey mb-2">COLORS</h4>
                <Dropdown handleSelect={setSelectedColors} multi multiSelected={selectedColors} initialState type="colors" className="mb-4" def={DEFAULT_COLOR_LABEL} list={[[DEFAULT_COLOR_LABEL, DEFAULT_COLOR_VALUE], ...parametrizedColors]} />
            </div>
            <Divider />
            <div className="pl-1 pt-6 pb-2 ">
                <ResetFilters onClick={clearFilters} />
            </div>
        </>
    )
}
