From ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh && apt-get install -y nodejs
RUN apt-get upgrade -y


COPY package-lock.json package-lock.json
COPY package.json package.json


WORKDIR /app

RUN npm install



COPY . .


RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]

