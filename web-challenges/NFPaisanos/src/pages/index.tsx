import dynamic from 'next/dynamic'

import { AuctionPopular } from '@/modules/auctions';

export default function Home() {

  const DynamicAuctionList = dynamic(() => import('@/modules/auctions/AuctionList'), {
    ssr: false,
  })
  const DynamicSearchBar = dynamic(() => import('@/modules/filters/SearchBar'), {
    ssr: false,
  })
  const DynamicCategories = dynamic(() => import('@/modules/filters/Categories'), {
    ssr: false,
  })
  const DynamicFilters = dynamic(() => import('@/modules/filters/Filters'), {
    ssr: false,
  })

  return (
    <>
      <div className="container m-auto pt-8 pb-12">
        <AuctionPopular />
      </div>
      <div className="flex container m-auto">
        <DynamicSearchBar />
      </div>
      <div className="container m-auto mb-6 mt-4">
        <DynamicCategories />
      </div>
      <div className="md:flex container m-auto">
        <div className="basis-1/4 md:max-w-[25%] md:pr-4">
          <DynamicFilters />
        </div>
        <div className="basis-3/4 md:pl-4">
          <DynamicAuctionList />
        </div>
      </div>
    </>
  )
}
