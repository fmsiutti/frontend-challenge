import { AuctionList, AuctionPopular } from '../components/auctions';
import { Filters } from '../components/filters';
import { SearchBar } from '../components/searchBar';
import { Categories } from '../components/filters';

export default function Home() {

  return (
    <>
      <div className="container m-auto pt-8 pb-12">
          <AuctionPopular />
      </div>
      <div className="flex container m-auto">
        <SearchBar />
      </div>
      <div className="container m-auto mb-6 mt-4">
        <Categories />
      </div>
      <div className="md:flex container m-auto">
        <div className="basis-1/4 md:max-w-[25%] md:pr-4">
          <Filters />
        </div>
        <div className="basis-3/4 md:pl-4">
          <AuctionList />
        </div>
      </div>
    </>
  )
}
