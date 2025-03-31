export function About() {
    // About page 
    // Contains some information about experience and education
    // Complete details are in resume 
    return (
        <div className="home-container">
            <div className="glass-card">
                <h2>About</h2>
                <p>I'm a Software Developer with over 2 years of work experience. I specialise in C# and Java, but I am open to programming in any other tech stack. I love learning about new technology and solving problems with scalable solutions. While I'm open to different opportunities in tech, my passion remains in software development.</p>
                <p>When I’m not coding, you’ll probably find me experimenting with side projects, playing around with new tech or brainstorming new projects with the assistance of AI.</p>

                <div className="experience-education-container">
                    <div className="experience-box">
                        <h2>Experience</h2>
                        <p>
                            <strong>Myriad Technologies</strong> - 3 months of expertise in software development, full-stack development and new C# frameworks like Blazor.
                        </p>
                        <p>
                            <strong>Chatstat</strong> - 3 months of expertise in building AI agents
                        </p>
                    </div>
                    <div className="education-box">
                        <h2>Education</h2>
                        <p>
                            <strong>QUT, Master’s Degree in Information Technology</strong> - Gained expertise in software development, cloud computing, and full-stack development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}