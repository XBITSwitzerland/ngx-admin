FROM node:carbon as builder

# Reduce log lever
ENV NPM_CONFIG_LOGLEVER warn

# Add Sources
WORKDIR /opt/

# Copy package.json first so that the npm install layer does not change when other code does
COPY package.json ./
RUN npm install
RUN npm install @angular/cli -g

COPY . ./
RUN ng build --prod

FROM node:carbon

WORKDIR /opt/backend

COPY --from=builder /opt/backend .
COPY --from=builder /opt/dist ./dist

RUN npm install

EXPOSE 8081

CMD ["npm", "start"]