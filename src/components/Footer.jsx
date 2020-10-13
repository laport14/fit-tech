import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/laportegeoffrey/">
        <img
          className="linkedin-icon"
          alt="LinkedIn"
          src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
          width="20px"
          height="20px"
        /></a>
        <a href="https://github.com/laport14">
          <img
            className="github-icon"
            alt="GitHub"
            src="https://tinyurl.com/y45s4ly9"
            width="20px"
            height="20px"
          />
        </a>
    </div>
  );
}

export default Footer;
