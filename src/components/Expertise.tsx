import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const stackFull = [
    'Python','Java','C#','C++','HTML5','CSS','Bootstrap','JavaScript','React.js',
    'Flask','Spring Boot','ASP.NET','JSP/Servlets','Hibernate','JUnit','Mockito','FastAPI',
    'MySQL','MongoDB','Redis','Cassandra'
];

const stackAI = [
    'Machine Learning','Generative AI','LLMs','AI Agents','RAG','CAG','TensorFlow','PyTorch','LangChain','LangGraph','vLLM','Vector Embeddings','Data Analysis','OCR'
];

const stackCloud = [
    'AWS','Docker','Kubernetes','OpenShift','Git','Apache Kafka','RESTful APIs','CI/CD Pipelines','Data Structures & Algorithms',
    'System Design','OOD','SOLID','Design Patterns','Microservices','Agile'
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI, ML & LLMs</h3>
                    <p>Developing private AI infrastructure, building AI agents, fine-tuning LLMs, implementing RAG and CAG, and leveraging<br />
LLM inference APIs and helping businesses drive automation, streamline processes, and improve organizational efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {stackAI.map((label) => <Chip key={label} className='chip' label={label} />)}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack & Backend Engineering</h3>
                    <p>Experienced in designing and deploying large-scale, distributed full-stack applications serving millions of users with capable of handling 1,500+ requests per second.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {stackFull.map((label) => <Chip key={label} className='chip' label={label} />)}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Software Engineering, Cloud & DevOps</h3>
                    <p>Experienced in managing the SDLC with strong expertise in CI/CD, containerization, and cloud deployments using AWS and Kubernetes, following best engineering practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {stackCloud.map((label) => <Chip key={label} className='chip' label={label} />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;