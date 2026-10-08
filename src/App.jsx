import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A simple weather app built with React.',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://github.com/yourname/weather-app'
    },
    {
      id: 2,
      title: 'Todo List',
      description: 'CRUD todo list using Spring Boot.',
      image: 'https://via.placeholder.com/300x200',
      link: 'https://github.com/yourname/todo-app'
    }
  ];

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <h1>ayush</h1>
        <p>Full Stack Developer</p>
      </header>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a developer learning React and Spring Boot.
          I love building web applications and solving problems.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: ayush@example.com</p>
        <p>
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
          {' | '}
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </section>

    </div>
  );
}

export default App;