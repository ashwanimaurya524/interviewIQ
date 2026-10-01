# InterviewIQ

**InterviewIQ** is a full-stack web application designed to help users prepare for interviews through an interactive and structured interview experience.

The project is built with a separate **frontend (`client`)** and **backend (`server`)**, providing a foundation for developing an AI-powered interview preparation platform.

---

## 🚀 Features

* User-friendly interview preparation interface
* Frontend and backend separated into dedicated applications
* Interactive interview workflow
* REST API-based backend architecture
* Scalable project structure for AI integration
* Designed for future interview analytics and personalized feedback

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB
* Mongoose

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

## 📁 Project Structure

```text
InterviewIQ/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ashwanimaurya524/interviewIQ.git
```

```bash
cd interviewIQ
```

---

### 2. Install Client Dependencies

```bash
cd client
npm install
```

---

### 3. Install Server Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run dev
```

The backend will run on the configured server port.

### Start Frontend

```bash
cd client
npm run dev
```

Open the local URL displayed by Vite in your browser.

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

If additional services are integrated into the project, their API keys should also be stored in environment variables.

**Never commit `.env` files or API keys to GitHub.**

---

## 🎯 Project Goal

The goal of InterviewIQ is to develop a modern interview preparation platform that can help students and job seekers practice interviews, improve their technical skills, and understand their areas for improvement.

The project can be extended with AI-based question generation, answer evaluation, resume-based interviews, voice interviews, and performance analytics.

---

## 🔮 Future Scope

Planned improvements include:

* AI-powered interview questions
* Resume-based interview generation
* Dynamic follow-up questions
* Technical interview mode
* HR interview mode
* DSA interview mode
* AI answer evaluation
* Interview performance reports
* Voice-based interviews
* Speech-to-text
* Communication analysis
* Interview history
* Performance analytics
* Personalized interview recommendations
* Machine Learning-based performance analysis

---

## 👨‍💻 Developer

**Ashwani Maurya**

B.Tech Computer Science Engineering

Interested in:

* Full Stack Development
* MERN Stack
* Artificial Intelligence
* Machine Learning
* Software Development

---

## 🔗 Repository

GitHub:
https://github.com/ashwanimaurya524/interviewIQ

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**InterviewIQ — Prepare. Practice. Improve.**
