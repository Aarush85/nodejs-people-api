# People Manager Backend

A RESTful API built with Node.js, Express, and MongoDB for managing people records.  
This backend service is designed to work seamlessly with the Angular 8 frontend application.

## Prerequisites

- Node.js v12.22.12 (required for compatibility)
- MongoDB (local or Atlas)
- npm (comes with Node.js)

## Getting Started

This API provides endpoints to create, read, update, and delete person records.  
You can test it independently with Postman or connect it to the Angular frontend.

## Installation

1. **Install Node.js v12.22.12 using nvm:**
```bash
nvm install 12.22.12
nvm use 12.22.12
````

2. **Navigate to the backend folder:**

```bash
cd backend
```

3. **Install project dependencies:**

```bash
npm install
```

4. **Create a `.env` file manually** in the root of the `backend` directory and add the following content:

> 🔐 Replace the `MONGODB_URI` with your own MongoDB URI (local or Atlas):

```env
PORT=3000
MONGODB_URI="mongodb+srv://<your-username>:<your-password>@cluster1.qe2fn90.mongodb.net/persondb"
```

## Running the Application

1. **Start the development server:**

```bash
npm run dev
```

2. **API will be accessible at:**

```
http://localhost:3000
```

## API Endpoints

All API routes are prefixed with `/api`.

### People

* `GET /api/person` – Fetch all people
* `GET /api/person/:id` – Fetch a specific person by ID
* `POST /api/person` – Create a new person
* `PUT /api/person/:id` – Update an existing person
* `DELETE /api/person/:id` – Delete a person

### Sample Request – Create Person

```http
POST /api/person
Content-Type: application/json

{
  "name": "Alice",
  "age": 28,
  "gender": "female",
  "mobileNumber": "9876543210"
}
```

## Testing the API with Postman

You can test all the above endpoints using [Postman](https://www.postman.com/):

1. Launch the server with:

```bash
npm run dev
```

2. Use the base URL:

```
http://localhost:3000/api/person
```

3. Perform CRUD operations by sending appropriate requests and payloads.

## Project Structure

```
backend/
├── src/
│   ├── models/
│   │   └── Person.js
│   ├── routes/
│   │   └── person.js
│   ├── middlewares/
│   │   └── validatePerson.js
│   └── app.js
├── .env
├── package.json
└── ...
```

## Available Scripts

* `npm start` – Start the server
* `npm run dev` – Start server with nodemon (auto reloads on file changes)
* `npm test` – Run tests (if implemented)

## Dependencies

* express 4.17.1
* mongoose 5.13.7
* cors 2.8.5
* dotenv 10.0.0
* express-validator 6.12.1

---

✅ **Note**: This project is configured specifically for **Node.js v12.22.12** to ensure compatibility with **Angular 8** in the frontend.
