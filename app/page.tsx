"use client"; // Mark this component as a Client Component
import React from "react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./AchieveDropdown";
import Skill from "./Skills";
import Carousel from "./Carousel";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  faHashtag,
  faGlobeOceania,
  faHeartbeat,
  faMusic,
  faSuitcase,
  faGraduationCap,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// HomePage Component
export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  const experienceItems = [
    {
      id: 1,
      content: "Chief Technical Officer",
      direction: "fade-right",
      subtitle: "ByoWave (March 2021–Present)",
    },
    {
      id: 2,
      content: "Research Assistant For Computer Vision (Project Lead)",
      direction: "fade-left",
      subtitle: "ByoWave (March 2021–Present)",
    },
    {
      id: 3,
      content: "Website and Mobile App Developer",
      direction: "fade-right",
      subtitle: "ByoWave (March 2021–Present)",
    },
    { id: 4, content: "Co-Founder of Trading Academy", direction: "fade-left" },
    {
      id: 5,
      content: "Cloud Support Engineer (Internship)",
      direction: "fade-right",
      subtitle: "ByoWave (March 2021–Present)",
    },
  ];

  const EducationsItems = [
    {
      id: 1,
      content: "Masters Degree",
      direction: "fade-left",
      subtitle: "ByoWave (March 2021–Present)",
    },
    {
      id: 2,
      content: "Bachelors Degree",
      direction: "fade-right",
      subtitle: "ByoWave (March 2021–Present)",
    },
    {
      id: 3,
      content: "Associates Degree",
      direction: "fade-left",
      subtitle: "ByoWave (March 2021–Present)",
    },
    {
      id: 4,
      content: "High School",
      direction: "fade-right",
      subtitle: "ByoWave (March 2021–Present)",
    },
  ];
  const Aiproject = [
    {
      title: "Knowledge Graph Embeddings to Implement Explainable AI",
      imagesrc: "/assets/covid.jpg",
      content:
        "Implemented KGE models to learn relationships of COVID-19 dataset and explain the decisions it made.",
      url: "https://github.com/ronanmmurphy/Knowledge-Graph-Embeddings-to-Implement-Explainability",
    },
    {
      title: "Football Heading Event Classification Prediction",
      imagesrc: "/assets/football.jpg",
      content:
        "Trained Recurrent Neural Network to compare the impact of heading events.",
      url: "https://github.com/ronanmmurphy/Football-Heading-System",
    },
    {
      title: "Real-Time Event Detection For Video Streams",
      imagesrc: "/assets/cars.png",
      content:
        "Designed Computer Vision pipeline of car traffic object detection and classification.",
      url: "https://github.com/ronanmmurphy/Real-Time-Event-Detection-for-Video-Streams",
    },
    {
      title: "Neural Machine Translation with Attention",
      imagesrc: "/assets/translate_update.png",
      content:
        "Developed Neural Machine Translation model to translate text from English to French, enhanced with Attention.",
      url: "https://github.com/ronanmmurphy/Neural-Machine-Translation-with-Attention",
    },
    {
      title: "Q-Learning Algorithm",
      imagesrc: "/assets/RL.png",
      content:
        "Implemented deterministic FrozenLake ‘grid world’ problem where Q-learning agent learned a defined policy to optimally navigate through the lake.",
      url: "https://github.com/ronanmmurphy/Q-Learning-Algorithm",
    },
    {
      title: "Irony & Sarcasm Detection",
      imagesrc: "/assets/twitter_update.png",
      content:
        "Recurrent Neural Network (with LSTM layer) models to perform classification of Ironic and Sarcastic Tweets using Natural Language Processing.",
      url: "https://github.com/ronanmmurphy/Irony-and-Sarcasm-Detection",
    },
    {
      title: "Image Recognition with Neural Network from Scratch",
      imagesrc: "/assets/animals.png",
      content:
        "Created a Feed-forward Neural Network with back-propagation without the use of Python libraries to classify animals.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
    {
      title: "Sentiment Analysis of Movie Reviews",
      imagesrc: "/assets/imdb_updated.png",
      content:
        "Classified sentiment of movie reviews to determine if they were positive/negative.",
      url: "https://github.com/ronanmmurphy/Sentimental-Analysis-Movie-Reviews",
    },
  ];
  const Analytics = [
    {
      title: "NYC Taxi Microservice Pipeline",
      imagesrc: "/assets/nyc_taxi.jpg",
      content:
        "Android application to connect to microprocessors via Bluetooth which retrieves data recorded and analyses it graphically.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
    {
      title: "Twitter Stream Analysis",
      imagesrc: "/assets/twitter_update.png",
      content:
        "A pipeline of functions to analyse tweets using Apache Spark RDDs.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
    {
      title: "MapReduce implementation",
      imagesrc: "/assets/hadoop_updated.png",
      content:
        "MapReduce using both Spark RDD and Java 8 streams for Weather Station Objects.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
    {
      title: "Distributed Banking RMI",
      imagesrc: "/assets/atm.jpg",
      content:
        "Java RMI Distributed Banking System that consists of a server and some Automated Teller Machine (ATM) clients.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
  ];
  const OtherProjects = [
    {
      title: "Football Heading App",
      imagesrc: "/assets/football.jpg",
      content:
        "Android application to connect to microprocessors via Bluetooth which retrieves data recorded and analyses it graphically.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
    {
      title: "Personal Profile Website",
      imagesrc: "/assets/website.png",
      content:
        "Created this website as a personal profile of work completed using HTML, CSS and Javascript.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
    {
      title: "Knapsack Problem",
      imagesrc: "/assets/knapsack.jpg",
      content:
        "Multiobjective optimisation using black-nox approaches to solve the Knapsack problem.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
    {
      title: "Blackbox Optimisation",
      imagesrc: "/assets/black-box-Optimization.png",
      content:
        "Implemented three black-box optimisation algorithms: Hill-Climb, Simulated Annealing, and Late Acceptance Hill Climb to solve unit commitment problem.",
      url: "https://github.com/ronanmmurphy/Neural-Network-from-Scratch-to-implement-Image-Recognition",
    },
  ];
  const dropdownData = [
    {
      title: "Academic Achievements",
      items: [
        {
          contentTitle: "M.Sc in Artificial Intelligence",
          imgsrc: "/assets/masters_thesis.jpg",
          contentText:
            "After receiving a scholarship from undergraduate results I decided to pursue a full-time taught Masters in Artificial Intelligence. The course was divided into trimesters, each worth 33% of the overall degree. The first and second trimesters consisted primarily of modules, containing assignments, projects and final exams, with 6 modules in each. The third trimester consisted of a research project. The topic I chose was 'Knowledge Graph Embeddings to implement Explainable AI'.I received a First-Class Honours Degree.",
          imgname: "Master's Thesis",
          imgWidth: "200",
          imgHeight: "300",
        },
        {
          contentTitle: "B.E. in Electric and Computing",
          imgsrc: "/assets/eng_grad.jpg",
          contentText:
            "I chose to study undenominated engineering as my undergraduate degree at NUIG. This four year program allows you to choose the discipline of engineering after the first year. I chose the Electronic and Computing discipline which involved an 8-month internship where I worked at SAP Galway.I chose modules in the software stream and became interested in AI. For my final year project, I created a football heading platform which measured the forces of an event and analysed them using machine learning.I received a First-Class Honours Degree.",
          imgname: "Engineering Graduation",
          imgWidth: "400",
          imgHeight: "250",
        },
        {
          contentTitle: "A.A. in French",
          imgsrc: "/assets/french_grad.jpg",
          contentText:
            "As my undergraduate degree didn't contain any continuation of foreign language studies I decided to pursue a part-time diploma during my first two years. This involved weekly classes, assignments, and end of semester exams.From undergoing this diploma I graduated with a fluency in French, equivalent to CEFR C1.I received an Upper Second-Class Honours Degree.",
          imgname: "French Diploma Graduation",
          imgWidth: "400",
          imgHeight: "250",
        },
      ],
    },
    {
      title: "Outstanding Awards",
      items: [
        {
          contentTitle: "Academic Scholarship NUIG",
          imgsrc: "",
          contentText:
            "Awarded Postgraduate scholarship for exemplary academic results during my undergraduate degree.This award allowed me to pursue an MSc in Artificial Intelligence.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
        {
          contentTitle: "Sports Scholarship NUIG",
          imgsrc: "",
          contentText:
            "Partial Sports scholarship for sporting excellence in the sport of Waterpolo at NUIG (2018/19).This involves gym membership, personal coaching, personalised meal and gym plans.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
        {
          contentTitle: "Mechanical Engineering Project Award",
          imgsrc: "",
          contentText:
            "Team of 4 designed truck powered by a small battery motor which had the best ratio of weight to time in all of the engineering year.The robust truck transported a 13kg load in quickest time over a 3-metre track.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
        {
          contentTitle: "D.C.G Project Award",
          imgsrc: "/assets/calahan.jpg",
          contentText:
            "I was shortlisted for the Design and Communication Graphics Student Assignment award due to my distinguished leaving certificate project.Received a certificate of excellence for achieving 158 of 160 marks for my ‘Flower Torch’ project.",
          imgname: "D.C.G Project Award",
          imgWidth: "250",
          imgHeight: "350",
        },
      ],
    },
    {
      title: "Exam Results",
      items: [
        {
          contentTitle: "",
          imgsrc: "",
          contentText: "",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
      ],
    },
    {
      title: "Volunteering",
      items: [
        {
          contentTitle: "Tutoring",
          imgsrc: "",
          contentText:
            "Current Supervisor at NUIG for student project of Automation and Control Diploma.Private tuition to university and high school students in Computer Programming, Mathematics, and Physics.Students received an average of 15% grade increase.Available to take on students, see contact details below.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
        {
          contentTitle: "NUIG Waterpolo Chairman",
          imgsrc: "",
          contentText:
            "Chairperson of NUIG Waterpolo sports club for two years (Sep ’18 – Aug ‘20).This involved weekly coaching and organising of sessions, monthly meetings between associated sports clubs and club fundraising events held.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
        {
          contentTitle: "CoderDojo",
          imgsrc: "",
          contentText:
            "Volunteered for NUIG Coderdojo to teach kids how to code in ‘Scratch’.Instructed and supervised children in the class.I learned the programing language myself and prepared for each class with the new material to be taught.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
        {
          contentTitle: "Class Representative",
          imgsrc: "",
          contentText:
            "The class representative for 250 first year undenominated engineers.This involved consulting with fellow students and speaking for the student body at meetings with lecturers and other class-reps.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
        {
          contentTitle: "Charity Work",
          imgsrc: "",
          contentText:
            "Fundraise for mental health and humanitarian charities by daily swimming in the sea and running events.Worked with local elderly and homeless charities to provide support in the community.",
          imgname: "",
          imgWidth: "",
          imgHeight: "",
        },
      ],
    },
    {
      title: "Waterpolo",
      items: [
        {
          contentTitle: "Representing Ireland",
          imgsrc: "/assets/irish_man.jpg",
          contentText:
            "Irish Celtic Nation’s team player, which competed in tournaments in Edinburgh 2018 and Cardiff 2019.A former member of U17 Irish team which won gold at Inter-Regionals in Manchester (pictured on right), Bronze in Copenhagen at the ‘North-Sea Cup’ and played at European championships in Malta 2015.",
          imgname: "Inter-Regional Champions",
          imgWidth: "400",
          imgHeight: "250",
        },
        {
          contentTitle: "Senior Career",
          imgsrc: "/assets/senior_cup.jpg",
          contentText:
            "A key member of Corrib Waterpolo and play on the senior team. For the first time in the club's 40-year history, we were crowned Senior All-Ireland Champions in April 2018.We were runners-up in the Irish National 1st League in 2020. Also winning the 2nd and 3rd divisions in 2016 and 2014.",
          imgname: "Irish Senior Cup Champions",
          imgWidth: "400",
          imgHeight: "250",
        },
        {
          contentTitle: "Underage Career",
          imgsrc: "/assets/u_19 (1).jpg",
          contentText:
            "Captained underage Waterpolo teams to 4 national championships. Returned the U19 cup to Corrib after a 10-year lapse. Also winning the U17, U15 and U14 cups.",
          imgname: "U19 National Winners",
          imgWidth: "400",
          imgHeight: "250",
        },
      ],
    },
  ];
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = () => {
    setActiveDropdown(activeDropdown === "ai" ? null : "ai");
  };

  const handleDropdownToggle2 = () => {
    setActiveDropdown(activeDropdown === "analytics" ? null : "analytics");
  };

  const handleDropdownToggle3 = () => {
    setActiveDropdown(activeDropdown === "other" ? null : "other");
  };
  return (
    <div>
      {/* Lead Section */}
      <section id="lead">
        <div className="lead-contain">
          <div>
            <div id="lead-content">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  fontWeight: "900",
                  fontSize: "4rem",
                  lineHeight: "0.9em",
                  paddingBottom: "10px",
                }}
              >
                Ronan Murphy
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                style={{
                  color: "#a0cfee",
                  fontWeight: "500",
                  fontSize: "2.25em",
                }}
              >
                Artificial Intelligence Engineer
              </Typography>
              <Typography
                variant="body1"
                style={{ fontWeight: "400", fontSize: "1.5em" }}
              >
                Welcome to the future
              </Typography>
            </div>
          </div>

          <div
            id="lead-image"
            style={{ position: "relative", width: "400px", height: "400px" }}
          >
            <Image
              src="/assets/profiler_2.jpg"
              alt="my profile pic"
              layout="fill"
              objectFit="cover"
              style={{
                verticalAlign: "bottom",
              }}
            />
          </div>
        </div>

        <div
          className="lead-overlay"
          style={{
            position: "absolute",

            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            zIndex: 1,
            backgroundImage: "linear-gradient(0deg, #888bf4, #5151c6)",
            clipPath: "polygon(0 0%, 100% 0, 100% 0%, 0 170%)",
          }}
        ></div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{ padding: "100px 0", scrollMarginTop: "64px" }}
      >
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
              Hi There! I'm Ronan, welcome to my website 😃 I'm a fullstack
              software engineer specializing in Artificial Intelligence with 2+
              years of experience. I am from Galway, Ireland 📍 Currently, I am
              working with a Galway Start-up ByoWave where we make customizable
              gaming controllers for all users. After my Masters, I worked for 6
              months as a research assistant at NUI Galway 🏊
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
                  Fascination with exploring the world. I've travelled around
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
                  Harmonica. A former member of Galway Jazz Orchestra and AOI
                  rock band in which we performed many live shows around
                  Ireland!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        style={{ padding: "100px 0", scrollMarginTop: "64px" }}
      >
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
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Experience
        </Typography>
        <ul className="timeline timeline-vertical">
          <div className="timeline-line"></div>
          <li
            className="timeline-heading text-center aos-init aos-animate"
            data-aos="slide-up"
            data-aos-mirror="true"
          >
            <div>
              <h3>Work</h3>
            </div>
          </li>
          {experienceItems.map((item, index) => (
            <li
              key={item.id}
              data-aos={item.direction}
              style={{ marginTop: index === 0 ? "50px" : "0" }}
            >
              <div className="timeline-content">
                <div className="timeline-start timeline-box">
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      fontWeight: "300",
                      fontSize: "1.6rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingRight: "15px",
                      textAlign: "right",
                    }}
                  >
                    {index % 2 === 0 ? item.content : ""}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h3"
                    style={{
                      fontWeight: "300",
                      fontSize: "1rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingRight: "15px",
                      textAlign: "right",
                    }}
                  >
                    {index % 2 === 0 ? item.subtitle : ""}
                  </Typography>
                </div>
                <div className="timeline-middle">
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    style={{
                      backgroundColor: "#5151c6",
                      color: "white",
                      width: "1.5rem",
                      height: "1.5rem",
                      padding: "0.4rem",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="timeline-end timeline-box">
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      fontWeight: "400",
                      fontSize: "1.6rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      textAlign: "left",
                    }}
                  >
                    {index % 2 !== 0 ? item.content : ""}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h3"
                    style={{
                      fontSize: "1rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      textAlign: "left",
                    }}
                  >
                    {index % 2 !== 0 ? item.subtitle : ""}
                  </Typography>
                </div>
              </div>
            </li>
          ))}
          <li
            className="timeline-heading text-center aos-init aos-animate"
            data-aos="slide-up"
            data-aos-mirror="true"
          >
            <div>
              <h3>Education</h3>
            </div>
          </li>
          {EducationsItems.map((item, index) => (
            <li
              key={item.id}
              data-aos={item.direction}
              style={{ marginTop: index === 0 ? "50px" : "0" }}
            >
              <div className="timeline-content">
                <div className="timeline-start timeline-box">
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      fontWeight: "300",
                      fontSize: "1.6rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingRight: "15px",
                      textAlign: "right",
                    }}
                  >
                    {index % 2 === 0 ? item.content : ""}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h3"
                    style={{
                      fontWeight: "300",
                      fontSize: "1rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingRight: "15px",
                      textAlign: "right",
                    }}
                  >
                    {index % 2 === 0 ? item.subtitle : ""}
                  </Typography>
                </div>
                <div className="timeline-middle">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{
                      backgroundColor: "#5151c6",
                      color: "white",
                      width: "1.5rem",
                      height: "1.5rem",
                      padding: "0.4rem",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="timeline-end timeline-box">
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      fontWeight: "400",
                      fontSize: "1.6rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      textAlign: "left",
                    }}
                  >
                    {index % 2 !== 0 ? item.content : ""}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h3"
                    style={{
                      fontSize: "1rem",
                      fontFamily: "Calibri Light",
                      lineHeight: "0.9em",
                      paddingBottom: "10px",
                      paddingLeft: "10px",
                      textAlign: "left",
                    }}
                  >
                    {index % 2 !== 0 ? item.subtitle : ""}
                  </Typography>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        style={{ scrollMarginTop: "64px", paddingTop: "100px" }}
      >
        <Typography
          variant="h1"
          component="h1"
          style={{
            color: "#fff",
            fontWeight: "600",
            fontSize: "3rem",
            fontFamily: "Segoe UI",
            lineHeight: "0.9em",
            paddingBottom: "10px",
            textAlign: "center",
          }}
          className="aos-init aos-animate"
          data-aos="zoom-out-up"
        >
          Project Work
        </Typography>
        <div className="row-projects">
          <Button
            className="col-item aos-init aos-animate"
            data-aos="fade-right"
            onClick={handleDropdownToggle}
          >
            <img src="assets/AI.svg" alt="AI project" />
            <Typography
              variant="h3"
              component="h3"
              style={{
                color: "rgba(41, 40, 40, 0.911)",
                fontSize: "2rem",
                fontFamily: "Calibri",
                lineHeight: "0.9em",
                paddingBottom: "10px",
                textAlign: "center",
              }}
            >
              AI
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              style={{
                color: "rgba(41, 40, 40, 0.911)",
                fontSize: "1rem",
                fontFamily: "Calibri Light",
                lineHeight: "1em",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Computer Vision, NLP, Reinforcement Learning and ML
            </Typography>
            <FontAwesomeIcon
              icon={activeDropdown === "ai" ? faChevronUp : faChevronDown}
              style={{ width: "50px", height: "50px", margin: "auto" }}
            />
          </Button>

          <Button
            className="col-item aos-init aos-animate"
            data-aos="fade"
            onClick={handleDropdownToggle2}
          >
            <img src="assets/graph.svg" alt="AI project" />
            <Typography
              variant="h3"
              component="h3"
              style={{
                color: "rgba(41, 40, 40, 0.911)",
                fontSize: "2rem",
                fontFamily: "Calibri",
                lineHeight: "0.9em",
                paddingBottom: "10px",
                textAlign: "center",
              }}
            >
              DATA ANALYTICS
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              style={{
                color: "rgba(41, 40, 40, 0.911)",
                fontSize: "1rem",
                fontFamily: "Calibri Light",
                lineHeight: "1em",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Large-scale Data Analysis using Microservices and Pipelines
            </Typography>
            <FontAwesomeIcon
              icon={
                activeDropdown === "analytics" ? faChevronUp : faChevronDown
              }
              style={{ width: "50px", height: "50px", margin: "auto" }}
            />
          </Button>

          <Button
            className="col-item aos-init aos-animate"
            data-aos="fade-left"
            onClick={handleDropdownToggle3}
          >
            <img src="assets/optimization.svg" alt="AI project" />
            <Typography
              variant="h3"
              component="h3"
              style={{
                color: "rgba(41, 40, 40, 0.911)",
                fontSize: "2rem",
                fontFamily: "Calibri",
                lineHeight: "0.9em",
                paddingBottom: "10px",
                textAlign: "center",
              }}
            >
              OTHER
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              style={{
                color: "rgba(41, 40, 40, 0.911)",
                fontSize: "1rem",
                fontFamily: "Calibri Light",
                lineHeight: "1em",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Website, Mobile Applications and Optimisation projects
            </Typography>
            <FontAwesomeIcon
              icon={activeDropdown === "other" ? faChevronUp : faChevronDown}
              style={{ width: "50px", height: "50px", margin: "auto" }}
            />
          </Button>
        </div>
      </section>

      {activeDropdown === "ai" && ( // Render dropdown content conditionally
        <section id="project" className="project">
          {Aiproject.map((project, index) => (
            <div key={index} data-aos="fade-up" className="project-item">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  fontSize: "2rem",
                  fontFamily: "Calibri Light",
                  lineHeight: "0.9em",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  textAlign: "center",
                }}
              >
                {project.title}
              </Typography>
              <Link href={project.url} target="_blank">
                <Image
                  src={project.imagesrc}
                  alt={project.title}
                  width={400}
                  height={300}
                  style={{ margin: "auto" }}
                  className="hover:opacity-50 hover: cursor-pointer"
                />
              </Link>
              <p>{project.content}</p>
            </div>
          ))}
        </section>
      )}

      {activeDropdown === "analytics" && ( // Render dropdown content conditionally
        <section id="project2" className="project">
          {Analytics.map((project, index) => (
            <div key={index} data-aos="fade-up" className="project-item">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  fontSize: "2rem",
                  fontFamily: "Calibri Light",
                  lineHeight: "0.9em",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  textAlign: "center",
                }}
              >
                {project.title}
              </Typography>
              <Link href={project.url} target="_blank">
                <Image
                  src={project.imagesrc}
                  alt={project.title}
                  width={400}
                  height={300}
                  style={{ margin: "auto" }}
                  className="hover:opacity-50 hover: cursor-pointer"
                />
              </Link>
              <p>{project.content}</p>
            </div>
          ))}
        </section>
      )}

      {activeDropdown === "other" && ( // Render dropdown content conditionally
        <section id="project3" className="project">
          {OtherProjects.map((project, index) => (
            <div key={index} data-aos="fade-up" className="project-item">
              <Typography
                variant="h1"
                component="h1"
                style={{
                  fontSize: "2rem",
                  fontFamily: "Calibri Light",
                  lineHeight: "0.9em",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  textAlign: "center",
                }}
              >
                {project.title}
              </Typography>
              <Link href={project.url} target="_blank">
                <Image
                  src={project.imagesrc}
                  alt={project.title}
                  width={400}
                  height={300}
                  style={{ margin: "auto" }}
                  className="hover:opacity-50 hover: cursor-pointer"
                />
              </Link>
              <p>{project.content}</p>
            </div>
          ))}
        </section>
      )}
      {/* Achievements Section */}
      <section
        id="achievements"
        style={{
          paddingTop: "100px",
          scrollMarginTop: "64px",
        }}
      >
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
            marginBottom: "5rem",
            textDecoration: "underline",
          }}
        >
          Achievements & Results
        </Typography>
        <div className="space-y-4 grid achieveDrop">
          {dropdownData.map((dropdown, index) => (
            <Dropdown
              key={index}
              title={dropdown.title}
              items={dropdown.items}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{
          paddingBottom: "30px",
          scrollMarginTop: "64px",
        }}
      >
        <Skill />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ padding: "100px 0", scrollMarginTop: "64px" }}
      >
        <Contact />
      </section>
    </div>
  );
}
