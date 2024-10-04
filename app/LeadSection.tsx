import { Typography } from "@mui/material";
import Image from "next/legacy/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
const LeadSection = () => {
  return (
    <Box component="section" id="lead">
      <Box className="lead-contain">
        <Box>
          <Box id="lead-content">
            <Typography
              variant="h1"
              component="h1"
              style={{
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
              }}
            >
              Artificial Intelligence Engineer
            </Typography>
            <Typography variant="body1">Welcome to the future</Typography>

            <Button
              sx={{
                boxShadow:
                  " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                color: "white",
                marginTop: "4rem",
                borderRadius: "15px",
                backgroundImage: "#5151c6",
              }}
              className="resume"
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px",
                }}
                href="http://ronanmmurphy.github.io/ronan-murphy/RonanMurphy_Resume.pdf"
                target="_blank"
              >
                <h4 id="resume_btn">My Resume</h4>
              </Link>
            </Button>
          </Box>
        </Box>

        <Box
          id="lead-image"
          style={{
            maxWidth: "700px", // Set a maximum width
            height: "auto", // Height will adjust based on the image aspect ratio
          }}
        >
          <Image
            src="/assets/profiler_2.jpg"
            alt="my profile pic"
            layout="responsive"
            width={500}
            height={550}
            objectFit="cover"
            id="myProfilePic"
          />
        </Box>
      </Box>

      <Box className="lead-overlay"></Box>
    </Box>
  );
};
export default LeadSection;
