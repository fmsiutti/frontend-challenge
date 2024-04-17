// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Auction } from '../../types/Auction';
import { API_KEY } from '../../config/constants';
import mockAuctions from '../../mock/auction'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Auction[]>
) {

    // const response = await fetch('http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/popular', {
    //     headers: {
    //         apiKey: `${API_KEY}`,
    //     }
    // })
    // const auctions = await response.json()

    // res.status(200).json(auctions)
    res.status(200).json(mockAuctions.slice(0, 2))
}
