FROM node:alpine3.14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install
FROM nginx:alpine
COPY --from=build /app/dist/my-app1 /usr/share/nginx/html
