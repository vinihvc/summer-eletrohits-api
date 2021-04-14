import type { NextApiRequest, NextApiResponse } from 'next'

import songs from 'db/songs'

export default (req: NextApiRequest, res: NextApiResponse<SongType[]>) => {
  res.status(200).json(songs)
}
