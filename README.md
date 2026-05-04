# FeedbackHub 💬

A modern, responsive **customer feedback management system** that allows users to submit ratings, reviews, names, and email details through an elegant UI — while automatically storing feedback data in an Excel sheet for easy tracking and analysis.

## Homepage
![Homepage](screenshots/homepage.png)

## Feedback Form
![Feedback Form](screenshots/feedback-form.png)

## Thank You Page
![Thank You Page](screenshots/thankyou-page.png)

## Excel Stored Data
![Excel Data](screenshots/excel-data.png)

<img src="screenshots/homepage.png" width="800" alt="Homepage"/>

## ✨ Features

* ⭐ Interactive star rating system
* 👤 User name collection
* 📧 Email input validation
* 📝 Detailed feedback textarea
* 🔢 Live character counter
* 🎨 Modern glassmorphism UI with bright gradient theme
* ✅ Form validation for required fields
* 📊 Automatic feedback storage in **Excel (.xlsx)**
* 🎉 Dynamic thank-you confirmation screen

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Data Storage

* Excel (`xlsx` package)

## 📂 Project Structure

```bash
FeedbackHub/
│── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── server.js
│── feedback.xlsx
│── package.json
│── README.md
```

## 🚀 How It Works

1. User opens the feedback form.
2. Selects a rating.
3. Enters name and email.
4. Writes feedback.
5. Clicks submit.
6. Data gets stored automatically in an Excel sheet.

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/supriyaalisetty501/FeedbackHub.git
```

Navigate to the project folder:

```bash
cd FeedbackHub
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node server.js
```

Open in browser:

```bash
http://localhost:3000
```

## Sample Stored Data

| Name | Email                                   | Rating | Feedback            |
| ---- | --------------------------------------- | ------ | ------------------- |
| John | [john@gmail.com](mailto:john@gmail.com) | 5      | Excellent service   |
| Alex | [alex@gmail.com](mailto:alex@gmail.com) | 4      | Great UI experience |

## Future Enhancements

* Database integration (MongoDB/MySQL)
* Admin analytics dashboard
* Authentication system
* Email notifications
* Cloud deployment
* PDF/CSV export

## Why This Project Stands Out

FeedbackHub transforms a basic feedback form into a **real-world feedback collection platform** by combining modern UI design with backend data storage automation.

It demonstrates:

* Frontend development
* Backend integration
* File handling
* User experience design
* Practical business use cases

## Author

**Supriya Alisetty**

Building modern web solutions with clean design and practical functionality.

---

⭐ If you found this project useful, consider giving it a star on GitHub.
