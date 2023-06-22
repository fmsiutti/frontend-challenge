import Image from 'next/image'

import { AuctionProps } from '../../interfaces'
import Bidder from '../common/Bidder';
import Divider from '../common/Divider';
import Badge from '../common/Badge';
import TrendingUp from '../../assets/TrendingUp'

export default function AuctionList({ title, instantPrice, type, highestBid, stock, likes, author, authorAvatar, createdAt, endsAt, media, bidUsers }:AuctionProps) {
    
    const bidUsersRender = bidUsers.slice(0,3).map((bidUser, index) => <Bidder key={index} index={index} name={bidUser.name} image={bidUser.avatar} />)

    return (
        <div className="rounded-xl bg-main-grey">
            <div className="p-3">
                <div className="image-container relative h-72">
                    <Image fill={true} alt={title} className="rounded-xl h-20" src={media.image} />
                </div>
                <div className="body">
                    <div className="flex pt-3">
                        <p className="text-lg basis-7/10 whitespace-nowrap overflow-hidden text-ellipsis max-w-[70%]">{title}</p>
                        <p className="basis-3/10 text-right">
                            <Badge content={instantPrice} color="green" fill={false} />
                        </p>
                    </div>
                    <div className="flex pt-3 justify-between">
                        <div className="basis-2/4 flex relative">
                            {bidUsersRender}
                        </div>
                        <div className="basis-2/4 text-right">
                            {stock} in stock
                        </div>
                    </div>
                    <div className="py-3">
                        <Divider /> 
                    </div>
                    <div className="flex py-3 justify-between text-light-grey">
                        <span className="text-sm basis-4/6"><TrendingUp /> Highest bid</span>
                        <span className="text-sm basis-2/6">New bid 🔥</span>
                    </div>
                </div>
            </div>
        </div>
    )
}