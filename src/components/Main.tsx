import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Use GitHub avatar to avoid bundling local images */}
          <img src="https://github.com/rajulshakya777.png" alt="Rajul Shakywar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rajulshakya777" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rajul-shakywar/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a
              href="https://raw.githubusercontent.com/rajulshakya777/my-portfolio/master/react-portfolio-template/existing-portfolio/Rajul_shakywar_resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              <DescriptionIcon/>
            </a>
          </div>
          <h1>Rajul Shakywar</h1>
          <p>Software Engineer · AI + Full‑Stack</p>
          <p>Omaha, NE · <a href="mailto:rshakywar@unomaha.edu">rshakywar@unomaha.edu</a></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rajulshakya777" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rajul-shakywar/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a
              href="https://raw.githubusercontent.com/rajulshakya777/my-portfolio/master/react-portfolio-template/existing-portfolio/Rajul_shakywar_resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              <DescriptionIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;