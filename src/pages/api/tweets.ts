// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Tweets = {
  text: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweets[]>
) {
  //axios.get('externa')
  //cache
  //Vercel
  res.status(200).json([
    {text: 'Tweet 1'},
    {text: 'Tweet 2'},
    {text: 'Tweet 3'},
  ])
}

//API Gateway ou Proxy
