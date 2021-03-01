# AUTH-ECDF

Proyecto integración proveedores de servicios ECDF

## Dependencias

[NodeJs](https://nodejs.org/es) , 
[NpmJs](https://www.npmjs.com) ,
[ExpressJs](https://expressjs.com/es) ,
[TypeScript](https://www.typescriptlang.org) , 
[Nodemon](https://nodemon.io),
[MongoDb](https://www.mongodb.com) 

## Instalación
```bash
npm install --save
```

## Inicio

```npm
npm start
```

## ejecutar

- Obtener creadenciales
```
curl --location --request POST 'http://localhost:9001/auth/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "code": "xxx@x.com",
    "appId": "wom",
    "remember": false
}'
```

- Recordar credenciales
```
curl --location --request POST 'http://localhost:9001/auth/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "code": "x@x.x",
    "appId": "wom",
    "remember": true
}'
```
- Login Automatico

```
curl --location --request POST 'http://localhost:9001/auth/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "token"
}'
```

## Test

```npm
npm test
```

## Swagger

```sh
http://127.0.0.1:port/api/v1/api-docs
```

