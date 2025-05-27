document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      title: "Software Engineer at XYZ Corp",
      date: "Jan 2022 – Present",
      description: "Working on full-stack web development projects, focusing on scalable and maintainable codebases.",
      icon: "fa-solid fa-code",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"]
    },
    {
      title: "Frontend Developer at ABC Inc.",
      date: "Jun 2020 – Dec 2021",
      description: "Developed responsive user interfaces and collaborated with designers to enhance user experience.",
      icon: "fa-solid fa-desktop",
      skills: ["HTML", "CSS", "Vue.js", "UX"]
    }
  ];

  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      date: "2016 – 2020",
      description: "Studied core computer science concepts and participated in various coding competitions.",
      icon: "fa-solid fa-graduation-cap",
      skills: ["Algorithms", "Data Structures", "C++", "Teamwork"]
    }
  ];

  function createTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
      const el = document.createElement("div");
      el.className = "timeline-item";

      el.innerHTML = `
        <div class="timeline-icon">
          <i class="${item.icon}"></i>
        </div>
        <div class="timeline-content">
          <h4>${item.title}</h4>
          <div class="date">${item.date}</div>
          <p>${item.description}</p>
          ${item.skills ? `
            <div class="skill-tags">
              ${item.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;

      container.appendChild(el);
    });
  }

  // ✅ Correct function name
  createTimeline('timeline-experience-container', experienceData);
  createTimeline('timeline-education-container', educationData);

  // ✅ Intersection Observer animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // ✅ Wait for timeline items to be added to DOM
  setTimeout(() => {
    document.querySelectorAll('.timeline-item').forEach(el => {
      observer.observe(el);
    });
  }, 100);
});
