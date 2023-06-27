import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { AuctionListItem } from '@/components/auctions'
import { Button } from '@/components/common';
import { useFilteredAuctions, useGetAuctions, useGetLimitAuctions } from '@/store/AuctionStore';

import Spinner from '@/assets/Spinner.svg'
import useOnScreen from '@/hooks/useOnScreen';

export default function AuctionList() {

  const getAuctions = useGetAuctions()
  const getLimitAuctions = useGetLimitAuctions()
  let auctions = useFilteredAuctions()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLimitAuctions()
  }, [getLimitAuctions])

  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref, true)

  useEffect(() => {
    if(isVisible){
      setLoading(true)
      setTimeout(() => {
        getAuctions()
        setLoading(false)
      }, 1000)
    }
  }, [isVisible, getAuctions])


  const renderedAuctionList = auctions.map((auction, index) => {
    const {
      instantPrice,
      highestBid,
      stock,
      author,
      authorAvatar,
      createdAt,
      likes,
      endsAt,
      bidUsers,
      attributes,
      media,
      type,
    } = auction
  
    return <AuctionListItem 
      key={index}
      instantPrice={instantPrice}
      highestBid={highestBid}
      stock={stock}
      likes={likes}
      author={author}
      authorAvatar={authorAvatar}
      createdAt={createdAt}
      endsAt={endsAt}
      bidUsers={bidUsers}
      attributes={attributes}
      media={media}
      type={type}
      title={`Amazing digital ${type}`} />
  })

  return (
    <>
      <div className="grid grid-cols-1 md:gap-x-3 gap-y-3 lg:gap-x-5 lg:gap-y-5 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-7 xl:grid-cols-3 xxl:grid-cols-4">
        { renderedAuctionList }
      </div>
      <div ref={ref} className="flex justify-center py-8">
        <Button className={`${isVisible && loading  ? '' : 'hidden' } w-36 py-2`} type="light"><span className="flex items-center justify-between"><Image className="animate-spin" src={Spinner} width={24} height={24} alt="Loading" /> Load more</span></Button>
      </div>
    </>
    )
}
