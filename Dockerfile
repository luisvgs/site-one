FROM node:16
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

<<<<<<< HEAD
RUN npm run build

CMD ["npm", "start"]
=======
EXPOSE 8080
CMD npm start
>>>>>>> 2f0c776 (Dockerfile tweaks)
