############################################################
# Dockerfile para configurar aplicación
############################################################
# Establece la imagen base
FROM node:12.17.0-alpine
# Información de Metadata
LABEL "cl.montuln.appNode"="MONTULN DESARROLLOS TECNOLOGICOS"
LABEL maintainer="montulnspa@gmail.com"
LABEL version="1.0"
# Crear directorio de trabajo
RUN mkdir -p /opt/app
# Se estable el directorio de trabajo
WORKDIR /opt/app
# Instala los paquetes existentes en el package.json
COPY package.json .
COPY tsconfig.json .
COPY nodemon.json .
COPY jest.config.js .
COPY src /app/src
# Instalación de Nodemon en forma Global
# Al realizarse cambios reiniciar el servidor
#RUN npm install nodemon -g --quiet
#RUN npm install typescript --save-dev
RUN npm install .
#RUN npm i body-parser cors express mongoose
#RUN npm i -D @types/body-parser @types/cors @types/express @types/mongoose @types/node nodemon ts-node typescript


# Copia la Aplicación
COPY . .
# Expone la aplicación en el puerto 9001
EXPOSE 9001
# Inicia la aplicación al iniciar al contenedor nodemon -L --watch . app.js
CMD npm start