document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      title: "Product Owner at IDEMIA, Paris",
      date: "January 2021 – Present",
      description: "Reduced card personalization time by 75% via software optimization. Led vision and feature prioritization for factory software used worldwide. Product installs software on 1M+ cards/year.",
      icon: "fa-solid fa-code",
      skills: ["JIRA", "Product Lifecycle", "Excel"]
    },
    {
      title: "R&D Engineer at IDEMIA, Paris",
      date: "November 2020 – Dec 2021",
      description: 'Led CBDC project in partnership with <a href="https://consensys.net" target="_blank" rel="noopener noreferrer">ConsenSys</a>. Won IDEMIA Innovathon with sustainable product concept. Halved test execution time by expanding Python/Java frameworks.',
      icon: "fa-solid fa-desktop",
      skills: ["Python", "Project Management", "Innovation"]
    },
    {
      title: "Researcher at INRIA, Grenoble",
      date: "January 2017 – September 2020",
      description: "Published robotics research in motion safety and autonomous navigation. Contributed to control frameworks for humanoid robots",
      icon: "fa-solid fa-desktop",
      skills: ["Optimization", "Model Predictive Control", "Motion Safety"]
    },
    {
      title: "Robotics Engineer Intern at IIT, Genoa",
      date: "April 2016 – November 2016",
      description: "Torque estimation for iCub humanoid.",
      icon: "fa-solid fa-desktop",
      skills: ["iCub", "Torque Estimation", "MATLAB"]
    },
    {
      title: "ML Engineer Intern at perClass, Delft",
      date: "September 2014 – December 2014",
      description: "ML model deployment and product demos for spectral imaging.",
      icon: "fa-solid fa-desktop",
      skills: ["Supervised Learning", "Machine Learning", "MATLAB"]
    }
    
  ];

  const educationData = [
    {
      title: "Doctor of Philosophy (Ph.D.) in Robotics, Grenoble",
      date: "2017 – 2020",
      description: 'Explored real-time decision-making and safety for bipedal robots navigating crowded environments (<a href="https://theses.hal.science/tel-03065088/file/CIOCCA_2020_archivage.pdf" target="_blank" rel="noopener noreferrer">Thesis</a>).',
      icon: "fa-solid fa-graduation-cap",
      skills: ["Model Predictive Control", "Optimization", "MATLAB"]
    },
    {
      title: "Master of Science (MSc) in Systems and Control, Delft",
      date: "2013 – 2016",
      description: 'Studied advance Control Theory and Hands-On Experience on Robotics Set-ups (<a href="https://repository.tudelft.nl/record/uuid:eb594e24-3fdc-47cc-b006-b5e96e4e8006" target="_blank" rel="noopener noreferrer">Thesis</a>).',
      icon: "fa-solid fa-graduation-cap",
      skills: ["Control Theory", "MATLAB", "Teamwork"]
    },
    {
      title: "Bachelor of Science in Automation Engineering, Milan",
      date: "2010 – 2013",
      description: "Studied core computer science, eletronics, economics and control theory concepts.",
      icon: "fa-solid fa-graduation-cap",
      skills: ["Control Theory"]
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
