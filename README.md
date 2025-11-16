# MERN Stack Intern Assessment: Movie Review Aggregator

## Setup & Run (Windows PowerShell)

### Backend

1. Open a terminal and install dependencies:

```powershell
cd backend
npm install
```


2. Start the backend server (development):

```powershell
# uses nodemon if installed in dev dependencies
nodemon index.js
# or
npm run run
```

The backend will listen on the port specified in `PORT` (default `3001`).

### Client

1. Install client dependencies and run:

```powershell
cd client
npm install
npm run dev
```

2. Open the dev server URL shown by Vite (usually `http://localhost:5173`).

---

## Notes on Implementation

- Backend aggregation: implement an endpoint such as `GET /api/movies/with-ratings` that uses a pipeline to join `reviews` and compute average rating and review count per movie.
- Frontend lazy loading: use `React.lazy()`
- Review POST: send `POST /api/movies/:id/reviews` with `{ user, rating, comment }` and update the UI after success.

---

## Project Structure (expected)

- `backend/`: Express app, models, controllers, routes, `seeds/` for test data.
- `client/`: React app (Vite), pages, components, and store.

---


