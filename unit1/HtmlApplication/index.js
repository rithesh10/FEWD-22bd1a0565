const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from "public"

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle form submission and send an HTML response dynamically
app.post("/submit", (req, res) => {
  const { name, rollno } = req.body;
  const responseHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Submitted</title>
    </head>
    <body>
        <h2>Form Submitted Successfully</h2>
        <p>Hello ${name}, welcome to FEWD class.</p>
        <p>Your Roll No: ${rollno}</p>
    </body>
    </html>
  `;
  res.send(responseHTML);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});