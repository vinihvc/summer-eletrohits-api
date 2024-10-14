import type { NextApiRequest, NextApiResponse } from 'next'

import cors from '@/helpers/init-middleware'

import { ALBUMS } from '@/db/albums'
import { SONGS } from '@/db/songs'
import { AlbumType } from '@/types/album'

const getAlbum = async (
  req: NextApiRequest,
  res: NextApiResponse<AlbumType | { message: string }>,
) => {
  await cors(req, res)

  const id = req.query.id as string

  const album = ALBUMS.find((item) => item.id === id)

  if (!album) {
    return res.status(404).json({ message: 'Album not found' })
  }

  const songs = SONGS.filter((item) => item.albumId === id)

  if (!songs) {
    return res.status(404).json({ message: 'Songs not found' })
  }

  res.status(200).json({ ...album, songs })
}

export default getAlbum
