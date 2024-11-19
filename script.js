// Resume content (as per your resume provided)
const resumeText = `$ Hi. My name is Salman Riaz Syed.

Education:
MSc. in Artificial Intelligence - Queen Mary University of London

BS (Honors) in Computer Science.

Skills:
Python, SQL, Flask, JavaScript, REST APIs, scalable web applications, machine learning.

Contact:

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
     //adjustTerminalHeight();
  }
}
/*
// Function to adjust the terminal window height dynamically
function adjustTerminalHeight() {
  const terminal = document.querySelector('.terminal');
  const lineHeight = parseInt(window.getComputedStyle(terminal).lineHeight);
  const lines = terminal.innerText.split('\n').length;
  const newHeight = Math.min(lines * lineHeight + 300, 650); // Set max height to 800px
  terminal.style.height = `${newHeight}px`;
}
*/
// Start typing the resume when the page loads
window.onload = () => {
  typeText(resumeText);
};
