import React from "react";
import { FaBitbucket, FaGitAlt, FaGithub, FaJs, FaJava, FaReact, FaNodeJs, FaCogs } from "react-icons/fa"; // Import icons
import { SiEclipseide, SiMysql, SiNotepadplusplus, SiOracle, SiPython, SiSqlite } from "react-icons/si"; // Additional icons from react-icons
import { TbBrandCSharp, TbLayersIntersect } from "react-icons/tb";
import { RiCursorLine, RiRestTimeLine } from "react-icons/ri";
import { MdDataObject } from "react-icons/md";
import { FcFlowChart } from "react-icons/fc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";

import skills from "../utils/skillsData";
import "../styles/Skills.css";

export function Skills() {
    const iconMap = { FaBitbucket, FaGitAlt, FaGithub, FaJs, FaJava, FaReact, FaNodeJs, FaCogs, SiEclipseide, SiMysql, SiNotepadplusplus, SiOracle, SiPython, SiSqlite, TbBrandCSharp, TbLayersIntersect, RiCursorLine, RiRestTimeLine, MdDataObject, FcFlowChart, BiLogoVisualStudio, DiMsqlServer, DiVisualstudio, VscAzureDevops };

    return (
        <div className="outer-skill-container">
            <div className="glass-card">
                <h2>My Skills</h2>
                <h3 className="subtitle">
                    <p>
                        <span className={`proficiency beginner`}>
                            ●
                        </span>
                        &nbsp; Familiar &emsp;
                        <span className={`proficiency intermediate`}>
                            ●
                        </span>
                        &nbsp; Proficient &emsp;
                        <span className={`proficiency advanced`}>
                            ●
                        </span>
                        &nbsp; Advanced
                    </p>
                </h3>
                <div className="skill-container">
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="skill-category">
                            <h3>{skillCategory.category}</h3>
                            <ul>
                                {skillCategory.items.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <li key={idx} className="skill-item">
                                            <span className="icon">
                                                {IconComponent && <IconComponent />}
                                            </span> {/* Icon next to name */}
                                            {item.name}
                                            <span className={`proficiency ${item.proficiency}`}>
                                                ●
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
