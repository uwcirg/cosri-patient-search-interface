FROM node:12 as build-env

RUN mkdir /tmp/frontend
WORKDIR /tmp/frontend

# cache hack; fragile
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# -----------------------------------------------------------------------------
FROM nginx

# Copy front-end files built in previous stage
COPY --from=build-env /tmp/frontend/dist /usr/share/nginx/html

EXPOSE 80
