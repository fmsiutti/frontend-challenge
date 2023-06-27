// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Price } from '../../types/Price';
import { API_KEY } from '../../config/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Price>
) {
  const response = await fetch('http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/eth-price', {
      headers: {
            apiKey: `${API_KEY}`,
      }
  })
  const price = await response.json()

  res.status(200).json(price)
}
