# Summer Eletrohits API

## Working in progress

API que lista todas os albuns e músicas de todas a edições do Summer Eltrohits

 * Listar todos os álbuns: `GET /albums`
 * Listar todas as músicas: `GET /songs`
 * Listar todas as músicas de um álbum: `GET /albums/:id`

 #### Estrutura do álbum:
  ```javascript
    {
      id: number
      name: string
      thumb: string
      releaseDate: Date
      videoUrl: string
    }
  ```

   #### Estrutura da música:
  ```javascript
    {
      id: number
      name: string
      singer: string
      videoUrl: string
    }
  ```

Sinta-se a vontade em me enviar um PR ;)
