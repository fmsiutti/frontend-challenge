import Image from 'next/image'

import { Auction } from '@/types/Auction'
import TrendingUp from '@/assets/TrendingUp.svg'
import Bid from '@/assets/Bid.svg'
import Favourite from './Favourite';
import { Button, Divider } from '../common';
import Bidder from './Bidder';
import Badge from './Badge';

export default function AuctionList({ title, instantPrice, attributes, type, highestBid, stock, likes, author, authorAvatar, createdAt, endsAt, media, bidUsers }:Auction) {
    
    const bidUsersRender = bidUsers.slice(0,3).map((bidUser, index) => <Bidder key={index} index={index} name={bidUser.name} image={bidUser.avatar} />)

    return (
        <div className="rounded-xl bg-main-grey group">
            <div className="p-3">
                <div className="image-container relative">
                    <Image width={232} height={288} alt={author} className="rounded-xl w-full" src={media.image} />
                    <div className="p-3 top-0 badges absolute w-full h-full opacity-0 group-hover:opacity-100">
                        <Badge className="left-3 top-4 p-1.5 absolute" fill={true} content={attributes.type.toUpperCase()} color={attributes.color} />
                        <Favourite className="right-3 absolute" />
                        <div className="absolute bottom-4 w-[60%] left-[20%]">
                            <Button type="primary" className="text-sm" ><span className="flex items-center justify-evenly">Place a bid {<Image className="inline" alt="Place a bid" width={16} height={16} src={Bid} />}</span></Button>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="flex pt-3">
                        <p className="basis-7/10 whitespace-nowrap overflow-hidden text-ellipsis max-w-[70%]">{author}</p>
                        <p className="basis-3/10 text-right">
                            <Badge content={instantPrice} color="green" fill={false} />
                        </p>
                    </div>
                    <div className="flex pt-3 justify-between">
                        <div className="basis-2/4 flex relative">
                            {bidUsersRender}
                        </div>
                        <div className="text-sm basis-2/4 text-right">
                            {stock} in stock
                        </div>
                    </div>
                    <div className="py-3">
                        <Divider /> 
                    </div>
                    <div className="flex py-3 justify-between text-light-grey">
                        <span className="text-xs basis-4/6"><Image className="inline" src={TrendingUp} width={20} height={20} alt="Highest bid" /> Highest bid <span className="text-white">{highestBid}</span></span>
                        <span className="text-right text-xs basis-2/6">New bid 🔥</span>
                    </div>
                </div>
            </div>
        </div>
    )
}