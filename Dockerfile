FROM node:latest


WORKDIR /app


EXPOSE  3333

RUN node ace migration:run

CMD ["npm", "run", "dev"]

