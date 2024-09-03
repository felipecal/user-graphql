# 🔥 User Graphql 🔥


This is a simple api that has user, user posts, likes on a post and comments on a post

## Technologies and Libraries Used

- TypeScript
- Graphql
- Docker Database
- Sequelize - ORM
- Docker - Conteinarization

## Installation

1. Clone this repository to your development environment:

```bash
git clone https://github.com/felipecal/user-graphql

cd user-graphql
```

<br>

2. Install the dependencies:

```bash
npm install

or

yarn install
```

<br>

3. Database

- Copy .env_example, create the .env file with the code of .env_example and set the .env file. Now you can create your database and app in docker with command:

```
docker compose up --build -d
```


<br>

4. If you want to run the application in your local, comment the part of docker-compose that contains "web", line 3 until line 20 and run docker-compose again and start the applicaation with:

```bash
npm start

or

yarn start

```

