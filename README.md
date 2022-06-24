# Folklore

 
Esse projeto é uma API desenvolvida para o [Folklore](https://github.com/tieskay/folklore);


# Sobre

<div>
  <p>Features</p>
  
  - [X] Inserir novas músicas no catálogo por meio de arquivo LRC

  - [X] Visualizar todas as músicas disponíveis

  - [X] Buscar informações de uma música pelo id

  - [X] Incrementar visualizações de uma música
</div>

# Endpoints

<div>
  <details>
    <summary><strong>GET</strong> /songs</summary>
    - retorna status <strong>200</strong> para sucesso

    e

    ```json
    [
      {
        "id": 1,
        "name": "the 1",
        "youtubeLink": "https://www.youtube.com/watch?v=KsZ6tROaVOQ",
        "cover": "http://img.youtube.com/vi/KsZ6tROaVOQ/mqdefault.jpg",
        "artistId": 1,
        "createdAt": "2022-05-23T19:52:17.978Z",
        "viewsCount": 1,
        "artist": {
          "id": 1,
          "name": "Taylor Swift"
        }
      },
    ]
    ```
  </details>

  <details>
    <summary><strong>GET</strong> /songs/:songId</summary>
    - retorna status <strong>200</strong> para sucesso
    - retorna status <strong>400</strong> para songId inválidos (não numéricos)
     - retorna status <strong>404</strong> se o songId enviado não corresponde ao de nenhuma música

    e

    ```json
      {
        "id": 1,
        "name": "the 1",
        "youtubeLink": "https://www.youtube.com/watch?v=KsZ6tROaVOQ",
        "cover": "http://img.youtube.com/vi/KsZ6tROaVOQ/mqdefault.jpg",
        "artistId": 1,
        "createdAt": "2022-05-23T19:52:17.978Z",
        "viewsCount": 1,
        "artist": {
          "id": 1,
          "name": "Taylor Swift"
        }
      }
    ```
  </details>

  <details>
    <summary><strong>POST</strong> /songs/:songId/view </summary>
    - retorna status <strong>200</strong> para sucesso
    - retorna status <strong>400</strong> para id inválidos (não numéricos)
    - retorna status <strong>400</strong> se o songId enviado não corresponde ao de nenhuma música

    e

    ```json
      {
        "id": 1,
        "name": "the 1",
        "youtubeLink": "https://www.youtube.com/watch?v=KsZ6tROaVOQ",
        "cover": "http://img.youtube.com/vi/KsZ6tROaVOQ/mqdefault.jpg",
        "artistId": 1,
        "createdAt": "2022-05-23T19:52:17.978Z",
        "viewsCount": 1,
        "artist": {
          "id": 1,
          "name": "Taylor Swift"
        }
      }
    ```
  </details>

  <details>
    <summary><strong>POST</strong> /songs</summary>

    É preciso enviar um body no formato a seguir: 


    ```json
    {
        "name": "the 1",
        "youtubeLink": "https://www.youtube.com/watch?v=KsZ6tROaVOQ",
        "artistId": 1 ,
        "lrcLyric": "[ti:The 1 Taylor Swift]
    [length:03:31.30]
    [00:14.99]I'm doing good, I'm on some new shit
    [00:18.74]Been saying Yes instead of No
    [00:22.24]I thought I saw you at the bus stop, I didn't though
    [00:28.74]I hit the ground running each night
    [00:32.23]I hit the Sunday matinee
    [00:35.74]You know the greatest films of all time were never made
    [00:42.49]I guess you never know, never know
    [00:46.23]And if you wanted me, you really should've showed
    [00:49.75]And if you never bleed, you're never gonna grow
    [00:52.49]And it's alright now
    [00:56.49]But we were something, don't you think so?
    [00:59.74]Roaring twenties, tossing pennies in the pool
    [01:03.23]And if my wishes came true
    [01:06.99]It would've been you
    [01:10.24]In my defense, I have none
    [01:13.48]For never leaving well enough alone
    [01:16.99]But it would've been fun
    [01:20.74]If you would've been the one
    [01:30.99]I have this dream you're doing cool shit
    [01:33.99]Having adventures on your own
    [01:37.51]You meet some woman on the Internet and take her home
    [01:44.48]We never painted by the numbers, baby
    [01:47.74]But we were making it count
    [01:51.26]You know the greatest loves of all time are over now
    [01:58.24]I guess you never know, never know
    [02:01.74]And it's another day, waking up alone
    [02:05.24]But we were something, don't you think so?
    [02:08.24]Roaring twenties, tossing pennies in the pool
    [02:11.99]And if my wishes came true
    [02:15.75]It would've been you
    [02:19.24]In my defense, I have none
    [02:21.98]For never leaving well enough alone
    [02:25.74]But it would've been fun
    [02:29.24]If you would've been the one
    [02:32.49]Hey, yeah-yeah
    [02:34.49]Persist and resist the temptation to ask you
    [02:38.24]If one thing had been different
    [02:41.24]Would everything be different today?
    [02:46.22]We were something, don't you think so?
    [02:49.74]Rosé flowing with your chosen family
    [02:52.74]And it would've been sweet
    [02:56.48]If it could've been me
    [03:00.24]In my defense, I have none
    [03:03.24]For digging up the grave another time
    [03:06.74]But it would've been fun
    [03:10.26]If you would've been the one",
    }
    ```

    - retorna status <strong>201</strong> para sucesso
    - retorna status <strong>422</strong> caso o schema do body esteja incorreto
    - retorna status <strong>400</strong> caso o id do artista seja inválido
    - retorna status <strong>409</strong> caso a música já exista no banco de dados

  </details>
  
</div>


# Tecnologias

As seguintes tecnologias foram utilizadas para o desenvolvimento do projeto:

## Technologies

<div style="display: flex; gap: 10px;" >
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </a>
  <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="prisma" />
  </a>
  <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgresql" />
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  </a>
</div>
# Requisitos

### [npm](https://www.npmjs.com/)

<details>
    <summary>install npm</summary>
  </br>

```bash
wget -qO- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh> | bash
## Or this command
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# Close and open terminal
nvm install --lts
nvm use --lts
# Verify node version
node --version # Must show v14.16.1
# Verify npm version
npm -v
```

</details>

### [postgreSQL](https://www.postgresql.org/)

<details>
    <summary>install postgres</summary>
    <br>

```bash
sudo apt install postgresql postgresql-contrib
```

</details>

# Como executar o projeto

1. Clone este repositório
2. Instale as dependências

```bash
npm i
```

3. Crie o arquivo .env na raiz do projeto e configure conforme o arquivo .env.example

4. Crie a database com o prisma

- abra o terminal e execute o seguinte comando

```bash
npx prisma init
npx prisma migrate dev
```

5. Execute o projeto

```bash
npm run dev
```