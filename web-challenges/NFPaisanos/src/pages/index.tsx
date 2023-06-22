import MockAuction from '../mock/auction'

import { AuctionList, AuctionSingle } from '../components/auctions';
import { Filters } from '../components/filters';
import { SearchBar } from '../components/searchBar';

export default function Home() {

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
    type, } = MockAuction[3]

  return (
    <>
      <div className="container m-auto pt-8 pb-12">
          <AuctionSingle instantPrice={instantPrice}
            highestBid={highestBid}
            stock={stock}
            author={author}
            authorAvatar={authorAvatar}
            createdAt={createdAt}
            likes={likes}
            endsAt={endsAt}
            bidUsers={bidUsers}
            attributes={attributes}
            media={media}
            type={type}
            title={`Amazing digital ${type}`} />
      </div>
      <div className="flex container m-auto">
        <SearchBar />
      </div>
      <div className="md:flex container m-auto">
        <div className="basis-2/6">
          <Filters />
        </div>
        <div className="basis-4/6">
          <AuctionList />
        </div>
      </div>
    </>
  )
}
