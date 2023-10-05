# OS
FROM node:14-slim

# Workdir
WORKDIR /root/workspace

# Install Deps
RUN \
  apt-get update && \
  apt-get install curl git -y

# Install
COPY package.json package-lock.json /root/workspace/
RUN npm install

# Build
COPY . /root/workspace/
RUN npm run build

# Start Application
ENTRYPOINT [ "npm", "start" ]
