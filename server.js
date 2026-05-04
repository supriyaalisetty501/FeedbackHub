const express = require("express");
const fs = require("fs");
const xlsx = require("xlsx");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/submit-feedback", (req, res) => {
    const { name, email, rating, feedback } = req.body;

    const filePath = "feedback.xlsx";

    let data = [];

    // If file exists, read old data
    if (fs.existsSync(filePath)) {
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    }

    // Add new feedback
    data.push({
        Name: name,
        Email: email,
        Rating: rating,
        Feedback: feedback
    });

    // Create new workbook
    const newWorkbook = xlsx.utils.book_new();
    const newSheet = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(newWorkbook, newSheet, "Feedback");

    xlsx.writeFile(newWorkbook, filePath);

    res.json({
        success: true,
        message: "Feedback saved to Excel!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});