import type { NextApiRequest, NextApiResponse } from 'next'

import cors from '@/helpers/init-middleware'

import { SONGS } from '@/db/songs'
import { SongType } from '@/types/song'

const getSong = async (
  req: NextApiRequest,
  res: NextApiResponse<SongType | { message: string }>,
) => {
  await cors(req, res)

  const id = req.query.id

  const song = SONGS.find((item) => item.id === id)

  if (!song) {
    return res.status(404).json({ message: 'Song not found' })
  }

  res.status(200).json(song)
}

export default getSong
