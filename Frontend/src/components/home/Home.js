import React from "react";
import {useNavigate, Link , useHistory} from 'react-router-dom';
import {Redirect} from "react-router"
import "./home.css";
import video from "../video/video.mp4";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { RecipesView } from "../recipes/recipesView/RecipesView";
import { Login } from "../login/Login";

const useStyles = makeStyles((theme) => ({
  rootHomeDiv: {
    width: "100%",
    height: "100vh",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  // overlay: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   paddingBottom: "2rem",
  // },
  homeButton: {
    color: "white",
    fontSize: "medium",
    className: "homeButton",
    fontWeight: "bold",
  },
}));

export const Home = () => {
  const classes = useStyles();
  // const history = useHistory();
  const navigate = useNavigate();

  const changeToLoginPage =()=> {
    navigate("login")
    
  }

  const DisplayRecipes = () => {
    // navigate('/')
    // return(<Redirect to='/recipes'/>)
  }

  return (
    <div className={classes.rootHomeDiv}>
      {/* <ReactPlayer url={video} playing loop muted width="100%" height="100%" /> */}

      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" component="h1" className="title">
            Welcome To Bazi Community Recipes
          </Typography>
          <div className="buttonContainer">
            <Box component="span" className="homeBox">
              <Button
                className={classes.homeButton}
                onClick={DisplayRecipes}
              >
                EXPLORE BAZI COMMUNITY RECIPES
              </Button>
            </Box>

            <Box component="span" className="homeBox" >
              <Button className={classes.homeButton}
              onClick={changeToLoginPage}
              >
                LOGIN AND SHARE RECIPES WITH YOUR COMMINITY
              </Button>
            </Box>
          </div>
          <div></div>
        </Box>
      </div>
      <div className={classes.overlay}></div>
    </div>
  );
};
