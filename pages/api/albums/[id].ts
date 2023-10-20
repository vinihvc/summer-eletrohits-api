import type { NextApiRequest, NextApiResponse } from 'next'

import cors from '@/helpers/init-middleware'

import { ALBUMS } from '@/db/albums'
import { SONGS } from '@/db/songs'

const getAlbum = async (
  req: NextApiRequest,
  res: NextApiResponse<AlbumType>,
) => {
  await cors(req, res)

  const id = Number(req.query.id)

  const findAlbum = ALBUMS.find((item) => item.id === id) as AlbumType

  const findSongs = SONGS.filter((item) => item.albumId === id)

  res.status(200).json({ ...findAlbum, songs: findSongs })
}

export default getAlbum
