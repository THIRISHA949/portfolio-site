const projects = [
  {
    title: "First Project",
    desc: "My first website built using HTML, CSS, and JavaScript. Practiced layout, responsiveness, and clean structure.",
    link: "https://thirisha949.github.io/first-project/",
  },
  {
    title: "To-Do List App",
    desc: "A task management app built in React with CRUD functionality.",
    link: "https://thirisha949.github.io/To-Do-List-App/",
  },
  {
    title: "Book Tracker",
    desc: "Track and manage your books with a clean, responsive UI.",
    link: "https://thirisha949.github.io/Book-Tracker/",
  },
  {
    title: "News Reader App",
    desc: "Fetches and displays news articles using public APIs.",
    link: "https://thirisha949.github.io/news-reader/",
  },
  {
    title: "React Signals Demo",
    desc: "Exploring fine-grained reactivity using Signals in React.",
    link: "https://thirisha949.github.io/react-signals/",
  },
];

const grid = document.getElementById("project-grid");

projects.forEach((p) => {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = p.link;
  card.target = "_blank";
  card.innerHTML = `
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
  `;
  grid.appendChild(card);
});

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

