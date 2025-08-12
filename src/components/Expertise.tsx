import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Bootstrap",
];

const labelsSecond = [
    "Spring Boot",
    "JSP/Servlets",
    "Hibernate",
    "JUnit",
    "REST APIs",
    "Kafka",
    "Git",
    "Linux",
];

const labelsThird = [
    "AWS",
    "Docker",
    "Kubernetes",
    "OpenShift",
    "MySQL",
    "MongoDB",
    "Redis",
    "Cassandra",
    "Neo4j",
    "LLMs / GenAI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full‑Stack & Backend Engineering</h3>
                    <p>Building scalable services and UIs. Experience handling 1,500+ RPS, centralized caching, and feature flag platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cloud</h3>
                    <p>CI/CD, containerization, and cloud deployments on AWS and Kubernetes (incl. OpenShift).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI, ML & LLMs</h3>
                    <p>Built agents and data pipelines with LLMs (Claude/OpenAI); experience with classical ML for research and analytics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;