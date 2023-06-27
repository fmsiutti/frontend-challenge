
type User = {
    id: number;
    name: string;
    avatar: string;
}

type Attributes = {
    id: number;
    color: string;
    type: string;
}

type Media = {
    id: number;
    image: string;
    image2x: string;
}

export interface Author {
    image?: string;
    title: string;
    text: string;
    color?: string;
}

export interface Badge {
    content: string;
    color: string;
    fill: boolean;
    className?: string;
}

export interface Bidder {
    image: string;
    name: string;
    index?: number;
}

export interface Auction {
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
