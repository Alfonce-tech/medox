document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseover", function () {
        this.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");

    let index = 0;
    function slideImages() {
        index++;
        if (index > 3) index = 0; // Reset to first image after the last one
        carousel.style.transform = `translateX(-${index * 100}vw)`;
    }

    setInterval(slideImages, 4000); // Change image every 4 seconds
});
// Function to send a message to the AI
async function sendMessage() {
    let userMessage = document.getElementById("user-input").value;
    if (!userMessage.trim()) return;

    // Display user message
    let chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    // Call AI API
    let response = await fetchAIResponse(userMessage);
    chatMessages.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;

    // Clear input
    document.getElementById("user-input").value = "";
}

// Function to fetch response from AI
async function fetchAIResponse(message) {
    let apiKey = "AIzaSyDhzxTkXEmjKUB3Z7H53e4Tv3Tz9WhMRsc"; // Replace with your actual API key
    let endpoint = "https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=" + apiKey;

    let response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: message })
    });

    let data = await response.json();
    return data?.candidates?.[0]?.output || "Sorry, I couldn't understand that.";
}

