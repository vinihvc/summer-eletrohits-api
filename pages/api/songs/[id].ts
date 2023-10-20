import type { NextApiRequest, NextApiResponse } from 'next'

import cors from '@/helpers/init-middleware'

import { SONGS } from '@/db/songs'

const getSong = async (
  req: NextApiRequest,
  res: NextApiResponse<SongType[]>,
) => {
  await cors(req, res)

  const id = Number(req.query.id)

  const findSongs = SONGS.filter((item) => item.albumId === id)

  res.status(200).json(findSongs)
}

export default getSong
