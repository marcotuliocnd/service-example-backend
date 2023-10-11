#!/bin/bash
set -e

# Variables
IMAGE_TAG=latest
IMAGE_NAME=localhost:5000/service-example-backend

# Build and push
docker build -f ./Dockerfile -t ${IMAGE_NAME}:${IMAGE_TAG} .
docker push ${IMAGE_NAME}:${IMAGE_TAG}

# Deploy
kubectl apply -f ./deploy-dev.yml
