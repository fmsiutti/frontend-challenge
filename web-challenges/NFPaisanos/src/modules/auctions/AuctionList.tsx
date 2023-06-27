import { AuctionListItem } from '@/components/auctions'
import { useFilteredAuctions, useGetAuctions } from '@/store/AuctionStore';
import { useEffect } from 'react';

export default function AuctionList() {

  const getAuctions = useGetAuctions()
  const auctions = useFilteredAuctions()
  useEffect(() => {
    getAuctions()
  }, [getAuctions])

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
    <div className="grid grid-cols-1 gap-x-7 gap-y-7 sm:grid-cols-3 xxl:grid-cols-4">
      { renderedAuctionList }
    </div>
  )
}
