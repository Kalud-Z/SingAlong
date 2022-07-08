#FROM node:14-alpine as build
#WORKDIR /app
#
##COPY frontend/package.json .
#
#COPY package.json .
##it used to be like this. I had to change the path so I would work in the GitLab Pipeline.
#
#RUN npm install
#
#COPY . .
#
##COPY frontend .
#
#RUN npm run build
#
#FROM nginx
#COPY --from=build /app/dist/SingAlong /usr/share/nginx/html
#COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 4200 80
#CMD ["nginx", "-g", "daemon off;"]

#
#FROM node:10
#
#WORKDIR /app
#
#COPY package.json .
#
#RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
#
#COPY . .
#
#EXPOSE 4200
#
#CMD ["npm", "run" , "start:docker"]


FROM node:12.7-alpine AS build
WORKDIR /app
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli@10.0.4 && \
    npm install && \
    ng build
COPY . .


FROM nginx:1.17.1-alpine
WORKDIR /app
#COPY --from=build /app/dist/ui /usr/share/nginx/html
COPY --from=build /app/dist/SingAlong /usr/share/nginx/html


