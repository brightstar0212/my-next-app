"use client"; // Mark this component as a Client Component

import React from "react";
import { Typography } from "@mui/material";
import Image from "next/legacy/image";
export default function Skill() {
  return (
    <>
      {" "}
      <Typography
        variant="h1"
        component="h1"
        style={{
          color: "#000",
          fontWeight: "600",
          fontSize: "4rem",
          fontFamily: "Calibri",
          lineHeight: "1em",
          paddingBottom: "10px",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Skills
      </Typography>
      <div>
        <Typography
          variant="h1"
          component="h1"
          style={{
            color: "#000",
            fontWeight: "600",
            fontSize: "2rem",
            fontFamily: "Segoe UI",
            lineHeight: "0.9em",
            paddingBottom: "10px",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          AI&DA EXPERTISE
        </Typography>
        <div className="flex skill">
          <div className="w-1/2 skill-content">
            <ul className="block">
              <li>
                <Image
                  width={150}
                  height={100}
                  layout="responsive"
                  src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg"
                  alt="tensoflow"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg"
                  alt="opencv"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg"
                  alt="pytorch"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/apache_spark/apache_spark-ar21.svg"
                  alt="spark"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="	https://www.ronan-murphy.com/Images/Projects/scikit-learn.svg"
                  alt="scikit"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="	https://www.ronan-murphy.com/Images/Projects/caffe.svg"
                  alt="caffe"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/apache_activemq/apache_activemq-ar21.svg"
                  alt="activeMQ"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-ar21.svg"
                  alt="hadoop"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"
                  alt="amazon"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg"
                  alt="microsoftAzure"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"
                  alt="googleCloud"
                ></Image>
              </li>
              <li>
                <Image
                  width={150}
                  height={100}
                  src="https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg"
                  alt="jupyter"
                ></Image>
              </li>
            </ul>
          </div>
          <div className="w-1/2 skill-content" style={{ padding: "3rem" }}>
            <Typography
              variant="h5"
              component="h5"
              style={{
                color: "#000",
                fontWeight: "380",
                fontSize: "1.1rem",
                fontFamily: "Segoe UI",
                lineHeight: "1.2em",
                paddingBottom: "10px",
              }}
            >
              Passion for &nbsp;
              <strong>
                Computer Vision, Natural Language Processing, Reinforcement
                Learning, Deep Learning, Data Mining
              </strong>{" "}
              and anything related to Artificial Intelligence.{" "}
              <strong>Python, R and Java</strong> languages used for many
              projects in research and industry environments.
              <br />
              <br />
              <br />
              Experience in Tensorflow, PyTorch, and Caffe &nbsp;
              <strong>AI Frameworks</strong> to extensively train and test
              models. Proficient using Keras, OpenCV, Scikit Learn, and Apache
              <strong> ML libraries</strong>.
              <br />
              <br />
              <strong>Data Analytics</strong> using Hadoop for MapReduce,
              ActiveMQ for &nbsp;
              <strong>Microservices</strong> communication pipelines, streaming
              data with AWS, Azure and Google Cloud.
            </Typography>
          </div>
        </div>
        <Typography
          variant="h1"
          component="h1"
          style={{
            color: "#171717",
            fontWeight: "400",
            fontSize: "2rem",
            fontFamily: "Segoe UI",
            lineHeight: "0.9em",
            paddingBottom: "10px",
            textAlign: "center",
          }}
        >
          PROGRAMMING
        </Typography>

        <div>
          <div className="flex skill">
            <div className="w-1/2 skill-content" style={{ padding: "3rem" }}>
              <Typography
                variant="h5"
                component="h5"
                style={{
                  color: "#000",
                  fontWeight: "380",
                  fontSize: "1.1rem",
                  fontFamily: "Segoe UI",
                  lineHeight: "1.2em",
                  paddingBottom: "10px",
                }}
              >
                <strong>Front-end Development</strong> with HTML, CSS,
                Javascript and JQuery to implement client-side projects. UX and
                UI enhancements with Bootstrap and FontAwesome styles. In my
                previous role, analysed NUI Galway&#39;s website to add features
                and conform with <strong>European Accessibility</strong>{" "}
                guidelines. This website was programmed from scratch using these
                skills.
                <br />
                <br />
                <br />
                <strong>Back-end Development</strong> using
                <strong>Object-Oriented programming</strong> with Python, Java,
                C++ server applications.<strong>Functional programming</strong>{" "}
                in C with embedded development for Arduino Microprocessors and
                Assembly language.
                <br />
                <br />
                <br />
                <strong>Databases</strong> communication with SQL with
                relational management system MySQL. NoSQL also used for
                non-relational large datasets with MongoDB.
                <br />
                <br />
                <br />
                <strong>Mobile Development</strong> in Android for Bluetooth,
                GPS and Graphing Apps using Java and XML.
              </Typography>
            </div>
            <div className="w-1/2 skill-content">
              <ul className="block">
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/python/python-ar21.svg"
                    alt="python"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/java/java-ar21.svg"
                    alt="java"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/r-project/r-project-ar21.svg"
                    alt="Rpro"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.ronan-murphy.com/Images/Projects/c++.svg"
                    alt="c++"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="	https://www.ronan-murphy.com/Images/Projects/c.svg"
                    alt="c"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="	https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"
                    alt="html5"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg"
                    alt="javascript"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/jquery/jquery-ar21.svg"
                    alt="jquery"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"
                    alt="mysql"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
                    alt="mongodb"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/android/android-ar21.svg"
                    alt="android"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg"
                    alt="css"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg"
                    alt="bootstrap"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/linux/linux-ar21.svg"
                    alt="linux"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21.svg"
                    alt="bash"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/arduino/arduino-ar21.svg"
                    alt="arduino"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg"
                    alt="vs"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/w3c_xml/w3c_xml-ar21.svg"
                    alt="xml"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/mit_scratch/mit_scratch-ar21.svg"
                    alt="scratch"
                  ></Image>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Typography
          variant="h1"
          component="h1"
          style={{
            color: "#171717",
            fontWeight: "400",
            fontSize: "2rem",
            fontFamily: "Segoe UI",
            lineHeight: "0.9em",
            paddingBottom: "10px",
            textAlign: "center",
          }}
        >
          OTHER
        </Typography>

        <div>
          <div className="flex skill">
            <div className="w-1/2 skill-content">
              <ul className="block">
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
                    alt="python"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"
                    alt="java"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/shippable/shippable-ar21.svg"
                    alt="Rpro"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/gradle/gradle-ar21.svg"
                    alt="c++"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="	https://www.vectorlogo.zone/logos/google_analytics/google_analytics-ar21.svg"
                    alt="c"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="	https://www.ronan-murphy.com/Images/Projects/venism.svg"
                    alt="html5"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.ronan-murphy.com/Images/Projects/AutoCad_logo.svg"
                    alt="javascript"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg"
                    alt="jquery"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/unity3d/unity3d-ar21.svg"
                    alt="mysql"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/canva/canva-ar21.svg"
                    alt="mongodb"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/gimp/gimp-ar21.svg"
                    alt="android"
                  ></Image>
                </li>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/wordpress/wordpress-ar21.svg"
                    alt="css"
                  ></Image>
                </li>
                <li style={{ marginLeft: "35%" }}>
                  <Image
                    width={150}
                    height={100}
                    src="https://www.vectorlogo.zone/logos/wireshark/wireshark-ar21.svg"
                    alt="bootstrap"
                  ></Image>
                </li>
              </ul>
            </div>
            <div className="w-1/2 skill-content" style={{ padding: "3rem" }}>
              <Typography
                variant="h5"
                component="h5"
                style={{
                  color: "#000",
                  fontWeight: "380",
                  fontSize: "1.1rem",
                  fontFamily: "Segoe UI",
                  lineHeight: "1.2em",
                  paddingBottom: "10px",
                }}
              >
                <strong>Version Control</strong> and Collaboration using Git and
                Github and Google Colab. <strong>Agile Processes</strong> and
                debugging with JIRA software.
                <strong>JUnit Testing</strong> in Java.{" "}
                <strong>Continuous Integration</strong>implemented with build
                automation tools Gradle and Maven.
                <br />
                <br />
                <br />
                <strong>Data Visualisation</strong> and Modelling with Venism,
                Autocad and Solidworks. Game design using Unity.{" "}
                <strong>UX</strong> and <strong>UI</strong> design using Canva,
                Gimp, WordPress, Paint, Adobe Creative Suite. Telecommunication
                network analysis with Wireshark.
                <br />
                <br />
                <br />
                Soft skills include <strong> Problem-Solving</strong>,{" "}
                <strong> Excellent Communication</strong>,
                <strong>Time-Management</strong>, <strong>Multi-Tasking</strong>
                , <strong>Meticulous and Initiative</strong>.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
