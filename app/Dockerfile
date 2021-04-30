FROM node:14.16
RUN apt-get update && apt-get install -y --no-install-recommends vim && apt-get clean
WORKDIR /app
RUN npm install -g serverless
COPY ./src ./src
COPY package*.json ./
RUN npm install
CMD ["npm", "run", "start"]
