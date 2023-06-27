import AuctionPopularItem from './AuctionPopularItem';

import { useGetPrice } from '../../store/PriceStore';
import { usePopular, useSelectedPopular, useGetPopular } from '../../store/AuctionStore';
import { useEffect } from 'react';

export default function AuctionPopular() {

    const getPopular = useGetPopular()
    const getPrice = useGetPrice()
  
    useEffect(() => {
      getPopular()
      getPrice()
    }, [getPopular, getPrice])
  
    const popularList = usePopular()
    const selectedPopular = useSelectedPopular()

    return (
        <>
            {popularList[selectedPopular] &&
                <AuctionPopularItem
                instantPrice={popularList[selectedPopular].instantPrice}
                highestBid={popularList[selectedPopular].highestBid}
                stock={popularList[selectedPopular].stock}
                author={popularList[selectedPopular].author}
                authorAvatar={popularList[selectedPopular].authorAvatar}
                createdAt={popularList[selectedPopular].createdAt}
                likes={popularList[selectedPopular].likes}
                endsAt={popularList[selectedPopular].endsAt}
                bidUsers={popularList[selectedPopular].bidUsers}
                attributes={popularList[selectedPopular].attributes}
                media={popularList[selectedPopular].media}
                type={popularList[selectedPopular].type}
                title={`Amazing digital ${popularList[selectedPopular].type}`} />}
        </>
    )
}