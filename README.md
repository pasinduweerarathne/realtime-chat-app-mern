# Realtime Chat App

A full-stack real-time chat application built with the MERN stack, Socket.IO, Clerk authentication, and modern UI components.

## Overview

This project combines a Node.js/Express backend with a React/Vite frontend to deliver a polished chat experience with:

- secure authentication with Clerk
- real-time message delivery with Socket.IO
- private conversations and message history
- media sharing for images and videos
- custom themes and wallpapers
- persistent client-side chat preferences

## Tech Stack

| Layer    | Stack                                                                   |
| -------- | ----------------------------------------------------------------------- |
| Backend  | Node.js, Express, MongoDB, Mongoose, Socket.IO, Clerk, Multer, ImageKit |
| Frontend | React, Vite, Tailwind CSS, HeroUI, Zustand, Axios, React Router         |

## Project Structure

```text
backend/
  src/
    controllers/
    lib/
    middleware/
    models/
    routes/
    webhooks/
frontend/
  src/
    components/
    context/
    hooks/
    lib/
    pages/
    store/
    styles/
```

## Features

### Backend

- REST API routes for authentication and messaging
- JWT-style Clerk-based request protection
- MongoDB models for users and messages
- Socket.IO online user tracking
- webhook handling for Clerk events
- media uploads through ImageKit

### Frontend

- authentication screens and protected chat views
- conversation sidebar and message list UI
- composer for text and media messages
- real-time updates for incoming messages
- theme and wallpaper customization
- Zustand stores for auth and chat state

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- MongoDB instance
- Clerk account
- ImageKit account (optional for media uploads)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder with values such as:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SIGNING_SECRET=your_webhook_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Run the backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend folder with:

```env
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Run the frontend:

```bash
npm run dev
```

Open the app at `http://localhost:5173`.

## API Overview

### Health

- `GET /health`

### Auth

- `GET /api/auth/check`

### Messages

- `GET /api/messages/users`
- `GET /api/messages/conversations`
- `GET /api/messages/:id`
- `POST /api/messages/send/:id`

### Webhooks

- `POST /api/webhooks/clerk`

## Production Build

Build the frontend:

```bash
cd frontend
npm run build
```

Start the backend in production mode:

```bash
cd backend
npm start
```

## Notes

- The backend serves the built frontend in production when the public build output is present.
- Socket.IO is used for real-time event delivery between connected clients.
- Media uploads depend on ImageKit configuration.
