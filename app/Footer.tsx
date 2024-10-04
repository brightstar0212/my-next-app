import { Typography } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="flex">
        <a href="https://github.com/ronanmmurphy/" target="_blank">
          <i className="fab fa-github"></i>
        </a>

        <a href="https://www.instagram.com/kingmurf69/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/ronanmmurphy/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/ronanmurphy4/" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.medium.com/@ronanmmurphy77" target="_blank">
          <i className="fab fa-medium"></i>
        </a>
      </div>
      <div>
        <Typography
          style={{ textAlign: "center", margin: "auto" }}
          className="footer-title"
        >
          © Ronan Murphy 2021 All Rights Reserved
        </Typography>
      </div>
    </div>
  );
}
