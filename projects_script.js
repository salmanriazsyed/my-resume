// Resume content (as per your resume provided)
const resumeText = `
$ Web Application for Job Matching and Tailored Cover Letters	Jan 2024 – Present

$ Python, Flask, OPENAI API, HTML, CSS, JavaScript, Git, API Integration, REST API
    • Developed a responsive web app using Python and Flask to match job descriptions with user-uploaded resumes, generating tailored cover letters through OPENAI API.
    • Built seamless front-end with HTML, CSS, JavaScript; ensured secure API key handling via environment variables.
    • Employed Git and GitHub for version control, adhering to software development best practices for maintainability and collaboration.

$ University of Michigan 	Jun 2024 – Nov 2024

$ Python, SQL, Regular Expressions (Regex), JSON, XML, SQLite, REST
    • Completed a five-course Python Specialization (Python for Everybody) focused on Python programming, database integration (SQL), and networked application program interfaces.
    • Applied Object-Oriented Programming (OOP) skills & utilized Python’s data structures for data retrieval, parsing (regex), and database management with SQLite and document-type NoSQL databases (XML, JSON).

$ Advanced Deep Learning with Keras 	Feb 2023 – Feb 2023
    • Built & trained complex neural networks in TensorFlow to predict basketball game outcomes using Keras functional API.

$ Robotics Program – Kennedy Space Center, NASA	Aug 2014 – Aug 2014
    • Represented my school in a robotics program at NASA, winning the programming competition for accuracy.

You can contact me through the following:

$ +92 313 4747587
$ salmanriazsyeduk@gmail.com

$ https://github.com/salmanriazsyed
$ https://linkedin.com/in/salmanriazsyed 

Click on >home to go back.
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
