import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
interface Item {
  contentTitle: string;
  contentText: string;
  imgsrc: string;
  imgWidth: number | string; // Can be a number or string
  imgHeight: number | string; // Can be a number or string
  imgname: string;
}
interface DropdownProps {
  title: string;
  items: Item[]; // Adjust the type if items is not an array of strings
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative mb-4" style={{ margin: "0px" }}>
      <button
        onClick={toggleCollapse}
        className="w-full flex justify-between items-center shadow-sm text-sm font-medium text-white "
        style={{ padding: "1.3rem" }}
      >
        <Typography
          variant="h1"
          component="h1"
          style={{
            fontWeight: "400",
            fontSize: "2.5rem",
            fontFamily: "Calibri",
            lineHeight: "0.9em",

            paddingLeft: "20px",

            display: "flex",
          }}
        >
          {title}
        </Typography>
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown : faChevronRight}
          style={{ width: "20px", height: "20px" }}
        />
      </button>

      {isOpen && (
        <div className=" bg-white">
          <ul
            className=" text-sm text-gray-700"
            style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          >
            {items.map(
              (item, index) =>
                item.contentTitle.length > 0 && (
                  <li key={index} style={{ margin: "0" }}>
                    <Typography
                      variant="h1"
                      component="h1"
                      style={{
                        color: "#171717",
                        fontWeight: "400",
                        fontSize: "2rem",
                        fontFamily: "Calibri",
                        lineHeight: "0.9em",
                        paddingBottom: "10px",
                        paddingLeft: "20px",
                        paddingTop: "20px",
                        display: "flex",
                      }}
                    >
                      {item.contentTitle}
                    </Typography>
                    <Typography
                      variant="h3"
                      component="h3"
                      style={{
                        color: "#171717",
                        fontSize: "1.1rem",
                        fontFamily: "Calibri",
                        lineHeight: "0.9em",
                        paddingBottom: "10px",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        paddingTop: "20px",
                        display: "flex",
                      }}
                    >
                      {item.contentText}
                    </Typography>
                    {item.imgsrc.length > 0 && (
                      <Image
                        src={item.imgsrc}
                        width={
                          typeof item.imgWidth === "string"
                            ? parseInt(item.imgWidth, 10)
                            : item.imgWidth
                        }
                        height={
                          typeof item.imgHeight === "string"
                            ? parseInt(item.imgHeight, 10)
                            : item.imgHeight
                        }
                        alt={item.contentTitle}
                        style={{
                          margin: "auto",
                          marginTop: "2rem",
                          borderRadius: "5%",
                        }}
                      />
                    )}
                    <Typography
                      variant="h3"
                      component="h3"
                      style={{
                        color: "#171717",
                        fontSize: "1.2rem",
                        fontFamily: "Calibri",
                        lineHeight: "0.9em",
                        paddingBottom: "10px",
                        paddingTop: "20px",
                        textAlign: "center",
                      }}
                    >
                      {item.imgname}
                    </Typography>
                  </li>
                )
            )}
          </ul>

          {items.map(
            (item) =>
              item.contentTitle.length == 0 && (
                <>
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      color: "#171717",
                      fontWeight: "400",
                      fontSize: "2rem",
                      fontFamily: "Calibri",
                      marginTop: "-3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {" "}
                    Masters in Artificial Intelligence
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      color: "#171717",
                      fontWeight: "400",
                      fontSize: "1.7rem",
                      fontFamily: "Calibri Light",

                      paddingLeft: "1rem",
                    }}
                  >
                    {" "}
                    Second Semester - First-Class Honours(Average:75.7)
                  </Typography>
                  <div>
                    <ul className="dropProLis">
                      <li>Advanced Natural Language Processing:85</li>
                      <li>Agents and Reinforcement Learning:84</li>
                      <li>Research Topics in AI:83</li>
                      <li>Masters Project on Knowledge Graphs:77</li>
                      <li>Optimisation:72</li>
                      <li>Information Retrieval:72</li>
                      <li>Deep Learning:70</li>
                      <li>Data Visualisation:54</li>
                    </ul>
                  </div>
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      color: "#171717",
                      fontWeight: "400",
                      fontSize: "1.7rem",
                      fontFamily: "Calibri Light",

                      paddingLeft: "1rem",
                    }}
                  >
                    {" "}
                    First Semester - First-Class Honours(Average:75.7)
                  </Typography>
                  <div>
                    <ul className="dropProLis">
                      <li>Artificial Intelligence and Ethics: 86</li>
                      <li>Systems Modelling and Simulation: 86</li>
                      <li>
                        Tools and Technique for Large-Scale Data Analytics: 71
                      </li>
                      <li>Introduction to Natural Language Processing: 61</li>
                      <li>Programming and Tools for AI: 55</li>
                    </ul>
                  </div>
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      color: "#171717",
                      fontWeight: "400",
                      fontSize: "2rem",
                      fontFamily: "Calibri",

                      paddingLeft: "1rem",
                    }}
                  >
                    {" "}
                    Bachelor of Electronic and Computer Engineering
                  </Typography>
                  <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      color: "#171717",
                      fontWeight: "400",
                      fontSize: "1.7rem",
                      fontFamily: "Calibri Light",

                      paddingLeft: "1rem",
                    }}
                  >
                    {" "}
                    Final Year - First-Class honours(Average:74.25)
                  </Typography>
                  <div>
                    <ul className="dropProLis">
                      <li>Machine Learning and Data Mining: 90</li>
                      <li>Real-Time Systems: 87</li>
                      <li>Research Topics in AI:83</li>
                      <li>Digital Signal Processing: 83</li>
                      <li>Distributed systems and Co-op Computing: 76</li>
                      <li>Communication and Signal Processing: 74</li>
                      <li>Software Engineering: 70</li>
                      <li>System on Chip Design 2: 70</li>
                      <li>Telecommunications: 67</li>
                      <li>System on Chip Design 1: 64</li>
                      <li>Electromagnetics: 63</li>
                    </ul>
                  </div>
                </>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
