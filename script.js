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
    document.body.style.backgroundColor = 'lightgreen';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function displayInput() {
    const name = document.getElementById('name').value;
    document.getElementById('displayName').innerHTML = `Hello, ${name}!`;
}
