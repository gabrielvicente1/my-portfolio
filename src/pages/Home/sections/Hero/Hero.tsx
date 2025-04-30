import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "120vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                {" "}
                Gabriel Vicente{" "}
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
                pb={4}
              >
                {" "}
                I'm a Full Stack Software Developer{" "}
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pb={3}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <a
                    href="./public/Currículo.PDF"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <StyledButton onClick={() =>{}}>
                      <DownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </a>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    onClick={() => {
                      const section = document.getElementById("contact");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
