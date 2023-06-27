import Image from 'next/image'

import { Auction } from '@/types/Auction'


import { Button, RoundedButton } from '../common'
import Author from './Author';

import ArrowRight from '@/assets/ArrowRight.svg'
import ArrowLeft from '@/assets/ArrowLeft.svg'
import { toHumanNumber } from '@/utils/numbers.utils';

import { useConversion } from '@/store/PriceStore';
import { useSetSelectedPopular } from '@/store/AuctionStore';

export default function AuctionPopularItem({ title, instantPrice, type, highestBid, stock, likes, author, authorAvatar, attributes, createdAt, endsAt, media, bidUsers }:Auction) {

    const conversion = useConversion()
    const setSelectedPopular = useSetSelectedPopular()

    const usdPrice = toHumanNumber((parseFloat(highestBid) * conversion).toFixed(2), 2)

    return (
        <>
            <div className="md:flex justify-between" >
                <div className="image-container relative basis-full pb-8 md:pb-0 md:basis-7/12 md:pr-7">
                    <Image priority sizes="(min-width: 768px) 20vw, 100vw" width={620} height={800} alt={title} className="rounded-2xl" src={media?.image2x} />
                </div>
                <div className="body relative basis-full md:basis-4/12 md:pl-5">
                    <h1 className="text-6xl font-semibold ">{author}</h1>
                    <div className="flex justify-between col-2 py-6">
                        <div className="basis-7/12 md:basis-1/2">
                            <Author image={authorAvatar} title="Creator" text={author} />
                        </div>
                        <div className="basis-5/12 md:basis-1/2">
                            <Author color={attributes?.color} title="Instant Price" text={instantPrice} />
                        </div>
                    </div>
                    <div className="rounded-3xl bg-main-grey p-8 mt-4 text-center">
                        <p className="pb-2">Current Bid</p>
                        <p className="text-5xl font-semibold pb-2">{highestBid}</p>
                        <p className="text-2xl text-light-grey font-semibold pb-6">${usdPrice}</p>
                        <p className="pb-4">Auction ending in</p>
                        <div className="max-w-[220px] mx-auto flex justify-between pb-2">
                            <div>
                                <p className="text-4xl leading-none font-semibold">19</p>
                                <p className="text-light-grey">Hrs</p>
                            </div>
                            <div>
                                <p className="text-4xl leading-none font-semibold">24</p>
                                <p className="text-light-grey">mins</p>
                            </div>
                            <div>
                                <p className="text-4xl leading-none font-semibold">19</p>
                                <p className="text-light-grey">secs</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button className="mt-2" type='primary' >Place a bid</Button>
                        <Button className="mt-2" type='secondary' >View item</Button>
                    </div>
                    <div className="justify-center md:justify-start mt-6 flex">
                        <RoundedButton onClick={() => {setSelectedPopular(-1)}} type="secondary" icon={ArrowLeft} />
                        <RoundedButton onClick={() => {setSelectedPopular(1)}} type="secondary" className="ml-2" icon={ArrowRight} />
                    </div>
                </div>
            </div>
        </>
    )
}