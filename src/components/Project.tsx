import React from "react";
import mock02 from '../assets/images/mock02.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock09 from '../assets/images/mock09.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Selected Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="http://skysrang.com" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="Skyrang" width="100%"/></a>
                <a href="http://skysrang.com" target="_blank" rel="noreferrer"><h2>Skyrang – Online Decoration Service</h2></a>
                <p>End‑to‑end web platform deployed on AWS, serving 200+ users across Indian cities.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rajulshakya777/C3MOD" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="C3MOD" width="100%"/></a>
                <a href="https://github.com/rajulshakya777/C3MOD" target="_blank" rel="noreferrer"><h2>C3MOD – Cancer Subtype Analysis</h2></a>
                <p>Python toolkit for multi‑omics clustering and downstream analyses (survival, mutation, stage, immune).</p>
            </div>
            <div className="project">
                <a href="https://github.com/rajulshakya777/Optimal-Geographical-Locations-For-Setting-up-Hubs-and-Stations" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="Vyorius" width="100%"/></a>
                <a href="https://github.com/rajulshakya777/Optimal-Geographical-Locations-For-Setting-up-Hubs-and-Stations" target="_blank" rel="noreferrer"><h2>AI‑based Drone Delivery Planning</h2></a>
                <p>Identified 150+ optimal hub locations for remote islands using ML and geospatial analysis.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="Inverted Pendulum" width="100%"/>
                <h2>Inverted Pendulum</h2>
                <p>Arduino + encoders with PID control to balance vertically.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="Self Balancing Bot" width="100%"/>
                <h2>Self‑Balancing Bot</h2>
                <p>Two‑wheeled robot using PID and Kalman filter for precise stability.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="Laser Security" width="100%"/>
                <h2>Laser‑based Security System</h2>
                <p>Multi‑reflection laser + LDR with digital logic for intrusion detection.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;