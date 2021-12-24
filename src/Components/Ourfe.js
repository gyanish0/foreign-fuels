import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
// import Featured from "./Featured";
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#170A27",
    padding: "50px 0px",
  },
  root2: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "-193px",
  },
  headtext: {
    fontFamily: "'Rubik', sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "51px",
    display: "flex",
    justifyContent: "center",
    color: "#FFFFFF",
  },
}));
const Ourfe = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.root2}>
        <img src="/Images/image 2.png" alt="" />
      </Box>
      <Box>
        <Typography className={classes.headtext}>OUR FEATURES</Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box
          style={{
            width: "501px",
            height: "4px",
            background:
              "linear-gradient(270deg, rgba(196, 196, 196, 0) 3.29%, #C4C4C4 52.8%, rgba(196, 196, 196, 0) 99.3%)",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Ourfe;
