FROM node:latest as react-build
WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM node:latest as server-build
WORKDIR /root/
COPY . ./app
COPY --from=react-build /app/build ./app/build
RUN cd app && npm install

EXPOSE 8080
CMD npm start
