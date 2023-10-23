FROM node:18.0

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY ./entrypoint.sh /usr/bin

RUN chmod +x /usr/bin/entrypoint.sh

COPY . .

CMD [ "bash" , "/usr/bin/entrypoint.sh" ]
