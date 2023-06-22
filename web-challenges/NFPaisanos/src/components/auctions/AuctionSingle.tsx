import Image from 'next/image'

import { AuctionProps } from '../../interfaces'

import { Author, Button, RoundedButton } from '../common/'

import ArrowRight from '../../assets/ArrowRight.svg'
import ArrowLeft from '../../assets/ArrowLeft.svg'

export default function AuctionSingle({ title, instantPrice, type, highestBid, stock, likes, author, authorAvatar, attributes, createdAt, endsAt, media, bidUsers }:AuctionProps) {
    console.log(attributes)
    return (
        <>
            <div className="md:flex justify-between" >
                <div className="image-container relative basis-full md:basis-1/2 h-[600px] md:h-[720px] xl:h-[840px]">
                    <Image priority fill={true} objectFit="cover" alt={title} className="rounded-2xl h-20" src={media.image2x} />
                </div>
                <div className="body relative basis-full md:basis-5/12 px-16">
                    <h1 className="text-6xl font-semibold ">{title}®</h1>
                    <div className="flex col-2 py-6">
                        <div className="basis-1/2">
                            <Author image={authorAvatar} title="Creator" text={author} />
                        </div>
                        <div className="basis-1/2">
                            <Author color={attributes.color} title="Instant Price" text={instantPrice} />
                        </div>
                    </div>
                    <div className="rounded-3xl bg-main-grey p-8 mt-4 text-center">
                        <p className="text-xl pb-2">Current Bid</p>
                        <p className="text-6xl font-semibold pb-2">{highestBid}</p>
                        <p className="text-3xl text-light-grey font-semibold pb-10">$3,618.36</p> {/* HACER DINAMICO */}
                        <p className="text-xl pb-4">Auction ending in</p>
                        <div className="max-w-[220px] mx-auto flex justify-between pb-2">
                            <div>
                                <p className="text-4xl font-semibold pb-1">19</p>
                                <p className="text-xl text-light-grey">Hrs</p>
                            </div>
                            <div>
                                <p className="text-4xl font-semibold pb-1">24</p>
                                <p className="text-xl text-light-grey">mins</p>
                            </div>
                            <div>
                                <p className="text-4xl font-semibold pb-1">19</p>
                                <p className="text-xl text-light-grey">secs</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button className="mt-2" type='primary' >Place a bid</Button>
                        <Button className="mt-2" type='secondary' >View item</Button>
                    </div>
                    <div className="mt-6 flex">
                        <RoundedButton type="secondary" icon={ArrowLeft} />
                        <RoundedButton type="secondary" className="ml-2" icon={ArrowRight} />
                    </div>
                </div>
            </div>
        </>
    )
}