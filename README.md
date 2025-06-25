
# 🧠 Abhik's Portfolio Chatbot

A simple chatbot embedded in a React portfolio website. Users can ask questions like *"Where does Abhik study?"* or *"What awards has Abhik won?"*, and get predefined answers powered by a Node.js backend.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, CSS
- **Backend:** Node.js, Express
- **Middleware:** CORS, JSON parser

---

## 📁 Project Structure

```
project-root/
├── client/
│   ├── src/
│   │   ├── App.tsx
│   │   └── components/
│   │       └── chatbot.tsx
│   └── ...
├── server/
│   └── server.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/abhik-chatbot.git
cd abhik-chatbot
```

---

### 2. Backend Setup (`server`)

#### 📦 Dependencies

- `express`
- `cors`

#### 🔧 Installation

```bash
cd server
npm init -y
npm install express cors
```

#### ▶️ Run Backend

```bash
node server.js
```

> Server runs at: `http://localhost:5000`

---

### 3. Frontend Setup (`client`)

#### 📦 Dependencies

- `react`
- `react-dom`
- `typescript`
- `@types/react`
- `@types/react-dom`
- (Optional) `vite` or `create-react-app` for scaffolding

#### 🔧 Installation (using Vite)

```bash
npm create vite@latest client -- --template react-ts
cd client
npm install
```

#### ▶️ Run Frontend

```bash
npm run dev
```

> Frontend runs at: `http://localhost:5173` (Vite default)  
> Or `http://localhost:3000` if using Create React App

---

## 🧪 Try Asking:

- **"What is Abhik's CGPA?"**
- **"Which college does Abhik attend?"**
- **"Any awards Abhik has received?"**
- **"What has Abhik participated in?"**

---

## 📦 API Details

**POST** `/api/query`

```json
Request:
{
  "question": "What is Abhik's CGPA?"
}

Response:
{
  "answer": "Abhik's CGPA is 8.2."
}
```

---

## 📌 Notes

- The chatbot uses simple keyword matching (e.g., "cgpa", "college") in `server.js`.
- Profile data is static — feel free to replace it with dynamic DB content.

---

## 📄 License

MIT License
