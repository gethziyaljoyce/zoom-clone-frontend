import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../SocketContext";

//stylesheet
const useStyles = makeStyles((theme) => ({
    video: {
        width: "400px",
        [theme.breakpoints.down("xs")]: {
            width: "300px",
        },
    },
    gridContainer: {
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        },
    },
    paper: {
        padding: "2px",
        border: "1px solid black",
        margin: "10px",
    },
}))

//video player
const Video = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    const classes = useStyles();

    return (

        <Grid container className={classes.gridContainer}>
            {/*our video*/}
            {
                stream && (
                    <Paper className={classes.paper}>
                        <Grid item xs={10} md={6}>
                            <Typography varient="h3" gutterBottom>{name}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }
            {/*user video*/}
            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography varient="h3" gutterBottom>{call.name}</Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }



        </Grid>
    );
}

export default Video;