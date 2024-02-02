FROM node:alpine
RUN npm -g install pnpm

WORKDIR /usr/src/app

COPY package.json ./

RUN pnpm install

COPY . .

EXPOSE 4000

# Creates a "dist" folder with the production build
RUN pnpm run build

# Start the server using the production build
CMD [ "pnpm", "run", "start:prod" ]