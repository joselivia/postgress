import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Pool } from "pg";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres.qprptktqlyshhqkjmjfa",
  host: "aws-0-eu-central-1.pooler.supabase.com",
  database: "postgres",
  password: "@Joselivia254",
  port: 5432,
});

// Endpoint to handle user registration
app.post("/register", async (req: Request, res: Response) => {
  const { name, phone, email, password } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (name, phone, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, phone, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});