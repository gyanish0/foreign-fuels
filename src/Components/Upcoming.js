import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles(() => ({
  root: { backgroundColor: "#120720", height: "auto" },
  headtext: {
    position: "absolute",
    width: "441px",
    height: "51px",
    fontFamily: "'Rubik', sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "51px",
    color: "#FFFFFF",
    marginTop: "75px",
  },
}));
const Upcoming = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Typography className={classes.headtext}>UPCOMING RACE</Typography>
        </Box>

        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box
            style={{
              width: "501px",
              height: "4px",
              marginTop: "130px",
              background:
                "linear-gradient(270deg, rgba(196, 196, 196, 0) 3.29%, #C4C4C4 52.8%, rgba(196, 196, 196, 0) 99.3%)",
            }}
          ></Box>
        </Box>
        <Box style={{ marginTop: "200px" }}>
          <Grid item lg={12} md={12} sm={6} xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <img src="/Images/Group 257.png" alt="" />
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <img src="/Images/Group 257.png" alt="" />
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <img src="/Images/Group 257.png" alt="" />
              </Grid>
            </Grid>
            <Box style={{ display: "flex", justifyContent: "end" }}>
              <Button
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#FFFFFF",
                }}
              >
                See all
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Upcoming;
