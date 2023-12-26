FROM node:20-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npx prisma generate

ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001

CMD ["npm", "start"]