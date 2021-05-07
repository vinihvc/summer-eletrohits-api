import type { NextApiRequest, NextApiResponse } from 'next'

import cors from 'helpers/init-middleware'

import albums from 'db/albums'
import songs from 'db/songs'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<AlbumType[]>
) => {
  await cors(req, res)

  const albumsAndSongs = albums.map((album) => {
    return {
      ...album,
      songs: songs.filter((song) => album.id === song.albumId)
    }
  })

  res.status(200).json(albumsAndSongs)
}
