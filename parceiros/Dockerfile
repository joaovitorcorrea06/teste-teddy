# Usar uma imagem base do Node.js
FROM node:14 AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar apenas o package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos restantes para o contêiner
COPY . .

# Construir o aplicativo
RUN npm run build

# Usar uma imagem leve do Nginx para servir o aplicativo
FROM nginx:alpine

# Copiar os arquivos construídos para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta que o Nginx irá rodar
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
