import type { SongType } from './song'

export type AlbumType = {
  id: string
  name: string
  thumb: string
  releaseDate: string
  songs?: SongType[]
}
