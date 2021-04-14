import type { NextApiRequest, NextApiResponse } from 'next'

import songs from 'db/songs'

export default (req: NextApiRequest, res: NextApiResponse<SongType[]>) => {
  const id = Number(req.query.id)

  const findSongs = songs.filter((item) => item.albumId === id)

  res.status(200).json(findSongs)
}
