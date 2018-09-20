import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Button from "@material-ui/core/es/Button/Button";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/es/Grid/Grid";
import Slide from "@material-ui/core/es/Slide/Slide";
import Divider from "@material-ui/core/es/Divider/Divider";
import Fade from "@material-ui/core/es/Fade/Fade";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import SwipeableDrawer from "@material-ui/core/es/SwipeableDrawer/SwipeableDrawer";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {withRouter} from 'react-router-dom'
// import {Router,Route,withRouter} from 'react-router';
// import {BrowserRouter as Router,withRouter, Switch, Route, Link} from 'react-router-dom';
// import Home from './home';
// import Link from "react-router-dom/es/Link";

// import { hashHistory } from 'react-router;'

//NavBar styling override
const navBarStyles = {
    backgroundColor: 'white',
    zDepthShadows: 'none',
    boxShadow: 'none',
    marginBottom: '30px',
    zIndex: 99
};

const menuIconStyles = {
    fontSize: '45px'
};

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ["About", "Products Packages", "Order Now", "FAQ", "Privacy Policy", "Contact Us"],
            height: props.height,
            width: props.width,
            checked: false,
            right: false,
            open: false
        };
    };

    // navigateToHome() {
    //     this.props.router.push("/about");
    // }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }


    handleTransition = () => {
        this.setState(state => ({checked: !state.checked}));
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    componentDidMount() {
        this.handleTransition();
        // this.navigateToHome = this.navigateToHome.bind(this);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    renderDesktopView = () => {
        const {checked} = this.state;

        return (
            <div>
                <AppBar position="fixed" style={navBarStyles}>
                    <Grid container>
                        <Grid item xs={1} className="nav-bar-logo-container">
                            <Fade in={checked} timeout={3000}>
                                <div className="nav-bar-logo-img"></div>
                            </Fade>
                        </Grid>
                        <Grid item xs={8} className="nav-bar-title-container">
                            <Slide direction="down"
                                   in={checked}
                                   timeout={2000}
                                   mountOnEnter unmountOnExit>
                                <div align="left" className="nav-bar-title-first">
                                    MN Auto <span className="nav-bar-title-second"> LivePin </span>
                                </div>
                            </Slide>
                        </Grid>
                        <Grid container xs={3}>
                            <Grid item xs={8}>
                                <div className="nav-bar-login-button-container">
                                    <Button><span className="nav-bar-login-button-text">Login</span></Button>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="nav-bar-menu-button-container">
                                    <IconButton aria-label="Menu">
                                        <MenuIcon style={menuIconStyles}
                                                  onClick={this.toggleDrawer('right', true)}/>
                                    </IconButton>
                                    <SwipeableDrawer
                                        anchor="right"
                                        open={this.state.right}
                                        onClose={this.toggleDrawer('right', false)}
                                        onOpen={this.toggleDrawer('right', true)}>
                                        <div
                                            align="center"
                                            tabIndex={0}
                                            role="button"
                                            onClick={this.toggleDrawer('right', false)}
                                            onKeyDown={this.toggleDrawer('right', false)}
                                            className="nav-bar-drawer">
                                            <div className="nav-bar-chevron-icon-container">
                                                <IconButton onClick={this.handleDrawerClose}>
                                                    <ChevronRightIcon/>
                                                </IconButton>
                                            </div>
                                            {this.renderMenuItems()}
                                            <Divider/>
                                        </div>
                                    </SwipeableDrawer>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                    <div>
                    </div>
                </AppBar>
            </div>
        )
    };

    renderMenuItems = () => {
        let menuItems = [];
        this.state.labels.forEach(el => {
            menuItems.push(<div className="nav-bar-drawer-item">
                {el}
            </div>);
        });
        return menuItems;
    };

    renderMobileView = () => {
        const {checked} = this.state;
        return (
            <div>
                <AppBar position="fixed" style={navBarStyles}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={2}>
                                <Fade in={true} timeout={3000}>
                                    <div className="nav-bar-logo-img">
                                    </div>
                                </Fade>
                            </Grid>
                            <Grid item xs={8} className="nav-bar-title-container">
                                <Slide direction="down" in={checked} timeout={1000} mountOnEnter unmountOnExit
                                       style={{position: 'absolute'}}>
                                    <div align="left" className="nav-bar-title-first">
                                        MN Auto <span className="nav-bar-title-second"> LivePin </span>
                                    </div>
                                </Slide>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton className="nav-bar-menu-button" aria-label="Menu">
                                    <MenuIcon onClick={this.handleDrawerOpen}/>
                                </IconButton>
                                <Drawer
                                    variant="persistent"
                                    open={this.state.open}
                                    anchor="top">
                                    <div className="nav-bar-chevron-icon-container">
                                        <IconButton onClick={this.handleDrawerClose}>
                                            <ChevronRightIcon/>
                                        </IconButton>
                                    </div>
                                    <Divider/>
                                    <div style={{backgroundColor: '#3DBDFF'}}>
                                        {this.renderMenuItems()}
                                    </div>
                                </Drawer>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    };

    choose(width) {
        if (width <= 480) {
            return this.renderMobileView();
        }
        else return this.renderDesktopView();
    }

    render() {
        return this.choose(this.state.width);
    };
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(NavBar);

// export default NavBar;