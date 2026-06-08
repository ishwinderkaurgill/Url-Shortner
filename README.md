# Url-Shortner-

# 🔗 URL Shortener API - Node.js & MongoDB

A lightweight, RESTful URL shortening service API built with Node.js, Express, and MongoDB. Generate unique short URLs, track click analytics, and redirect users seamlessly.

## ✨ Features

- **URL Shortening** - Convert long URLs into compact 8-character codes
- **Auto-redirection** - Instantly redirect short URLs to original destinations
- **Click Analytics** - Track every visit with timestamp data
- **RESTful API** - Clean, predictable API endpoints
- **MongoDB Storage** - Persistent storage for URLs and analytics
- **Environment Config** - Secure configuration with dotenv
- **Lightweight** - Minimal dependencies, fast response times

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB schema modeling |
| **NanoID** | Unique short ID generation (8 characters) |
| **dotenv** | Environment variable management |

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/movies` | Get all movies |
| GET | `/movies/:id` | Get movie by ID |
| GET | `/movies/year/:year` | Get movies by release year |
| GET | `/moviesStats` | Get total count & average rating |
| POST | `/` | Create a new movie |
| PATCH | `/movies/:id` | Update rating/watched status |
| PATCH | `/movies/:id/rate` | Update only the rating |
| DELETE | `/movies/:id` | Delete a movie |


📡 API Endpoints
Method	Endpoint	Description
POST	/url	Create short URL
GET	/:shortId	Redirect to original URL
GET	/url/analytics/:shortId	Get click stats

## 📁 Project Structure

url-shortener-api/
├── controllers/
│ └── url-controllers.js # Business logic (create URL, get analytics)
├── models/
│ └── url-models.js # MongoDB schema definition
├── routes/
│ └── url-routes.js # API endpoint definitions
├── index.js # Application entry point
├── .env # Environment variables (MongoDB URI)
├── package.json
└── README.md


## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Local installation or [MongoDB Atlas](https://www.mongodb.com/atlas) cloud account
- **npm** or **yarn** - Comes with Node.js


### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/url-shortener-api.git
cd url-shortener-api

npm install

MONGO_URI=yourMongoDbConnection

npm run dev

```
