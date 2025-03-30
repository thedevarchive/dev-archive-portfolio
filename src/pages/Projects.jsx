import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";

import projects from "../utils/projectsData"; 
import "../Projects.css";

export function Projects() {
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
                            {
                                project.github ? (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-button github-link">
                                        <FaGithub size={20} /> View on GitHub
                                    </a>
                                ) : (
                                    <a href="/" onClick={(e) => e.preventDefault()} className="disabled-btn disabled-link">
                                        <FaLock size={20} /> Request GitHub Access
                                    </a>
                                )
                            }
                            {
                                project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="secondary-btn website-link">
                                        <FaExternalLinkAlt size={20} /> View Website
                                    </a>
                                )
                            }
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}