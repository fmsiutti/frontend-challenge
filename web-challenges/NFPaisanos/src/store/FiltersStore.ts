import { create } from 'zustand'
import { ORDER_NEWEST, ORDER_MOST_LIKES, DEFAULT_COLOR_VALUE, DEFAULT_CATEGORY } from '@/config/constants';
import { Auction } from '@/types/Auction';
import { toFixedNumber } from '@/utils/numbers.utils';

interface FiltersState {
    orderByDate: number;
    orderByLikes: number;
    selectedColors: number[];
    selectedCategory: string;
    priceRange: [number, number];
    selectedPriceRange: [number, number];
    colors: string[],
    search: string;
    setSearch: (search:string) => void;
    setSelectedCategory: (category:string) => void
    setSelectedColors: (color:number) => void
    setOrderByDate: (order:number) => void;
    setOrderByLikes: (order:number) => void;
    setPriceRange: (auctions:Auction[]) => void;
    setColors: (auctions:Auction[]) => void;
    setSelectedPriceRange: (priceRange:[number, number]) => void
    clearFilters: () => void;
}

const useFiltersStore = create<FiltersState>((set) => ({
    orderByDate: ORDER_NEWEST,
    orderByLikes: ORDER_MOST_LIKES,
    selectedColors: [],
    selectedCategory: DEFAULT_CATEGORY,
    priceRange: [0, 0],
    selectedPriceRange: [0,100],
    colors: [],
    search: "",
    setSearch: (search:string) => {set(state => ({
        search
    }))},
    setSelectedCategory: (category) => {set((state) => ({
        selectedCategory: category
    }))},
    setPriceRange: (auctions:Auction[]) => {set(state => {
        if(!auctions.length) return {}
        const orderedAuctions = auctions.sort((auctionA:Auction, auctionB:Auction) => parseFloat(auctionA.instantPrice) - parseFloat(auctionB.instantPrice))                    
        const priceMin = toFixedNumber(orderedAuctions[0].instantPrice)
        const priceMax = toFixedNumber(orderedAuctions[orderedAuctions.length - 1].instantPrice)

        return{
            priceRange: [priceMin, priceMax]
        }
    })},
    setSelectedPriceRange: (priceRange) => {set(state => ({
        selectedPriceRange: priceRange
    }))},
    setColors: (auctions:Auction[]) => {set(state => {
        if(!auctions.length) return {}
        
        const colors = auctions.map((Auction:Auction) => Auction.attributes.color)
        const filteredColors = colors.filter((color:string, index:number) => colors.indexOf(color) === index)

        return{
            colors: filteredColors
        }
    })},
    setSelectedColors: (color) => {set((state) => {
        if(color === DEFAULT_COLOR_VALUE){
            return {
                selectedColors: []
            }
        }
        const selectedColors = state.selectedColors
        let newSelectedColors = []
        if(selectedColors.includes(color)){
            newSelectedColors = selectedColors.filter(item => item !== color)
        }else{
            newSelectedColors = state.selectedColors.concat([color])
        }
        return {
            selectedColors: newSelectedColors
        }
    })},
    setOrderByDate: (order) => {set((state) => ({
        orderByDate: order
    }))},
    setOrderByLikes: (order) => {set((state) => ({
        orderByLikes: order
    }))},
    clearFilters: () => {set(state => ({
        orderByDate: ORDER_NEWEST,
        orderByLikes: ORDER_MOST_LIKES,
        selectedColors: [],
        selectedCategory: DEFAULT_CATEGORY 
    }))}
}))

export const useOrderByDate =  () => useFiltersStore(state => state.orderByDate)
export const useSetOrderByDate =  () => useFiltersStore(state => state.setOrderByDate)
export const useOrderByLikes =  () => useFiltersStore(state => state.orderByLikes)
export const useSetOrderByLikes =  () => useFiltersStore(state => state.setOrderByLikes)
export const useSelectedColors =  () => useFiltersStore(state => state.selectedColors)
export const useSetSelectedColors =  () => useFiltersStore(state => state.setSelectedColors)
export const useSelectedCategory = () => useFiltersStore(state => state.selectedCategory)
export const useSetSelectedCategory = () => useFiltersStore(state => state.setSelectedCategory)
export const usePriceRange = () => useFiltersStore(state => state.priceRange)
export const useSetPriceRange = () => useFiltersStore(state => state.setPriceRange)
export const useColors = () => useFiltersStore(state => state.colors)
export const useSetColors = () => useFiltersStore(state => state.setColors)
export const useSelectedPriceRange = () => useFiltersStore(state => state.selectedPriceRange)
export const useSetSelectedPriceRange = () => useFiltersStore(state => state.setSelectedPriceRange)
export const useSearch = () => useFiltersStore(state => state.search)
export const useSetSearch = () => useFiltersStore(state => state.setSearch)

export const useClearFilters =  () => useFiltersStore(state => state.clearFilters)