import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const server = express();

dotenv.config({ path: "../config.env" });

// Using Middlewares
server.use(express.json());
server.use(cors());

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

// MongoDB Atlas connection string
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
  });

// Create a schema with proper validation
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

server.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({
    name,
    email,
    message,
  });

  contact
    .save()
    .then((savedContact) => {
      console.log(savedContact);
      res.status(200).send("Information sent successfully");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error while sending your data");
    });
});

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
