document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      title: "Product Owner at IDEMIA, Paris",
      date: "January 2021 – Present",
      description: "Working on full-stack web development projects, focusing on scalable and maintainable codebases.",
      icon: "fa-solid fa-code",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"]
    },
    {
      title: "R&D Engineer at IDEMIA",
      date: "November 2020 – Dec 2021",
      description: "Developed responsive user interfaces and collaborated with designers to enhance user experience.",
      icon: "fa-solid fa-desktop",
      skills: ["HTML", "CSS", "Vue.js", "UX"]
    },
    {
      title: "Researcher at INRIA",
      date: "January 2017 – September 2020",
      description: "Developed responsive user interfaces and collaborated with designers to enhance user experience.",
      icon: "fa-solid fa-desktop",
      skills: ["HTML", "CSS", "Vue.js", "UX"]
    },
    {
      title: "Robotics Engineer Intern at IIT",
      date: "April 2016 – November 2016",
      description: "Developed responsive user interfaces and collaborated with designers to enhance user experience.",
      icon: "fa-solid fa-desktop",
      skills: ["HTML", "CSS", "Vue.js", "UX"]
    },
    {
      title: "ML Engineer Intern at perClass",
      date: "September 2014 – December 2014",
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

    // ✅ Intersection Observer animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

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
          <div class="skill-tags">
            ${(item.skills || []).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      `;

      container.appendChild(el);
      observer.observe(el); // observe as it's added

    });
  }

  // ✅ Correct function name
  createTimeline('timeline-experience-container', experienceData);
  createTimeline('timeline-education-container', educationData);


});
