import type { User, Attributes, Media } from '../types';

export default interface AuctionProps {
    title: string;
    instantPrice: string;
    highestBid: string;
    stock: number;
    likes: number;
    author: string;
    authorAvatar: string;
    type: string;
    createdAt: string;
    endsAt: string;
    bidUsers: User[];
    attributes: Attributes;
    media: Media;
}
