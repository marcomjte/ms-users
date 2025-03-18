# Versión de nodejs
FROM node:23.7

WORKDIR /usr/src/app

COPY package*.json ./

# Instalar dependencias
RUN npm install

# Generamos los archivos .js de todo el proyecto
RUN npm build

#Sobreescribimos sobre un archivo temporal que sustituye al archivo original, .ts por .js al archivo final
RUN sed -i 's/*.ts/*.js/g' src/app/data-source.js

# Copiar el resto del código
COPY . .

# Puerto de la api
EXPOSE 3000

# Comando para correr la app
CMD ["node", "src/index.js"]