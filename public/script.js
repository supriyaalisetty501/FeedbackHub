const stars = document.querySelectorAll(".star");
const feedbackText = document.getElementById("feedback");
const count = document.getElementById("count");
const submitBtn = document.getElementById("submitBtn");
const container = document.getElementById("feedbackContainer");

let selectedRating = 0;

// Star Rating
stars.forEach((star) => {
    star.addEventListener("click", () => {
        selectedRating = star.dataset.value;

        stars.forEach((s) => s.classList.remove("active"));

        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("active");
        }
    });
});

// Character Counter
feedbackText.addEventListener("input", () => {
    count.textContent = feedbackText.value.length;
});

// Submit Data
submitBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = feedbackText.value;

    if (!name || !email || !feedback || selectedRating == 0) {
        alert("Please fill all fields!");
        return;
    }

    const response = await fetch("/submit-feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            rating: selectedRating,
            feedback
        })
    });

    const result = await response.json();

    if (result.success) {
        container.innerHTML = `
            <h1>🎉 Thank You!</h1>
            <p>Your feedback has been saved successfully.</p>
        `;
    }
});