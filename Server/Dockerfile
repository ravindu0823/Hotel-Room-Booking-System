FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ENV ATLAS_URI=mongodb+srv://dhanu:dhanu751@full-stack-development.nipgpqd.mongodb.net/?retryWrites=true&w=majority
ENV DUMMY_ATLAS_URI=mongodb+srv://dhanu:dhanu751@linkedin.vmlw5fb.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET=fc6b436fb79612607f5032a7455cc73c1ad1ff0a4ca1fddf2a0d4fa746d5c8f3
ENV HTTP_PORT=4000
ENV HTTPS_PORT=8443

EXPOSE 8443

CMD [ "yarn", "start" ]