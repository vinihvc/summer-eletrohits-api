# Summer Eletrohits API

Lista de todas as músicas e albuns do Summer Eletrohits

 * [Listar todos os álbuns](https://eletrohits-api.viniciusvicentini.com/api/albums): `GET api/albums`
 * [Listar todas as músicas de um álbum](https://eletrohits-api.viniciusvicentini.com/api/albums/1): `GET api/albums/:id`
 * [Listar todas as músicas](https://eletrohits-api.viniciusvicentini.com/api/songs): `GET api/songs`
 * [Listar todas as músicas de um álbum](https://eletrohits-api.viniciusvicentini.com/api/songs/10): `GET api/songs/:id`

 #### Album
  ```javascript
    {
      id: number
      name: string
      thumb: string
      releaseDate: string
      videoUrl: string
    }
  ```

   #### Musica
  ```javascript
    {
      id: number
      albumId: number
      name: string
      singer: string
      videoUrl: string,
      order: number
    }
  ```
