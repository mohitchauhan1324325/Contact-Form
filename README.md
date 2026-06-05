# She Can Foundation - Full Stack Web Application

## Overview

This project is a Full Stack Web Application developed for the She Can Foundation Internship Task.

The application allows users to register, log in, and submit contact messages. Administrators can access a dedicated dashboard to view and manage all submitted messages.

---

## Features

### User Features

* User Registration
* User Login
* Submit Contact Messages
* JWT Authentication

### Admin Features

* Admin Login
* View All Submitted Messages
* Delete Messages
* Protected Admin Dashboard

### Technical Features

* React.js Frontend
* Node.js & Express.js Backend
* MongoDB Database
* JWT Authentication
* Role-Based Authorization
* REST APIs
* Responsive UI with Tailwind CSS

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

---

## Project Structure

frontend/
├── src/
├── components/
├── pages/
└── api/

backend/
├── src/
├── controllers/
├── models/
├── routes/
├── middleware/
└── db/

---

## Installation

### Backend

npm install

npm run dev

### Frontend

npm install

npm run dev

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Contact

POST /api/contact/submit

GET /api/contact/all

DELETE /api/contact/:id

---

## Future Improvements

* Update Messages
* Search Functionality
* Pagination
* Export Data to CSV
* Email Notifications
* User Profile Management

---

## Author

Mohit Chauhan
