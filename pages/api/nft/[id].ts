import { NextApiRequest, NextApiResponse } from 'next'

import data from 'server.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(404).send('route not found')
  const { id } = req.query

  return res.status(200).json(data.nfts.find(value => value.id === Number(id)))
}