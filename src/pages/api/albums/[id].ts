import type { NextApiRequest, NextApiResponse } from 'next'

import cors from 'helpers/init-middleware'

import albums from 'db/albums'
import songs from 'db/songs'

export default async (req: NextApiRequest, res: NextApiResponse<AlbumType>) => {
  await cors(req, res)

  const id = Number(req.query.id)

  const findAlbum = albums.find((item) => item.id === id) as AlbumType

  const findSongs = songs.filter((item) => item.albumId === id)

  res.status(200).json({ ...findAlbum, songs: findSongs })
}
