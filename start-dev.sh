#!/bin/bash

# Change to the server directory
cd server

# Update Node modules
npm ci

# Run npm run build
npm run build

# Run npm run dev for server
npm run dev &

# Go back to the previous directory
cd -

# Change to the client directory
cd client

# Update Node modules
npm ci

# Run npm run dev for client
npm run dev