// Resume content (as per your resume provided)
const resumeText = `$ Hi. My name is Salman Riaz Syed, I am an innovative AI Engineer and Software Developer with an MSc. in Artificial Intelligence from Queen Mary University of London and a BS (Honors) in Computer Science.

$ I am proficient in Python, SQL, Flask, JavaScript, and REST APIs with hands-on experience in building scalable web applications and implementing machine learning models for practical solutions.

You can contact me through the following:

$ +92 313 4747587
$ salmanriazsyeduk@gmail.com

$ https://github.com/salmanriazsyed
$ https://linkedin.com/in/salmanriazsyed 

Click on >projects to learn about the projects I have worked on.
`;

// Get reference to terminal element
const terminalElement = document.getElementById('terminal');

// Function to simulate typing in terminal
function typeText(text, index = 0) {
  if (index < text.length) {
    terminalElement.innerText += text[index];
    setTimeout(() => typeText(text, index + 1), 1); // Adjust speed of typing here
  } else {
    // If text is finished, increase height of terminal window based on content
    // adjustTerminalHeight();
  }
}

// Function to adjust the terminal window height dynamically
function adjustTerminalHeight() {
  const terminal = document.querySelector('.terminal');
  const lineHeight = parseInt(window.getComputedStyle(terminal).lineHeight);
  const lines = terminal.innerText.split('\n').length;
  // const newHeight = Math.min(lines * lineHeight + 300, 650); // Set max height to 800px
  // terminal.style.height = `${newHeight}px`;
}

// Start typing the resume when the page loads
window.onload = () => {
  typeText(resumeText);
};
