import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Button from "@material-ui/core/es/Button/Button";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/es/Grid/Grid";
import Slide from "@material-ui/core/es/Slide/Slide";
import Paper from "@material-ui/core/es/Paper/Paper";
import Switch from "@material-ui/core/es/Switch/Switch";
import Divider from "@material-ui/core/es/Divider/Divider";
import Fade from "@material-ui/core/es/Fade/Fade";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";


const navBarStyles = {backgroundColor: 'white'};

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            width: props.width,
            checked: false
        };
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }


    handleChange = () => {
        this.setState(state => ({checked: !state.checked}));
    };

    componentDidMount() {
        this.handleChange();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    renderDesktopView = () => {
        const {checked} = this.state;

        return (
            <div>
                <AppBar position="fixed" style={navBarStyles}>
                    <Grid container spacing={0} zeroMinWidth>
                        <Grid item xs={1} style={{padding: 5}}>
                            <Fade in={checked} timeout={2000}>
                                <div className="nav-bar-logo">
                                </div>
                            </Fade>
                        </Grid>
                        <Grid item xs={8} style={{padding: 5}}>
                            <Slide direction="down" in={checked} timeout={1000} mountOnEnter unmountOnExit
                                   style={{position: 'absolute'}}>
                                <div align="left" className="nav-bar-title-first">
                                    MN Auto <span className="nav-bar-title-second"> LivePin </span>
                                </div>
                            </Slide>
                        </Grid>
                        <Grid item xs={1}>
                            <Slide direction="right" in={checked} timeout={5000} mountOnEnter unmountOnExit
                                   style={{position: 'absolute'}}>
                                <div><img src="./car1.png" className="moving-car"></img></div>
                            </Slide>
                        </Grid>
                        <Grid item xs={1}>
                            <div>
                                <Button><span className="nav-bar-login-button">Login</span></Button>
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div>
                                <IconButton className="nav-bar-menu-button" aria-label="Menu">
                                    <MenuIcon style={{fontSize: "5vw"}}/>
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                    <div>
                    </div>
                </AppBar>
            </div>
        )
    };

    renderMobileView = () => {
        const {checked} = this.state;

        return (
            <div>
                <AppBar position="fixed" style={navBarStyles}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={8} style={{padding:10}}>
                                <Slide direction="down" in={checked} timeout={1000} mountOnEnter unmountOnExit
                                       style={{position: 'absolute'}}>
                                    <div align="left" className="nav-bar-title-first">
                                        MN Auto <span className="nav-bar-title-second"> LivePin </span>
                                    </div>
                                </Slide>
                            </Grid>
                            <Grid item xs={2}>
                                <Slide direction="right" in={checked} timeout={4000} mountOnEnter unmountOnExit
                                       style={{position: 'absolute'}}>
                                    <div><img src="./car1.png" className="moving-car"></img></div>
                                </Slide>
                            </Grid>

                            <Grid item xs={2}>
                                <IconButton className="nav-bar-menu-button" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
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


export default (NavBar);