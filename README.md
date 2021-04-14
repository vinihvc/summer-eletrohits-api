# Summer Eletrohits API

## Working in progress

API que lista todas os albuns e músicas de todas a edições do Summer Eltrohits

 * Listar todos os álbuns: `GET api/albums`
 * Listar todas as músicas de um álbum: `GET api/albums/:id`
 * Listar todas as músicas: `GET api/songs`
 * Listar todas as músicas de um álbum: `GET api/songs/:id`

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
