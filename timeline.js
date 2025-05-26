const timelineData = [
  {
    title: "Software Engineer at XYZ Corp",
    date: "Jan 2022 – Present",
    description: "Working on full-stack web development projects, focusing on scalable and maintainable codebases.",
    icon: "fa-solid fa-code"
  },
  {
    title: "Frontend Developer at ABC Inc.",
    date: "Jun 2020 – Dec 2021",
    description: "Developed responsive user interfaces and collaborated with designers to enhance user experience.",
    icon: "fa-solid fa-desktop"
  },
  {
    title: "Bachelor of Science in Computer Science",
    date: "2016 – 2020",
    description: "Studied core computer science concepts and participated in various coding competitions.",
    icon: "fa-solid fa-graduation-cap"
  }
];

const container = document.getElementById('timeline-container');

timelineData.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item fade-in';

  div.innerHTML = `
    <div class="timeline-icon">
      <i class="${item.icon}"></i>
    </div>
    <div class="timeline-content">
      <h3>${item.title}</h3>
      <span class="date">${item.date}</span>
      <p>${item.description}</p>
    </div>
  `;

  container.appendChild(div);
});

// Toggle dark mode
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
