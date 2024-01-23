import { Box } from "@mui/material";
import "./Dishes.css";
import Typography from "@mui/material/Typography";

function Dishes() {
  return (
    <>
      <Box
        className="section-two"
        sx={{ mt: 60, width: "100%", height: "auto" }}
      >
        <Box className="tex">
          <h1>Our Special Dish</h1>
          <p>
            Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
            arcu, nec vehicula eros.
          </p>
        </Box>
        <Box className="image-container">
          <Box className="image-item">
            <img src="/public/images/bowl-2.png" alt="Image 1" />
            <h1>Lumpia with Sauce</h1>
            <p>
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
          </Box>
          <Box className="image-item">
            <img src="/public/images/bowl-4.png" alt="Image 2" />
            <h1>Fish & Veggie</h1>
            <p>
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
          </Box>
          <Box className="image-item">
            <img src="/public/images/bowl1.png" alt="Image 3" />
            <h1>Tofu Chili</h1>
            <p>
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
          </Box>
          <Box className="image-item">
            <img src="/public/images/bowl-5.png" alt="Image 4" />
            <h1>Egg and Cocumber</h1>
            <p>
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
          </Box>
        </Box>
        <Box className="section-three">
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
              className="hero-left"
              sx={{
                width: "50%",
              }}
            >
              <Box
                className="left-image"
                sx={{
                  width: "666px",
                  height: "808px",
                  top: "291px",
                  left: "722px",
                  borderRadius: "100px 40px 100px 40px",
                }}
              >
                <img src="/public/images/bowl-6.png" alt="" />
              </Box>
            </Box>
            <Box
              className="hero-right"
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                className="text-wrapper"
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
                  Welcome to Our Restaurant
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
                <Box className="button-container">
                  <button className="btn3">Menu</button>
                  <button className="btn4">Book a table</button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dishes;
