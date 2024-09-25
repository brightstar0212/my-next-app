"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { Slide, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
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
        <Slide
          key={i}
          direction={i < index ? "left" : "right"}
          in={i === index}
        >
          <Box
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
              style={{ width: "50%", margin: "0 auto", borderRadius: "50px" }} // Set width to 50% and center
            />
            <Typography
              style={{
                width: "450px",
                padding: "10px",
                fontSize: "1.3rem",
              }}
            >
              {image.caption}
            </Typography>
          </Box>
        </Slide>
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
      {/* Circle Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {images.map((dot, i) => (
          <Box
            key={i}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: i === index ? "rgba(45, 45, 46, 0.76)" : "#fff",
              cursor: "default",
              "&:hover": {
                backgroundColor: "rgba(45, 45, 46, 0.9)",
              },
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </Box>
    </Box>
  );
}
