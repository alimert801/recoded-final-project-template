import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { opaqueType } from "@babel/types";
import { fontFamily } from "@material-ui/system";
import FormNBC from "../Modal/modal";
import Link from "@material-ui/core/Link";
import stlyles from "./style.module.css";
import { Backpack } from "react-kawaii";
import Cat from "react-kawaii/lib/es/components/cat/Cat";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: 25,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          opacity: "0.998",
          backgroundColor: "#565656",
          borderColor: "#565656"
        }}
      >
        <Toolbar>
          <Cat size={90} mood="blissful" color="#8f919b" />
          <Typography
            style={{ paddingLeft: 10, textAlign: "left" }}
            className={classes.title}
            variant="h4"
            noWrap
          >
            GitCamp
          </Typography>
          <div className="menu-links">
            <ul>
              <li>
                <a href={require("../../Upcomings/index")}>Up Comings</a>
              </li>
              <li>
                <a >Categories</a>
              </li>
              <li>
                <a href={require("../../WhatIsBootcamp/index")}>
                  What is Bootcamp?
                </a>
              </li>
              <li>
                <a href={require("../../Map/index")}>Location</a>
              </li>
              <li>
                <a href={require("../../Footer/index")}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="sectionLinks" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div>
            <FormNBC />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
}
