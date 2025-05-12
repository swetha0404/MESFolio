import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';


function Main() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Swetha_CV_Base.pdf';
    link.setAttribute('download', 'Swetha_M_E_Resume.pdf');
    link.setAttribute('target', '_blank'); // optional, won't be used since download is set
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container">
      
      <div className="about-section">
        
        <div className="image-wrapper">
          <img src="https://mesportfolio.s3.us-east-1.amazonaws.com/MES-Portrait.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/swetha0404" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/swethame04/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <abbr style={{textDecoration: "none"}} title="I know my name is huge, you can call me Swetha (its pronounced 'Swayy-thaa) :)">
            <h1>Swetha Malaivaiyavur Elayavalli</h1>
          </abbr>
          <p>Software Engineer | AI Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/swetha0404" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/swethame04/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
        <div className="download">
          <button onClick={handleDownload} className="download-button">Download Resume</button>
        </div>
      </div>
      
    </div>
  );
}


export default Main;