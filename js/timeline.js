document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      title: "Product Owner at BWI, Paris",
      date: "2026 – Present",
      description:
        "Own the product roadmap and backlog for a B2B SaaS hydrological platform serving 9 clients. Coordinate a 14-person cross-functional team across software development, hydrological modelling, data, satellite image processing and DevOps, aligning customer, business and technical stakeholders.",
      icon: "fa-solid fa-code",
      skills: [
        "Product Strategy",
        "Roadmap Management",
        "Stakeholder Management",
        "R&D Capacity Planning"
      ]
    },
    {
      title: "Product Owner at IDEMIA, Paris",
      date: "2021 – 2026",
      description:
        "Owned the roadmap and lifecycle of a software product supporting the personalization of 1M+ payment and identity cards annually. Coordinated a 5-person technical team and collaborated with 10+ global business, industrial and technical stakeholders across France and Asia. Reduced software provisioning time onto card chips by 75%.",
      icon: "fa-solid fa-code",
      skills: [
        "Product Lifecycle",
        "Roadmap Management",
        "JIRA",
        "UI/UX",
        "Release Planning"
      ]
    },
    {
      title: "R&D Engineer at IDEMIA, Paris",
      date: "November 2020 – October 2021",
      description:
        'Led the winning IDEMIA Innovathon project, developing an industrial approach that reduced the environmental impact of chip-card production by up to 80%. Led a CBDC innovation project with <a href="https://consensys.net" target="_blank" rel="noopener noreferrer">ConsenSys</a> for the Monetary Authority of Singapore Global CBDC Challenge. Developed Python/Java test automation tools, reducing test development and execution time by up to 50%.',
      icon: "fa-solid fa-desktop",
      skills: [
        "Python",
        "Java",
        "Innovation",
        "Project Management",
        "Test Automation"
      ]
    },
    {
      title: "Researcher at INRIA, Grenoble",
      date: "March 2017 – September 2020",
      description:
        "Conducted research on optimization for autonomous systems and robotics, publishing 3 scientific papers. Worked on real-time decision-making, motion safety and control for autonomous and humanoid robotic systems.",
      icon: "fa-solid fa-flask",
      skills: [
        "Optimization",
        "Model Predictive Control",
        "Robotics",
        "Research"
      ]
    },
    {
      title: "Research Intern at IIT, Genoa",
      date: "April 2016 – October 2016",
      description:
        "Improved actuator torque estimation for the iCub humanoid robot through estimation algorithms and real-time simulations.",
      icon: "fa-solid fa-robot",
      skills: [
        "iCub",
        "Torque Estimation",
        "MATLAB",
        "Robotics"
      ]
    },
    {
      title: "Intern at perClass, Delft",
      date: "September 2014 – December 2014",
      description:
        "Improved a machine-learning classifier for spectral imaging and presented the solution at international trade fairs in Munich and Eindhoven.",
      icon: "fa-solid fa-brain",
      skills: [
        "Machine Learning",
        "Spectral Imaging",
        "MATLAB",
        "Product Demo"
      ]
    }
  ];

  const educationData = [
    {
      title: "Ph.D. in Robotics, Grenoble",
      date: "2017 – 2020",
      description:
        'Ph.D. research at INRIA focused on optimization, autonomous systems and robotics. <a href="https://theses.hal.science/tel-03065088/file/CIOCCA_2020_archivage.pdf" target="_blank" rel="noopener noreferrer">View thesis</a>.',
      icon: "fa-solid fa-graduation-cap",
      skills: [
        "Robotics",
        "Optimization",
        "Model Predictive Control"
      ]
    },
    {
      title: "M.Sc. in Engineering, TU Delft",
      date: "2013 – 2016",
      description:
        'Studied Systems and Control, Control Theory and Robotics with hands-on engineering projects. <a href="https://repository.tudelft.nl/record/uuid:eb594e24-3fdc-47cc-b006-b5e96e4e8006" target="_blank" rel="noopener noreferrer">View thesis</a>.',
      icon: "fa-solid fa-graduation-cap",
      skills: [
        "Control Theory",
        "Robotics",
        "MATLAB"
      ]
    },
    {
      title: "B.Sc. in Engineering, Polytechnic of Milan",
      date: "2010 – 2013",
      description:
        "Studied automation engineering, computer science, electronics, economics and control theory.",
      icon: "fa-solid fa-graduation-cap",
      skills: [
        "Automation",
        "Control Theory",
        "Engineering"
      ]
    }
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  function createTimeline(containerId, items) {
    const container = document.getElementById(containerId);

    if (!container) {
      return;
    }

    items.forEach((item) => {
      const el = document.createElement("div");
      el.className = "timeline-item";

      el.innerHTML = `
        <div class="timeline-icon">
          <i class="${item.icon}"></i>
        </div>

        <div class="timeline-content">
          <h4>${item.title}</h4>

          <div class="date">
            ${item.date}
          </div>

          <p>
            ${item.description}
          </p>

          <div class="skill-tags">
            ${(item.skills || [])
              .map(
                (skill) =>
                  `<span class="skill-tag">${skill}</span>`
              )
              .join("")}
          </div>
        </div>
      `;

      container.appendChild(el);
      observer.observe(el);
    });
  }

  createTimeline(
    "timeline-experience-container",
    experienceData
  );

  createTimeline(
    "timeline-education-container",
    educationData
  );
});
