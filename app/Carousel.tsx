"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// Array of images to be shown in the carousel
const images = [
  {
    src: "/assets/1.jpg",
    caption: "Approaching the tee box in Bearna Golf Tournament",
  },
  {
    src: "/assets/2.png",
    caption: "Proud moment captaining Corrib U19 to national glory",
  },
  {
    src: "/assets/3.png",
    caption: "In awe of the views during my ski trip to the Alps",
  },
  {
    src: "/assets/4_xmas_2020.jpg",
    caption: "The annual Christmas Day photo with my Mother",
  },
  {
    src: "/assets/5_aircraft.png",
    caption: "Exploring an abandoned WW2 Aircraft in Vancouver",
  },
  {
    src: "/assets/6_grad_pose.jpg",
    caption: "Engineering Graduation 2019",
  },
  {
    src: "/assets/7_band.jpg",
    caption: "On stage during a live band performance",
  },
  {
    src: "/assets/8_diwali.jpg",
    caption: "Amazing experience at my first Diwali 2019",
  },
  {
    src: "/assets/9_charity_swim.jpg",
    caption: "Shivering post charity sea swim",
  },
  {
    src: "/assets/10_racing.png",
    caption: "At the Galway Horse Racing Festival",
  },
  {
    src: "/assets/11_granny.jpg",
    caption: "Me and my Grandmother",
  },
  {
    src: "/assets/12_propect_point.jpg",
    caption: "Prospect Point - Stanley Park, Vancouver",
  },
  {
    src: "/assets/13_golden_gate.jpg",
    caption: "Trying not to crash into other cyclists in San Francisco",
  },
  {
    src: "/assets/14_yosemite.jpg",
    caption: "Having fun (safely!) atop Glacier Point, Yosemite",
  },
  {
    src: "/assets/15_seth_rogen.jpg",
    caption: "Comedian Seth Rogan ecstatic to meet Ronan Murphy",
  },
  {
    src: "/assets/16_ice_water.png",
    caption: "Cooling down after a hike in Joffre Lake, Vancouver",
  },
  {
    src: "/assets/17_construction.jpg",
    caption: "Last day working on site during my J1 visa to Canada",
  },
  {
    src: "/assets/18_postman.jpg",
    caption: "Working as a Postman in Paris summer 2017",
  },
];
export default function Carousel() {
  const [index, setIndex] = useState(0);
  const imageCount = images.length;

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imageCount);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imageCount) % imageCount);
  };

  return (
    <Box sx={{ width: "50%", height: "400px" }}>
      {images.map((image, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: i === index ? "block" : "none",
          }}
        >
          <Image
            src={image.src}
            alt={`Slide ${i}`}
            layout="responsive" // Use responsive layout
            width={450} // Set width of the image (for aspect ratio)
            height={450} // Set height of the image (for aspect ratio)
            style={{ borderRadius: "50px" }} // Set width to 50% and center
            className="carousel-image"
          />
          {/* Circle Indicators */}
          <Box
            // key={i}
            sx={{
              position: "relative",
              bottom: 60,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
              padding: "1rem",
            }}
          >
            {images.map((dot, j) => (
              <Box
                key={j}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor:
                    j === index ? "rgba(45, 45, 46, 0.76)" : "#fff",
                  cursor: "default",
                  "&:hover": {
                    backgroundColor: "rgba(45, 45, 46, 0.9)",
                  },
                }}
                onClick={() => setIndex(j)}
              />
            ))}
          </Box>
          <Typography
            style={{
              padding: "10px",
              fontSize: "1.3rem",
            }}
            className="carousel-caption"
          >
            {image.caption}
          </Typography>
        </Box>
      ))}

      <Button
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          top: "45%",
          left: 0,
          zIndex: 1,
          "&:hover": {
            backgroundColor: "rgba(45, 45, 46, 0.76)", // Background color on hover
          },
          "&:active": {
            backgroundColor: "rgba(45, 45, 46, 0.86)", // Background color when clicked
          },
        }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "white", width: "1.2rem", height: "1.5rem" }}
        />
      </Button>
      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "45%",
          right: 0,
          zIndex: 1,
          "&:hover": {
            backgroundColor: "rgba(45, 45, 46, 0.76)", // Background color on hover
          },
          "&:active": {
            backgroundColor: "rgba(45, 45, 46, 0.86)", // Background color when clicked
          },
        }}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "white", width: "1.2rem", height: "1.5rem" }}
        />
      </Button>
    </Box>
  );
}
