const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy data
const profileData = {
  college: "KIIT",
  cgpa: "8.2",
  awards: "Science Fair Winner 2024",
  participation: "Olympiads, Hackathons"
};

// Route to handle questions
app.post('/api/query', (req, res) => {
  const { question } = req.body;
  const q = question.toLowerCase();

  let answer = "Sorry, I don't know the answer to that.";

  if (q.includes("college")) {
    answer = `Abhik goes to ${profileData.college}.`;
  } else if (q.includes("cgpa")) {
    answer = `Abhik's CGPA is ${profileData.cgpa}.`;
  } else if (q.includes("award")) {
    answer = `Abhik has won: ${profileData.awards}.`;
  } else if (q.includes("participation")) {
    answer = `Abhik has participated in: ${profileData.participation}.`;
  }

  res.json({ answer });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
