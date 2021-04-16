import type { NextApiRequest, NextApiResponse } from 'next'

import cors from 'helpers/init-middleware'

import songs from 'db/songs'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SongType[]>
) => {
  await cors(req, res)

  const id = Number(req.query.id)

  const findSongs = songs.filter((item) => item.albumId === id)

  res.status(200).json(findSongs)
}
