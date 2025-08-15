import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rajulshakya777" target="_blank" rel="noreferrer"><GitHubIcon/></a>
  <a href="https://www.linkedin.com/in/rajul-shakywar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
  <p>© {new Date().getFullYear()} Rajul Shakywar</p>
    </footer>
  );
}

export default Footer;