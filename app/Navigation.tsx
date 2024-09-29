"use client"; // Ensure this is a Client Component
import { Button } from "@mui/material";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      <Button
        color="inherit"
        onClick={() => scrollToSection("about")}
        className="myMenuItems"
      >
        About
      </Button>
      <Button
        color="inherit"
        onClick={() => scrollToSection("experience")}
        className="myMenuItems"
      >
        Experience
      </Button>
      <Button
        color="inherit"
        onClick={() => scrollToSection("projects")}
        className="myMenuItems"
      >
        Projects
      </Button>
      <Button
        color="inherit"
        onClick={() => scrollToSection("achievements")}
        className="myMenuItems"
      >
        Achievements
      </Button>
      <Button
        color="inherit"
        onClick={() => scrollToSection("skills")}
        className="myMenuItems"
      >
        Skills
      </Button>
      <Button
        color="inherit"
        onClick={() => scrollToSection("contact")}
        className="myMenuItems"
      >
        Contact
      </Button>
      <Dropdown>
        <MenuButton>
          <FontAwesomeIcon icon={faBars} color="black" id="menuItemBar" />
        </MenuButton>
        <Menu
          slots={{ listbox: "ol" }}
          style={{
            background: "white",
            zIndex: "100",
            padding: "1rem",
            color: "black",
            borderRadius: "10px",
            marginTop: "2rem",
            left: "20px",
          }}
          className="menulist"
        >
          <MenuItem color="inherit" onClick={() => scrollToSection("about")}>
            About
          </MenuItem>
          <MenuItem
            color="inherit"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </MenuItem>
          <MenuItem color="inherit" onClick={() => scrollToSection("projects")}>
            Projects
          </MenuItem>
          <MenuItem
            color="inherit"
            onClick={() => scrollToSection("achievements")}
          >
            Achievements
          </MenuItem>
          <MenuItem color="inherit" onClick={() => scrollToSection("skills")}>
            Skills
          </MenuItem>
          <MenuItem color="inherit" onClick={() => scrollToSection("contact")}>
            Contact
          </MenuItem>
        </Menu>
      </Dropdown>
    </>
  );
}
