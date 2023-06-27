import { create } from 'zustand'
import { parseNumber } from '@/utils/numbers.utils';

interface PriceState {
    getPrice: () => void;
    conversion: number;
}

const usePriceStore = create<PriceState>((set) => ({
    conversion: 0,
    getPrice: async () => {
        fetch('/api/getPrice')
            .then(res => res.json())
            .then(price => {
                set(state => {
                    return {
                        conversion: parseNumber(price.usd)
                    }
                })
            })
            .catch(err => {console.log(err)})
    }
}))

export const useConversion =  () => usePriceStore(state => state.conversion)
export const useGetPrice =  () => usePriceStore(state => state.getPrice)