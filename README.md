# URL Shortener

A simple URL shortener built using **Node.js**, **Express**, **MongoDB**, and **EJS** for rendering.

## 🚀 Features
- Shorten long URLs with a unique short ID
- Track the number of times a short URL is visited
- User authentication (Signup & Login)
- View history of shortened URLs per user

## 🛠 Tech Stack
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: HTML, CSS, EJS (Embedded JavaScript)
- **Authentication**: Cookies & Middleware

## 📌 Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start MongoDB (Locally or via Docker)
If using **local MongoDB**:
```sh
mongod --dbpath=data
```
If using **Docker**:
```sh
docker run -d -p 27017:27017 --name mongo-container mongo
```

### 4️⃣ Configure Environment Variables
Create a **.env** file in the root directory:
```env
MONGO_URI=mongodb://localhost:27017/short-url
PORT=8001
```

### 5️⃣ Start the Server
```sh
npm start
```
The server will start at: **http://localhost:8001**

## 🔥 API Routes
### 🔹 Public Routes
- `GET /signup` → Signup Page
- `POST /user/signup` → Create New User
- `GET /login` → Login Page
- `POST /user/login` → Authenticate User

### 🔹 Protected Routes
- `GET /` → Home Page (Requires Authentication)
- `POST /url` → Create a Short URL
- `GET /url/:shortId` → Redirect to Original URL
- `GET /user/logout` → Logout User

## 👨‍💻 Project Structure
```
url-shortener/
│── views/          # EJS templates
│── routes/         # Express route handlers
│── models/         # Mongoose schema definitions
│── middlewares/    # Authentication middleware
│── public/         # Static files (CSS, JS)
│── index.js        # Main server file
│── connect.js      # MongoDB connection logic
│── package.json    # Project dependencies
└── README.md       # Project documentation
```

## 🤝 Contributing
1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request

## 📜 License
This project is **open-source** under the MIT License.
