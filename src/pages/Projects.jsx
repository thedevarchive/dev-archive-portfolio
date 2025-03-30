import { FaGithub, FaLock } from "react-icons/fa";

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
            image: "/images/code-snippet.png",
            github: "https://github.com/thedevarchive/code-snippet-manager",
            tech: ["JavaScript", "React", "Material UI"]
        },
        {
            title: "Image Watermark Editor",
            description: "A web app for adding watermarks to images.",
            image: "/images/image-watermark.png",
            github: "https://github.com/thedevarchive/image-watermark-editor",
            tech: ["JavaScript", "React"]
        },
        {
            title: "Dev Career Personality Test",
            description: "A test that allows users to identify the best IT career for them based on their personality.",
            image: "/images/dev-career.png",
            github: "https://github.com/thedevarchive/dev-career-personality-test",
            tech: ["JavaScript", "React", "Reactstrap"]
        },
        {
            title: "DCPT Server",
            description: "Backend required to be downloaded with the Dev Career Personality Test project. Contains the web application's APIs and the database containing the possible results and information of the possible IT career results.",
            image: "/images/server.png",
            github: "https://github.com/thedevarchive/dcpt-server",
            tech: ["Node.js", "Express", "MySQL"]
        },
        {
            title: "Tick-a-Task",
            description: "A mobile app that allows users to be productive by using ",
            image: "/images/tick-a-task.jpg",
            github: "/",
            tech: ["React Native", "Expo", "JavaScript"]
        },
        {
            title: "Tick-a-Task Server",
            description: "Backend required to be downloaded with the Tick-a-Task project. Contains the APIs and the database file to allow app to run.",
            image: "/images/server.png",
            github: "/",
            tech: ["Node.js", "Express", "MySQL"]
        },
        {
            title: "Guess the Capital",
            description: "A game where users guess the capital of a country. The list of countries and capitals are scraped from a website.",
            image: "/images/capital-scraper.jpg",
            github: "https://github.com/thedevarchive/guess-capital-scraper",
            tech: ["Python", "Beautiful Soup"]
        },
        {
            title: "Mighty Mug Store",
            description: "Online e-commerce store that sells different types of mugs. Complete with filter options, shopping cart system and order form to fill after checkout.",
            image: "/images/mighty-mug.png",
            github: "/",
            tech: ["Python", "Flask", "HTML"]
        },
        {
            title: "High or Low Dice Game",
            description: "A game where players can bet money to guess the value of the dice correctly. Contains gambling with virtual money.",
            image: "/images/dice-game.png",
            github: "https://github.com/thedevarchive/high-or-low-dice",
            tech: ["Java", "Java GUI", "Swing"]
        },
        {
            title: "Game Night Buzzer",
            description: "A buzzer created for Game Nights held at certain occasions, mainly in reunions and holidays.",
            image: "/images/buzzer.jpg",
            github: "https://github.com/thedevarchive/gameshow-buzzer",
            tech: ["Java", "Java GUI", "Swing"]
        }
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
                            {
                                project.github === "/" ? (
                                    <a href="/" onClick={(e) => e.preventDefault()} className="cta-button github-link">
                                        <FaLock size={20} /> Request GitHub Access
                                    </a>
                                ) : (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-button github-link">
                                        <FaGithub size={20} /> View on GitHub
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