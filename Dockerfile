FROM node:16 as builder
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["yarn", "start:prod"]