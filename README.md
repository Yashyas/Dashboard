# Dashboard Application

A responsive task-management dashboard built with the MERN stack.  
Features include authentication, real-time UI updates, task filters, mobile navigation, and a modern glassmorphic interface.

## Tech Stack

### Frontend
- React + Vite  
- TailwindCSS  
- shadcn/ui  
- Zustand (state management)  
- Axios  
- Lucide Icons  

### Backend
- Node.js  
- Express  
- MongoDB Atlas  
- JWT Authentication  
- Mongoose ORM  

##  Features

- User authentication (login, register, JWT, protected routes)
- Full CRUD operations for tasks
- Ongoing and Completed task grouping
- Search + Filters (All / Ongoing / Completed)
- Fully responsive layout   
  - Full-height desktop sidebar  
  - Mobile slide-in sidebar  
- Add-Task drawer (shadcn Drawer)
- Clean UI built with Tailwind + shadcn components
- Light and dark theme

````

##  Setup Instructions

### 1. Clone the repository
```sh
git clone <repo-url>
cd dashboard
````

### 2. Install dependencies

```sh
npm install
```

### 3. Configure environment variables

Create a `.env` file in both frontend and backend:

#### **Frontend**

```
VITE_API_URL=http://localhost:5000
```

#### **Backend**

```
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Start the backend

```sh
cd Backend
npm run dev
```

### 5. Start the frontend

```sh
cd ../frontend
npm run dev
```

##  Authentication Flow

* User logs in → receives JWT
* Token stored in Zustand store
* Axios automatically attaches JWT to all API requests
* `/api/auth/me` used to validate session

##  API Routes
* Postman Collection of tests are provided

### Auth

* **POST** `/api/auth/register`
* **POST** `/api/auth/login`
* **GET** `/api/auth/me`

### Tasks

* **GET** `/api/tasks` (supports search + filters)
* **POST** `/api/tasks`
* **PUT** `/api/tasks/:id`
* **DELETE** `/api/tasks/:id`

