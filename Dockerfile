FROM node:14-alpine

# Create app directory
RUN mkdir /app
WORKDIR /app

# where available (npm@5+)
COPY package*.json /app/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . /app

ENV NODE_ENV QA
ENV PORT 3000
EXPOSE 3000
CMD ["npm", "start"]