const currentTime = new Date().getHours();
let greetingMessage;
if (currentTime < 12) {
    greetingMessage = "Good Morning!";
} else if (currentTime < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}
document.getElementById('greeting').innerHTML = greetingMessage;

function changeBackgroundColor() {
    const colors = ['lightgreen', 'lightblue', 'lightpink', 'lightyellow', 'lightcoral'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function displayInput() {
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";
    const subscribed = document.getElementById('subscribe').checked ? "Yes" : "No";
    const country = document.getElementById('country').value;
    
    document.getElementById('displayName').innerHTML = `Hello, ${name}! Gender: ${gender}, Subscribed: ${subscribed}, Country: ${country}`;
}
