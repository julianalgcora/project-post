# Projeto-post                                                          
                                                  
**Contexto**:  O servidor back-end feito em SpringBoot vai expor uma API que será consumida por uma aplicação Front-end ReactJS, persistindo os dados em um banco de dados mariaDB que será disponibilizado através de uma imagen Docker.

### Pré requisitos

jdk >= 8
Ter instalado na maquina a Engine [Docker](https://docs.docker.com/engine/install/)
Ter instalado na maquina a Engine [NodeJS](https://nodejs.org/en/download/)
Ter instalado na maquina o gerenciador de pacotes [NPM](https://www.npmjs.com/get-npm)


### Passos para testes:

-- DockerHub

**Executar o comando docker abaixo**

```sh
docker run --name mariadb -d -p 3308:3306 zaccantte/mariadb
```

-- Aplicacao backend

**Abrir novo terminal e fazer o checkout desse projeto e seguir o passo abaixo:**

```sh
git checkout https://github.com/farzac/project-post.git
cd project-pos/backend/
rm -rf target/
sudo chmod 777 mvnw
./mvnw spring-boot:run
```

-- Aplicacao frontend

**Abrir novo terminal e entrar no diretório do checkout do projeto conforme segue abaixo:**

```sh
cd project-post/frontend/
npm install
npm start
```
