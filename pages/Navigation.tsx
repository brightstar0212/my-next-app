"use client"; // Ensure this is a Client Component

import { Button } from "@mui/material";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (!target) return;

    // The custom scroll animation
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top;
    const startTime = performance.now();
    const duration = 2000; // 1 second scroll duration

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Clamp progress to 1 (100%)
      const ease = easeInOutCubic(progress); // Apply easing
      window.scrollTo(0, startPosition + targetPosition * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll); // Continue animation
      }
    };

    requestAnimationFrame(animateScroll); // Start animation
  };

  return (
    <>
      <Button color="inherit" onClick={() => scrollToSection("about")}>
        About
      </Button>
      <Button color="inherit" onClick={() => scrollToSection("experience")}>
        Experience
      </Button>
      <Button color="inherit" onClick={() => scrollToSection("projects")}>
        Projects
      </Button>
      <Button color="inherit" onClick={() => scrollToSection("achievements")}>
        Achievements
      </Button>
      <Button color="inherit" onClick={() => scrollToSection("skills")}>
        Skills
      </Button>
      <Button color="inherit" onClick={() => scrollToSection("contact")}>
        Contact
      </Button>
    </>
  );
}
