import MockAuctions from '../../mock/auction'
import AuctionListItem from './AuctionListItem'

export default function AuctionList() {
  const colors = MockAuctions.map((MockAuction) => MockAuction.attributes.color)
  const filteredColors = colors.filter((color, index) => colors.indexOf(color) === index)
  console.log(filteredColors)

  const renderedAuctionList = MockAuctions.map((MockAuction, index) => {
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
    } = MockAuction
  
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
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 xxl:gap-x-8">
      { renderedAuctionList }
    </div>
  )
}
