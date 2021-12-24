import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: "url(./images/Vector5.jpg)",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "auto",
  },
  blurbox: {
    width: "379px",
    height: "416px",
    background:
      "linear-gradient(152.97deg, rgba(255, 255, 255, 0.08) 0%, rgba(232, 66, 76, 0.062) 100%)",
    backdropFilter: "blur(42px)",
    textAlign: "center",
    marginTop: "260px",
  },
  headtxt: {
    fontFamily: "'Rubik', sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    color: "#FFFFFF",
  },
  subtext: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "31px",
    textAlign: "center",
    color: "#FFFFFF",
  },
}));
const Featured = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid item lg={12} md={12} sm={6} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.blurbox}>
                <img src="/Images/icon1.png" alt="" />

                <Typography className={classes.headtxt}>
                  CUSTOMIZATION
                </Typography>
                <Typography className={classes.subtext}>
                  All cars on Foreign Fuels will be upgradable and modifiable
                  with parts. All parts are interchangable for specific
                  manufacturers. Upgrade their appearance and performance to
                  improve your car’s in-game stats.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.blurbox}>
                <img src="/Images/icon2.png" alt="" />
                <Typography className={classes.headtxt}>$GAS TOKEN</Typography>
                <Typography className={classes.subtext}>
                  Use $GAS tokens in order to mint parts, upgrade your cars, or
                  modify your apperance. Place wagers on races against your
                  friends and rivals to earn $GAS. If you’re really confident in
                  your driving ability, put your cars on the line for the chance
                  to win pink slips.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.blurbox}>
                <img src="/Images/icon1.png" alt="" />
                <Typography className={classes.headtxt}>
                  RACE FRIENDS
                </Typography>
                <Typography className={classes.subtext}>
                  Passively earn $GAS tokens by racing against your friends.
                  Increase your car’s performance rating to compete against
                  others and to have a better chance at winning future races. Or
                  upgrade your car’s apperance to look extra fly on the track.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Featured;
