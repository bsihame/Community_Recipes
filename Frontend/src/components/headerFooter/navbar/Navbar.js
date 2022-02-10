import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SearchIcon from "@material-ui/icons/Search";
import { RecipesView } from "../../recipes/recipesView/RecipesView";
import { RecipeForm } from "../../recipes/RecipeForm";
import { Login } from "../../login/Login";
import { Signup } from "../../signup/Signup";
import {
  AppBar,
  Toolbar,
  InputBase,
  Tabs,
  Tab,
  Box,
  alpha,
  makeStyles,
} from "@material-ui/core";
import "./Navbar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  search: {
    marginRight: "10em",
    marginLeft: "20em",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginLeft: "0",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    paddingRight: "2em",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  indicator: {
    backgroundColor: "white",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [url, setUrl] = useState("");
  // let history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index, label) => {
    setValue(index);
    setUrl(label);
    console.log(114, url);
  };

  return (
    <Box
      className={classes.root}
      sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
    >
      <AppBar position="static" className="logoContainer">
        <Toolbar>
          <h2 className="logoName">BAZI</h2>
          <img
            // className={classes.logo}
            className="logo"

            alt="Community RecipesLogo"
            src="logo.png"
          />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="white"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
            TabIndicatorProps={{
              style: {
                backgroundColor: "red",
                border: 5,
                boxShadow: 1,
              },
            }}
          ></Tabs>
        </Toolbar>
      </AppBar>

      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {/* <NavLink to="/recipe"> */}
          <Tab label="Community Recipes" {...a11yProps(0)} />
          {/* </NavLink> */}
          {/* <NavLink to="/addRecipe"> */}
          <Tab label="Add A Recipe" {...a11yProps(1)} />
          {/* </NavLink> */}
          {/* <NavLink to="/login"> */}
          <Tab label="Login" {...a11yProps(2)} />
          {/* </NavLink> */}
          {/* <NavLink to="/signup"> */}
          <Tab label="Sign Up" {...a11yProps(3)} />
          {/* </NavLink> */}
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <RecipesView />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <RecipeForm />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Signup />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};
