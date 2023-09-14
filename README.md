# Teste de relação N:N do Prisma (REST API)

## Executando:
```bash
# caso utilize o Docker
$ docker compose up -d
```
```bash
# config do banco
$ cp .env.example .env
```
```bash
$ npm install
```
```bash
# executar migrations
$ npx prisma migrate dev
```

```bash
$ npm run dev
```

## Conhecendo as rotas:
```bash
/courses -> GET

/courses -> POST # enviar body.json no formato { "name": "Course 1", "description": "Description 1" }

# rota para atualizar um curso adicionando um estudante a ele
# enviar body.json no formato { "studentId": 1 }
/courses/:courseId -> PUT
```

```bash
/students -> GET

/students -> POST # enviar body.json no formato { "name": "Student 1" }

# rota para atualizar um estudante adicionando um curso a ele
# enviar body.json no formato { "courseId": 1 }
/students/:studentId -> PUT
```

## Testando as rotas
Caso utilize o Insomnia como REST API Client, o arquivo de exportação das rotas está no diretório: `/insomnia/insomnia-routes.json`


