# Summer Eletrohits API

## Working in progress

API que lista todas os albuns e músicas de todas a edições do Summer Eltrohits

 * [Listar todos os álbuns](https://summer-eletrohits-api.vercel.app/api/albums): `GET api/albums`
 * [Listar todas as músicas de um álbum](https://summer-eletrohits-api.vercel.app/api/albums/1): `GET api/albums/:id`
 * [Listar todas as músicas](https://summer-eletrohits-api.vercel.app/api/songs): `GET api/songs`
 * [Listar todas as músicas de um álbum](https://summer-eletrohits-api.vercel.app/api/songs/10): `GET api/songs/:id`

 #### Estrutura do álbum:
  ```javascript
    {
      id: number
      name: string
      thumb: string
      releaseDate: string
      videoUrl: string
    }
  ```

   #### Estrutura da música:
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

Sinta-se a vontade em me enviar um PR ;)
