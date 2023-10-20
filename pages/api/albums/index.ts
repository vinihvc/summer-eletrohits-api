import type { NextApiRequest, NextApiResponse } from 'next'

import cors from '@/helpers/init-middleware'

import { ALBUMS } from '@/db/albums'
import { SONGS } from '@/db/songs'

const getAlbums = async (
  req: NextApiRequest,
  res: NextApiResponse<AlbumType[]>,
) => {
  await cors(req, res)

  const albumsAndSongs = ALBUMS.map((album) => {
    return {
      ...album,
      songs: SONGS.filter((song) => album.id === song.albumId),
    }
  })

  res.status(200).json(albumsAndSongs)
}

export default getAlbums
