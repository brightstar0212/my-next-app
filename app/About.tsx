import { Typography } from "@mui/material";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faGlobeOceania } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <section id="about" style={{ padding: "100px 0", scrollMarginTop: "64px" }}>
      <Typography
        variant="h1"
        component="h1"
        style={{
          color: "#5151c6",
          fontWeight: "600",
          fontSize: "2.8rem",
          fontFamily: "MV Boli",
          lineHeight: "0.9em",
          paddingBottom: "10px",
          paddingLeft: "50px",
          textDecoration: "underline",
        }}
      >
        About Me
      </Typography>
      <div className="about-content">
        <div className="first-col">
          <div className="content-images">
            <Carousel />
          </div>
        </div>

        <div className="content-text">
          <p style={{ paddingRight: "3rem", paddingBottom: "1rem" }}>
            Hi There! I&#39;m Ronan, welcome to my website 😃 I&#39;m a
            fullstack software engineer specializing in Artificial Intelligence
            with 2+ years of experience. I am from Galway, Ireland 📍 Currently,
            I am working with a Galway Start-up ByoWave where we make
            customizable gaming controllers for all users. After my Masters, I
            worked for 6 months as a research assistant at NUI Galway 🏊
          </p>
          <div className="row">
            <div className="column">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  color: "#888bf4",
                  fontWeight: "400",
                  fontSize: "2rem",
                  fontFamily: "Calibri Light",
                  lineHeight: "0.9em",
                  paddingBottom: "10px",
                  display: "flex",
                }}
              >
                <FontAwesomeIcon icon={faHashtag} /> Coding
              </Typography>
              <p>
                Passionate about technology and love working on AI-related
                projects in my spare time.
              </p>
            </div>
            <div className="column">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  color: "#888bf4",
                  fontWeight: "400",
                  fontSize: "2rem",
                  fontFamily: "Calibri Light",
                  lineHeight: "0.9em",
                  paddingBottom: "10px",
                  display: "flex",
                }}
              >
                <FontAwesomeIcon icon={faGlobeOceania} /> Travelling
              </Typography>
              <p>
                Fascination with exploring the world. I&#39;ve travelled around
                Europe, USA and Canada. Eager for my next trip once Covid
                passes!
              </p>
            </div>
            <div className="column">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  color: "#888bf4",
                  fontWeight: "400",
                  fontSize: "2rem",
                  fontFamily: "Calibri Light",
                  lineHeight: "0.9em",
                  paddingBottom: "10px",
                  display: "flex",
                }}
              >
                <FontAwesomeIcon icon={faHeartbeat} /> Sports
              </Typography>
              <p>
                Play Waterpolo competitively for Corrib Galway. Former Irish
                player for university and underage teams. Ambition to make
                senior Irish team. Also enjoy playing Golf, Skiing, Gaelic
                Football and Soccer.
              </p>
            </div>
            <div className="column">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  color: "#888bf4",
                  fontWeight: "400",
                  fontSize: "2rem",
                  fontFamily: "Calibri Light",
                  lineHeight: "0.9em",
                  paddingBottom: "10px",
                  display: "flex",
                }}
              >
                <FontAwesomeIcon icon={faMusic} /> Music
              </Typography>
              <p>
                Proficient at Guitar, Trumpet, Bass Guitar, Piano, Ukulele and
                Harmonica. A former member of Galway Jazz Orchestra and AOI rock
                band in which we performed many live shows around Ireland!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
