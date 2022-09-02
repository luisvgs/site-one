FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install && npm run build

# FROM node:latest as server-build
# WORKDIR /root/
COPY . .
# COPY --from=react-build /app/build ./app/build
# RUN cd app && npm install

CMD npm start
