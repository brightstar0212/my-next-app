"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css"; // Import AOS styles
import Image from "next/image";
export default function Contact() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const handleScroll = () => {
    setShowGoToTop(window.scrollY > 0);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isDropOpen, setDropDown] = useState(false);
  const toggleDown = () => {
    setDropDown((prev) => !prev);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Attach scroll event listener

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {" "}
      <Typography
        variant="h1"
        component="h1"
        style={{
          color: "#5151c6",
          fontWeight: "600",
          fontSize: "3.6rem",
          fontFamily: "Calibri",
          lineHeight: "0.9em",
          paddingBottom: "10px",
          textAlign: "center",
          textDecoration: "underline",
        }}
        className="aos-init aos-animate"
        data-aos="zoom-in-up"
      >
        Contact Me
      </Typography>
      <div className="telephone">
        <Button
          style={{
            display: "block",
            margin: "auto",
            background: "#5151c6",
            width: "8%",
          }}
          className="aos-init aos-animate telbtn"
          data-aos="flip-right"
          onClick={toggleDown}
        >
          <Image
            width={150}
            height={300}
            src="https://www.ronan-murphy.com/Images/address-book.svg"
            alt="contact"
          />
          <FontAwesomeIcon
            icon={isDropOpen ? faChevronUp : faChevronDown}
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        </Button>
      </div>
      {isDropOpen && (
        <>
          <div
            className="mailPhone flex justify-center"
            style={{ padding: "2rem", paddingTop: "4rem" }}
          >
            <a className="phone grid" href="mailto:ronan-murphy@outlook.ie">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  margin: "auto",
                  width: "60px",
                  height: "60px",
                }}
              />
              <span>ronan-murphy@outlook.ie</span>
            </a>
            <a className="phone grid" href="tel:+35385-767-1514">
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  margin: "auto",
                  width: "60px",
                  height: "60px",
                }}
              />
              <span>+353 85 767 1514</span>
            </a>
          </div>
        </>
      )}
      <div style={{ marginTop: "2rem" }} className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76329.91282327415!2d-9.131146795980367!3d53.28398573503283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b93955a2d5bff%3A0x32b1b440a495281!2sGalway%2C%20Ireland!5e0!3m2!1sen!2s!4v1727214061128!5m2!1sen!2s"
          width="90%"
          height="400"
          style={{ borderRadius: "15px", margin: "auto" }}
          loading="lazy"
        ></iframe>
      </div>
      {showGoToTop && (
        <Button className="goToTop" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </Button>
      )}
    </>
  );
}
