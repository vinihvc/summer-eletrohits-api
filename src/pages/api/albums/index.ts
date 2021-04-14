import type { NextApiRequest, NextApiResponse } from 'next'

import albums from 'db/albums'

export default (req: NextApiRequest, res: NextApiResponse<AlbumType[]>) => {
  res.status(200).json(albums)
}
