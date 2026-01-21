# Portal Project

## Overview

The **Portal Project** is a full-stack web application that allows users to **sign up and log in securely** in order to access **stock rate predictions generated using Machine Learning models**. The system is designed with a modern frontend, a secure backend API, and token-based authentication.

The main goal of the project is to provide **authenticated users** with access to **intelligent stock rate insights**, ensuring scalability, security, and good user experience.



## Features

* User Registration (Signup)
* User Authentication (Login)
* JWT-based Authentication & Authorization
* Secure API access using Axios Interceptors
* Stock Rate Prediction using Machine Learning
* Protected Routes (only authenticated users can access predictions)
* Modern and responsive UI



##  Technologies Used

### Frontend

* **React** – Component-based UI development
* **Tailwind CSS** – Modern utility-first styling
* **Axios** – API communication
* **Axios Interceptors** – Automatic token attachment & refresh handling

### Backend

* **Django REST Framework (DRF)** – RESTful API development
* **JWT (JSON Web Tokens)** – Authentication & authorization

### Machine Learning

* Machine Learning model used to **analyze historical stock data** and **predict stock rates**



## Project Structure

```
Portal/
│
├── Backend/
│   ├── accounts/          # Authentication logic
│   ├── api/               # API endpoints
│   ├── portal/            # Django project settings
│   ├── db.sqlite3
│   ├── manage.py
│   └── requirements.txt
│
├── Frontend/
│   ├── src/               # React source code
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```



##  Authentication Flow (JWT)

1. User signs up or logs in
2. Backend returns **Access Token** and **Refresh Token**
3. Tokens are stored securely on the client
4. Axios Interceptor:

   * Automatically attaches the access token to every request
   * Handles token expiration and refresh
5. Protected endpoints can only be accessed by authenticated users



##  Machine Learning Workflow

1. Historical stock data is collected
2. Data is preprocessed and cleaned
3. Machine Learning model is trained
4. Trained model is integrated into the backend
5. Authenticated users request predictions via the API
6. Backend returns predicted stock rates



## Setup Instructions

### Backend Setup

```bash
cd Backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```



##  API Communication

* Frontend communicates with backend via REST APIs
* Axios is used for all HTTP requests
* Authorization header is automatically set using interceptors



## Use Case

1. User creates an account
2. User logs in to the system
3. User accesses the stock prediction dashboard
4. User views machine-learning–based stock rate predictions



## Future Improvements

* Role-based access control
* Improved ML model accuracy
* Real-time stock data integration
* Dashboard with advanced charts and analytics
* Token refresh rotation & logout from all sessions



## Open Source & Contributions

This project is **open source**, and contributions are highly welcome.

Developers, researchers, and students are encouraged to:

* Improve or optimize the **Machine Learning models**
* Implement new **stock prediction algorithms**
* Enhance data preprocessing and feature engineering
* Improve API performance and security
* Contribute UI/UX improvements

If you are interested in implementing or enhancing the **Machine Learning component**, feel free to fork the repository, create a new branch, and submit a pull request.



##  Author

**Innocent Kiwoly**
Full‑Stack Developer



##  License

This project is for **educational and research purposes**.
