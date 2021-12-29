import React from "react";
// import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import icon from "./components/zoomIcon.jpg"

import Video from "./components/Video";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

//stylesheet
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

}));

const App = () => {

  const classes = useStyles();

  return (
    <>
      <div>
        <img src={icon} style={{ height: "100px", width: "100px" }} alt="zoom-icon" />
        <h1 style={{ fontSize: "large", color: "#4C95FC", fontWeight: "100", padding: "20px 20px" }}><b>VIDEO CHAT APP</b></h1>
      </div>
      <div className={classes.wrapper}>
        <Video />
        <Options>
          <Notifications />
        </Options>
      </div>
    </>
  );
}

export default App;

