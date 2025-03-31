import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";

import projects from "../utils/projectsData"; 
import "../Projects.css";

// Project page 
// List some of my favourite projects
// by extracting data from projects array from projectsData 
// Will also show information like description, tech stack and links to GitHub and website, if any
export function Projects() {
    return (
        <div className="projects-container">
            <div className="glass-card">
                <h2>Projects</h2>
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
                                /* If repo is private, "disable" link and let viewer know to request access */ 
                                project.github ? (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-button github-link">
                                        <FaGithub size={20} /> View on GitHub
                                    </a>
                                ) : (
                                    <a href="/contact" className="cta-button github-link">
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