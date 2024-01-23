import { Box, Typography, Link, Container } from "@mui/material";
import Image1 from "/public/images/image 1.png";

import "./Menu.css";

function Menu() {
  return (
    <Box sx={{ "*": { margin: 0, padding: 0 } }}>
      <Container>
        <Box
          className="main"
          sx={{ height: "100vh", width: "100%", marginTop: "70px" }}
        >
          <Box
            className="nav"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              background: "none",
              textAlign: "center",
            }}
          >
            <Box
              className="navbar-left"
              sx={{
                float: "left",
                color: "#101a24",
                display: "flex",
              }}
            >
              <img src="/public/images/Subtract.png" alt="" />
              <Typography
                variant="h1"
                sx={{
                  color: "#101a24",
                  width: "139px",
                  height: "33px",
                  fontFamily: "Inter",
                  fontSize: "27px",
                  fontWeight: 700,
                  lineHeight: "33px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                restaurant
              </Typography>
            </Box>
            <Box
              className="navbar-text"
              display="flex"
              justifyContent="space-between"
              gap={2}
              sx={{ textAlign: "center" }}
            >
              <Link
                href="#"
                color="inherit"
                underline="none"
                marginRight={2}
                sx={{
                  color: "#101a24",
                  textDecoration: "none",
                  width: "43px",
                  height: "19px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Menu
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                marginRight={2}
                sx={{
                  width: "53px",
                  height: "19px",
                  top: "97px",
                  left: "616px",
                  opacity: 0.7,
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#101a24",
                }}
              >
                Gallery
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                marginRight={2}
                sx={{
                  width: "51px",
                  height: "19px",
                  top: "97px",
                  left: "716px",
                  opacity: 0.7,
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#101a24",
                }}
              >
                Events
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                marginRight={2}
                sx={{
                  width: "46px",
                  height: "19px",
                  top: "97px",
                  left: "782px",
                  opacity: 0.7,
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                About
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                marginRight={2}
                sx={{
                  width: "61px",
                  height: "19px",
                  top: "97px",
                  left: "856px",
                  opacity: 0.7,
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Contact
              </Link>
            </Box>
            <Box
              className="navbar-right"
              sx={{
                float: "right",
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* <Button variant="contained" color="primary">
                Book a table
              </Button> */}
              <button>Book A table</button>
            </Box>
          </Box>

          <Box
            className="hero-section"
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "160px",
              // backgroundImage: 'url("/public/images/bowl.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              className="bg"
              sx={{
                width: "413px",
                height: "413px",
                top: "614px",
                // backgroundImage: 'url("/public/images/bowl.png")',
                // zIndex: 1000,
              }}
            ></Box>
            <Box
              className="hero-left"
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                className="text-wraper"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    width: "499px",
                    height: "144px",
                    top: "466px",
                    left: "180px",
                    fontFamily: "David Libre",
                    fontSize: "70px",
                    fontWeight: 700,
                    lineHeight: "72px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#101a24",
                  }}
                >
                  Provide the best food for you.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "382px",
                    height: "87px",
                    top: "631px",
                    left: "180px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "29px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#5c6574",
                  }}
                >
                  Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
                  laoreet arcu, nec vehicula eros. Praesent egestas gravida
                  tincidunt. Etiam convallis.
                </Typography>
              </Box>
            </Box>
            <Box
              className="hero-right"
              sx={{
                width: "50%",
              }}
            >
              <Box
                className="right-image"
                sx={{
                  width: "666px",
                  height: "808px",
                  top: "291px",
                  marginRight: "92px",
                  borderRadius: "100px 40px 100px 40px",
                }}
              >
                <img
                  src={Image1}
                  alt=""
                  style={{ width: "90%", height: "100%" }}
                />
                {/* <img src="/public/images/image 1.png" alt="" /> */}
              </Box>
            </Box>
          </Box>
          <Box className="button-container">
            <button
              style={{
                borderRadius: "20px 10px",
                padding: "20px",
                background: "black",
                color: "white",
                width: "112px",
                height: "54px",
                marginLeft: "80px",
              }}
            >
              Menu
            </button>
            <button
              style={{
                borderRadius: "20px 10px",
                padding: "20px",
                background: "#ea6d27",
                width: "163px",
                height: "54px",
                top: "76px",
              }}
            >
              Book a table
            </button>
          </Box>
        </Box>
      </Container>
      {/* <Box className="section-two">
        <h1>hhhhhhh</h1>
      </Box> */}
    </Box>
  );
}

export default Menu;
