import type { NextApiRequest, NextApiResponse } from 'next'

import albums from 'db/albums'
import songs from 'db/songs'

export default (req: NextApiRequest, res: NextApiResponse<AlbumType>) => {
  const id = Number(req.query.id)

  const findAlbum = albums.find((item) => item.id === id) as AlbumType

  const findSongs = songs.filter((item) => item.albumId === id)

  res.status(200).json({ ...findAlbum, songs: findSongs })
}
