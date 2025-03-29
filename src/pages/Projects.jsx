import { FaGithub } from "react-icons/fa";

import "../Projects.css";

export function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "You are here. Contains information about the dev's projects, experience and skillset. Website uses the style of glassmorphism for a modern look and feel.",
            image: "/images/portfolio.png",
            github: "https://github.com/thedevarchive/dev-archive-portfolio",
            tech: ["JavaScript", "React", "Tailwind"]
        },
        {
            title: "Code Snippet Manager",
            description: "A web app to store and organise code snippets.",
            image: "/images/code-snippet.jpeg",
            github: "https://github.com/thedevarchive/code-snippet-manager",
            tech: ["JavaScript", "React", "Material UI"]
        },
        {
            title: "Image Watermark Editor",
            description: "A web app for adding watermarks to images.",
            image: "/images/image-watermark.jpeg",
            github: "https://github.com/thedevarchive/image-watermark-editor",
            tech: ["JavaScript", "React"]
        },

        
    ];

    return (
        <div className="projects-container">
            <div className="glass-card">
                <h1>Projects</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                <FaGithub size={20} /> View on GitHub
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}