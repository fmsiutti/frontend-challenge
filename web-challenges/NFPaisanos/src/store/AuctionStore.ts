import { create } from 'zustand'
import { Auction } from '@/types/Auction';
import { compareDates } from '@/utils/dates.utils';
import { compareNumbers } from '@/utils/numbers.utils';
import { DEFAULT_CATEGORY } from '@/config/constants';
import { sanitizeString } from '@/utils/string.utils';

interface Filters {
    colors: string[];
    category: string;
    search: string;
    dateOrder: number;
    likesOrder: number;
    priceRange: [number, number];
}

interface AuctionState {
    getAuctions: () => void;
    getPopular: () => void;
    setSelectedPopular: (direction:number) => void;
    auctions: Auction[];
    filteredAuctions: Auction[];
    popular: Auction[];
    selectedPopular: number;
    filterAuctions: (filters:Filters) => void;
}

const useAuctionStore = create<AuctionState>((set) => ({
    auctions: [],
    filteredAuctions: [],
    popular: [],
    selectedPopular: 0,
    setSelectedPopular: (direction:number) => {        
        set((state) => {
            let newPosition = state.selectedPopular + direction
            if(newPosition < 0) newPosition = state.popular.length - 1
            if(newPosition > state.popular.length - 1) newPosition = 0
            return {
                selectedPopular: newPosition
            }
        })
    },
    filterAuctions: ({colors, category, priceRange, likesOrder, dateOrder, search }:Filters) => {
        set(state => {
            let filteredAuctions = state.auctions.filter(auction => auction.author)
            filteredAuctions =  filteredAuctions.filter(auction => parseFloat(auction.instantPrice) >= priceRange[0] && parseFloat(auction.instantPrice) <= priceRange[1] )

            if(search.length){
                filteredAuctions =  filteredAuctions.filter(auction => sanitizeString(auction.attributes.color + auction.author + auction.type).indexOf(sanitizeString(search)) > -1 )
            }

            if(category !== DEFAULT_CATEGORY){
                filteredAuctions =  filteredAuctions.filter(auction => auction.type === category)
            }
            if(colors.length){
                filteredAuctions =  filteredAuctions.filter(auction => colors.includes(auction.attributes.color))
            }
            filteredAuctions = filteredAuctions.sort((auctionA, auctionB) => compareNumbers(auctionA.likes, auctionB.likes, likesOrder) || compareDates(auctionA.createdAt, auctionB.createdAt, dateOrder))
            return {
                filteredAuctions
            }
        })
    },
    getPopular: async () => {
        fetch('/api/getPopular')
            .then(res => res.json())
            .then(auctions => {
                set(state => {
                    return {
                        popular: auctions,
                    }
                })
            })
            .catch(err => {console.log(err)})
    },
    getAuctions: async () => {
        fetch('/api/getAuctions')
            .then(res => res.json())
            .then(auctions => {
                set(state => {
                    return {
                        auctions: auctions,
                        filteredAuctions: auctions
                    }
                })
            })
            .catch(err => {console.log(err)})
    },
}))


export const useAuctions = () => useAuctionStore(state => state.auctions)
export const useFilteredAuctions = () => useAuctionStore(state => state.filteredAuctions)
export const usePopular = () => useAuctionStore(state => state.popular)
export const useSelectedPopular = () => useAuctionStore(state => state.selectedPopular)
export const useSetSelectedPopular = () => useAuctionStore(state => state.setSelectedPopular)
export const useGetPopular = () => useAuctionStore(state => state.getPopular)
export const useGetAuctions = () => useAuctionStore(state => state.getAuctions)
export const useFilterAuctions = () => useAuctionStore(state => state.filterAuctions)