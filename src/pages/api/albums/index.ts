import type { NextApiRequest, NextApiResponse } from 'next'

import cors from 'helpers/init-middleware'

import albums from 'db/albums'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<AlbumType[]>
) => {
  await cors(req, res)

  res.status(200).json(albums)
}
