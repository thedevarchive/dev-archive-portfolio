export function Home() {
    // Home page
    // Contains buttons for viewing projects, contacts and downloading resume
    return (
        <div className="home-container">
            <div className="glass-card">
                <h1>The Dev Archive</h1>
                <h2 className="subtitle">Versatility | Problem Solving | Continuous Development & Learning</h2>
                <p>
                    A Full Stack Developer building scalable web apps,
                    optimising software solutions and bridging the gap between development and IT operations.
                </p>
                <a href="/resume.pdf" download className="btn secondary">
                    Download Resume
                </a>
                <a href="/projects" className="btn primary">View My Work</a>
                <a href="/contact" className="btn primary">Contact Me</a>
            </div>
        </div>
    );
}