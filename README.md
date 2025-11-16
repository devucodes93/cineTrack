# Movie Review Aggregator

A simple full-stack **MERN** application to manage movies and user reviews with average rating calculation using MongoDB aggregation.

---

## Quick Start

1. Clone the repo and open the project directory:

```powershell
git clone https://github.com/devucodes93/cineTrack.git

```

2. Start backend and frontend in separate terminals (detailed steps below).

## Backend Setup

1. Install dependencies:

```powershell
cd backend
npm install
```

## Note on Environment Keys

2. No need to put env keys as i already pushed code with env file for simplicity:

3. Run the backend:

```powershell

nodemon index.js

or

npm run node
```

The server listens on `PORT` (default `3001`) and prints a startup message.

## Frontend Setup

1. Install dependencies and run the dev server:

```powershell
cd ../client
npm install
npm run dev
```

2. The frontend uses a default backend URL of `http://localhost:3001/api/`.
