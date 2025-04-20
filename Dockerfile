FROM node:20-alpine as build

WORKDIR /app

# Copy package.json files
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm install
RUN cd frontend && npm install

# Copy the rest of the code
COPY . .

# Build frontend
RUN cd frontend && npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built application from previous stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/backend ./backend
COPY --from=build /app/frontend/dist ./frontend/dist
COPY --from=build /app/node_modules ./node_modules

# Expose the port the app will run on
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["node", "backend/server.js"] 