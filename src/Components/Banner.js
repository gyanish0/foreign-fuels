import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    backgroundImage: "url(./images/bannerbg.jpg)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "150px 0px",
  },
  headtxt: {
    fontFamily: "Dismedia",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "60px",
    lineHeight: "61px",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
  },
  subtext: {
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "51px",
    textAlign: "center",
    color: "#1CE9E9",
    textShadow: "0px 5px 4px #000000",
    marginTop: "60px",
  },
  subtext1: {
    fontFamily: "Dismedia",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "31px",
    color: "#FFFFFF",
    textShadow: "0px 5px 4px #000000",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  btnlogin: {
    background: "#EC0AD7",
    width: "175px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
  },
  btnbox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  subtext4: {
    fontFamily: "Rubik",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    textShadow: "0px 5px 4px #000000",
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Box>
          <Typography className={classes.headtxt}>
            THE FIRST IMX RACING GAME
          </Typography>
          <Typography className={classes.subtext}>MINTING IN</Typography>
          <Typography className={classes.subtext1}>
            1 DAY 23 HOURS 50 MINUTES AND 6 SECONDS
          </Typography>
        </Box>
        <Box className={classes.btnbox}>
          <Button className={classes.btnlogin}>LOGIN</Button>
        </Box>
        <Grid item lg={12} md={12} sm={6} xs={6}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={6} xs={6}>
              <Typography className={classes.subtext4}>
                9000 MINTABLE CAR MODELS
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
              <Typography className={classes.subtext4}>
                UPGRADE & CUSTOMIZE YOUR CAR
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
              <Typography className={classes.subtext4}>
                RACE AND COMPETE WITH FRIENDS
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
