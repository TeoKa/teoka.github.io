const timelineData = [
  {
    title: "Last Experience",
    date: "Jan 2022 – Present",
    description: "Working on xxx projects, focusing on yyy and zzz."
  },
  {
    title: "Frontend Developer at ABC Inc.",
    date: "Jun 2020 – Dec 2021",
    description: "Developed xxx and collaborated with yyy to enhance zzz."
  },
  {
    title: "Bachelor of Science in www",
    date: "2016 – 2020",
    description: "Studied zzz and participated in yyy."
  }
];

const container = document.getElementById('timeline-container');

timelineData.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item';

  div.innerHTML = `
    <h3>${item.title}</h3>
    <span class="date">${item.date}</span>
    <p>${item.description}</p>
  `;

  container.appendChild(div);
});
