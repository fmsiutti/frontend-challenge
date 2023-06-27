import dynamic from 'next/dynamic'

import { AuctionPopular } from '@/modules/auctions';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    
    navigator.serviceWorker.ready.then(registration => {
      registration.pushManager.getSubscription().then(subscription => {
        console.log({subscription})
      })
    })
  }, [])

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
      <div className="container pt-8 pb-12">
        <AuctionPopular />
      </div>
      <div className="flex container">
        <DynamicSearchBar />
      </div>
      <div className="container mb-6 mt-4">
        <DynamicCategories />
      </div>
      <div className="md:flex container">
        <div className="md:basis-1/2 md:pr-8 lg:pr-4 lg:basis-1/3 xl:pr-4 xl:basis-1/4 xl:max-w-[25%]">
          <DynamicFilters />
        </div>
        <div className="md:basis-1/2 md:pl-8 lg:basis-2/3 lg:pl-4 xl:basis-3/4 xl:pl-4">
          <DynamicAuctionList />
        </div>
      </div>
    </>
  )
}
