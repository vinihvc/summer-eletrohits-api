import type { NextApiRequest, NextApiResponse } from 'next'

import cors from '@/helpers/init-middleware'

import { SONGS } from '@/db/songs'

const getSongs = async (
  req: NextApiRequest,
  res: NextApiResponse<SongType[]>,
) => {
  await cors(req, res)

  res.status(200).json(SONGS)
}

export default getSongs
