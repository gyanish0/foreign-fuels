import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  root: { backgroundColor: "#000" },
  headtext: {
    fontFamily: "Dismedia",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "51px",
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: "110px",
  },
  box1: {
    background: "#120720",
    border: "1px solid #EC0AD7",
    boxSizing: "border-box",
    width: "290px",
    height: "373px",
    // paddingTop: "110px",
  },
  img1: {
    marginTop: "45px",
    marginLeft: "21px",
    width: "241px",
    height: "131px",
  },
  img2: {
    marginTop: "45px",
    marginLeft: "115px",
  },
  subbox: {},
  bottontext: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Rubika",
    fontSize: "90px",
    fontWeight: "900",
    transform: "rotate(2.11deg)",
    textShadow: "0px 5px 4px #000000",
  },
  bottontext1: {
    fontFamily: "Dismedia",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "60px",
    lineHeight: "61px",
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "0px 5px 4px #000000",
  },
}));
const Sale = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Box>
          <Typography className={classes.headtext}>ON SALE</Typography>
        </Box>
        <Box>
          <Grid item lg={12} md={12} sm={6} xs={6}>
            <Grid container spacing={3} style={{ paddingTop: "110px" }}>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box className={classes.box1}>
                  <img src="/Images/21 1.png" alt="" className={classes.img1} />
                  <img
                    src="/Images/121 1.png"
                    alt=""
                    className={classes.img2}
                  />
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box className={classes.box1}>
                  <img src="/Images/222.png" alt="" className={classes.img1} />
                  <img
                    src="/Images/563 1.png"
                    alt=""
                    className={classes.img2}
                  />
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box className={classes.box1}>
                  <Box className={classes.box1}>
                    <img
                      src="/Images/5252.png"
                      alt=""
                      className={classes.img1}
                    />
                    <img
                      src="/Images/2526.png"
                      alt=""
                      className={classes.img2}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Box className={classes.box1}>
                  <img src="/Images/7854.png" alt="" className={classes.img1} />
                  <img src="/Images/3265.png" alt="" className={classes.img2} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/Images/Sign.png"
              alt=""
              style={{ transform: "rotate(4.11deg)", marginTop: "-124px" }}
            />
          </Box>
          <Box>
            <Typography className={classes.bottontext}>RACING</Typography>
          </Box>
          <Box>
            <Typography className={classes.bottontext1}>GAME</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Sale;
