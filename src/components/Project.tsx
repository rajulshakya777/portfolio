import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Selected Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://skyrang.in/" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/skyrang.jpg`} className="zoom" alt="Skyrang" width="100%"/></a>
                <a href="https://skyrang.in/" target="_blank" rel="noreferrer"><h2>Skyrang</h2></a>
                <p>An online decoration service web app from scratch, deployed on AWS, currently serving 700+ users across three cities in India.</p>
            </div>
            <div className="project">
                <a href="https://agenverse.streamlit.app" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/agentverse.jpg`} className="zoom" alt="Agentverse" width="100%"/></a>
                <a href="https://agenverse.streamlit.app" target="_blank" rel="noreferrer"><h2>Agentverse</h2></a>
                <p>AI-powered underwriting co-pilot for insurance, managing broker queries, renewals, and amendments with smart decision-making achieving up to 40% faster policy processing, increasing broker satisfication.</p>
            </div>
            <div className="project">
                <a href="https://c3mod-cacner.streamlit.app/" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/c3mod.jpg`} className="zoom" alt="C3MOD" width="100%"/></a>
                <a href="https://c3mod-cacner.streamlit.app/" target="_blank" rel="noreferrer"><h2>C3MOD</h2></a>
                <p>Python tool for identifying cancer subtypes in multi-omics data using unsupervised clustering, enabling survival, mutation, stage, and immune analyses tailored to research needs.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rajulshakya777/Optimal-Geographical-Locations-For-Setting-up-Hubs-and-Stations" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/ai-drone.jpg`} className="zoom" alt="AI-based Drone Delivery" width="100%"/></a>
                <a href="https://github.com/rajulshakya777/Optimal-Geographical-Locations-For-Setting-up-Hubs-and-Stations" target="_blank" rel="noreferrer"><h2>AI-based Drone Delivery</h2></a>
                <p>ML models to optimize placement of 150+ drone hubs in Andaman & Nicobar, considering hospitals, power stations, blood banks, population, and geography.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1BwYwHreRxPlN6JOTSHYlYI9b6jb5gi9N/view?usp=sharing" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/sot-mram.jpg`} className="zoom" alt="ML-based Spin-Orbit Torque Modeling" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1BwYwHreRxPlN6JOTSHYlYI9b6jb5gi9N/view?usp=sharing" target="_blank" rel="noreferrer"><h2>ML-based Spin-Orbit Torque Modeling</h2></a>
                <p>Simulation tool for SOT-MRAM devices using polynomial chaos and neural networks, achieving 0.000127 RMSE over 100 epochs with 6 neurons.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rajulshakya777/IOT-based-anti-theft-smart-parcel-delievery-system" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/secure-parcel0box.jpg`} className="zoom" alt="IoT-based Secure Parcel Delivery Box" width="100%"/></a>
                <a href="https://github.com/rajulshakya777/IOT-based-anti-theft-smart-parcel-delievery-system" target="_blank" rel="noreferrer"><h2>IoT-based Secure Parcel Delivery Box</h2></a>
                <p>An IoT-enabled electronic delivery box for secure, trackable, and theft-proof exchange of confidential documents and valuable assets.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rajulshakya777/Self-Balancing-Bot-" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/self-balancing-bot.jpg`} className="zoom" alt="Self-Balancing Robot" width="100%"/></a>
                <a href="https://github.com/rajulshakya777/Self-Balancing-Bot-" target="_blank" rel="noreferrer"><h2>Self-Balancing Robot</h2></a>
                <p>Two-wheeled self-balancing robot using various electronic modules maintaining vertical stability while moving forward and backward.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rajulshakya777/inverted-pendulum" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/inverted-pendulum.jpg`} className="zoom" alt="Inverted Pendulum" width="100%"/></a>
                <a href="https://github.com/rajulshakya777/inverted-pendulum" target="_blank" rel="noreferrer"><h2>Inverted Pendulum</h2></a>
                <p>Arduino-based inverted pendulum capable of balancing vertically using PID-controlled encoders.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rajulshakya777/Laser-Based-Security-Alarm-System" target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/projects/laser-security-home.jpg`} className="zoom" alt="Laser-Based Security Alarm System" width="100%"/></a>
                <a href="https://github.com/rajulshakya777/Laser-Based-Security-Alarm-System" target="_blank" rel="noreferrer"><h2>Laser-Based Security Alarm System</h2></a>
                <p>Surveillance system using laser reflection and LDRs.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;