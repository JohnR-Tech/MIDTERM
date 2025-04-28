const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const port = 5000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",        
  password: "",         
  database: "earist",   
});

app.use(cors());
app.use(express.json());

app.get("/api/certificate/:studentNo", async (req, res) => {
  try {
    const { studentNo } = req.params;

    const [rows] = await pool.query(
      "SELECT * FROM certificate_of_registration WHERE student_no = ?",
      [studentNo]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
