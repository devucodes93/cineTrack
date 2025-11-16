# MERN Stack Intern Assessment: Movie Review Aggregator

This repository contains my implementation of a Movie Review Aggregator built with the MERN stack.

## Setup & Run (Windows PowerShell)

### Backend

From the project root I install backend dependencies and start the server:

```powershell
cd backend
npm install
```

To run the backend in development I use:

```powershell
# if you have nodemon globally or in devDependencies
npm run dev
# or fallback to
npm run run
```

The backend listens on the port defined in `PORT` in `backend/.env` (I used `3001` during development).

### Client

To run the frontend locally I install dependencies and start Vite:

```powershell
cd client
npm install
npm run dev
```

Then I open the dev URL that Vite prints (typically `http://localhost:5173`).

---

If you want me to add more project notes, API examples, or a separate `backend/README.md` and `client/README.md`, I can create those next.

