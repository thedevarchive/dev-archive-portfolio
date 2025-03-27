import React from "react";
import { FaJs, FaJava, FaReact, FaNodeJs, FaCogs } from "react-icons/fa"; // Import icons
import { SiPython } from "react-icons/si"; // Additional icons from react-icons
import { TbBrandCSharp, TbLayersIntersect } from "react-icons/tb";
import { RiRestTimeLine } from "react-icons/ri";
import { MdDataObject } from "react-icons/md";
import { FcFlowChart } from "react-icons/fc";

import "../Skills.css"; 

const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "JavaScript", proficiency: "intermediate", icon: <FaJs /> },
            { name: "C#", proficiency: "advanced", icon: <TbBrandCSharp /> },
            { name: "Java", proficiency: "advanced", icon: <FaJava /> },
            { name: "Python", proficiency: "beginner", icon: <SiPython /> },
        ],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { name: "React", proficiency: "intermediate", icon: <FaReact /> },
            { name: "Node.js", proficiency: "intermediate", icon: <FaNodeJs /> },
            { name: "Express.js", proficiency: "intermediate", icon: <FaCogs /> }, // Assuming FaCogs for Express
        ],
    },
    {
        category: "IDEs",
        items: [
            { name: "RESTful API", proficiency: "intermediate", icon: <RiRestTimeLine /> },
            { name: "OOP", proficiency: "advanced", icon: <MdDataObject /> },
            { name: "Algorithms", proficiency: "intermediate", icon: <FcFlowChart /> }, 
            { name: "Design Patterns", proficiency: "beginner", icon: <TbLayersIntersect /> }, 
        ],
    },
    {
        category: "Database Management",
        items: [
            { name: "RESTful API", proficiency: "intermediate", icon: <RiRestTimeLine /> },
            { name: "OOP", proficiency: "advanced", icon: <MdDataObject /> },
            { name: "Algorithms", proficiency: "intermediate", icon: <FcFlowChart /> }, 
            { name: "Design Patterns", proficiency: "beginner", icon: <TbLayersIntersect /> }, 
        ],
    },
    {
        category: "Version Control",
        items: [
            { name: "RESTful API", proficiency: "intermediate", icon: <RiRestTimeLine /> },
            { name: "OOP", proficiency: "advanced", icon: <MdDataObject /> },
            { name: "Algorithms", proficiency: "intermediate", icon: <FcFlowChart /> }, 
            { name: "Design Patterns", proficiency: "beginner", icon: <TbLayersIntersect /> }, 
        ],
    },
    {
        category: "Other Skills",
        items: [
            { name: "RESTful API", proficiency: "intermediate", icon: <RiRestTimeLine /> },
            { name: "OOP", proficiency: "advanced", icon: <MdDataObject /> },
            { name: "Algorithms", proficiency: "intermediate", icon: <FcFlowChart /> }, 
            { name: "Design Patterns", proficiency: "beginner", icon: <TbLayersIntersect /> }, 
        ],
    },
];

export function Skills() {
    return (
        <div className="home-container">
            <div className="glass-card">
                <h2>My Skills</h2>
                <div className="skill-container">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="skill-category">
                        <h3>{skillCategory.category}</h3>
                        <ul>
                            {skillCategory.items.map((item, idx) => (
                                <li key={idx} className="skill-item">
                                    <span className="icon">{item.icon}</span> {/* Icon next to name */}
                                    {item.name}
                                    <span className={`proficiency ${item.proficiency}`}>
                                        ●
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
