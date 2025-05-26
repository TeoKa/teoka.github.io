document.addEventListener("DOMContentLoaded", function () {

  // Experience timeline data
  const experienceData = [
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
    }
  ];

  // Education timeline data
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      date: "2016 – 2020",
      description: "Studied core computer science concepts and participated in various coding competitions.",
      icon: "fa-solid fa-graduation-cap"
    }
  ];

  // Function to render timeline items into a container
  function renderTimeline(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item';

      div.innerHTML = `
        <div class="timeline-icon">
          <i class="${item.icon}"></i>
        </div>
        <div class="timeline-content">
          <h4>${item.title}</h4>
          <span class="date">${item.date}</span>
          <p>${item.description}</p>
        </div>
      `;

      container.appendChild(div);
    });
  }

  renderTimeline(experienceData, 'timeline-experience-container');
  renderTimeline(educationData, 'timeline-education-container');

  // Scroll animation using Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.timeline-item').forEach(el => {
    observer.observe(el);
  });

});
