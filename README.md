#Descripcion
Sitigo web cabana santiago
## Deployment
1. En el dashboard de vercel crear la base de datos, actualizamo el .env con las credenciales de la base de datos
2. ejecutar el comando para que se cree las tablas
```
npx prisma migrate deploy
```
3. ejecutar el seed
```
npm run seed 
```
## Development
Pasos para levantar el desarrollo

1. Levantar la base de datos
```
docker compose up -d
```
2. Crear una copia de el .env.tempate y  renombrar a .env
```
mv .env.template .env
```
3. Reemplazar las variables de entorno en el archivo .env
4. Ejecutar el comando 
``` 
    npm install 
    or 
    npm run dev
```
5. Ejecutar estos comandos para crear la base de datos local
```
npx prisma migrate dev --name todos
npx prisma generate
```
6. Ejecutar el SEED para 
[crear la base de datos local](localhost:3000/api/seed)

8.-

# Prisma commands
```
npx prisma init
npx prisma migrate dev --name todos
npx prisma generate   //crea nuevo cliente para utilizar los modelos
npx prisma db pull  //crea modelos con una base de datos existente
npx prisma db push  //sincroniza modelos con bd sin pasar por migraciones
```
