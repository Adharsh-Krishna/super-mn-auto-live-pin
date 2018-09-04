import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/es/Grid/Grid";
import CloseIcon from '@material-ui/icons/Close';

import './index.css';
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import Slide from "@material-ui/core/es/Slide/Slide";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

const Transition = (props) => {
    return <Slide direction="up" {...props} />;
}

class Package extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            width: props.width,
            open: false

        }
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };



    renderDesktopView = () => {
        return (
            <div>
                <Grid container style={{padding: "20px"}}>
                    <Grid item xs={12}>
                        <div className="main-text">
                            M N Auto brings you a wide variety of models to choose from
                        </div>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item xs={4} style={{padding: '5vw'}}>
                            <div style={{borderWidth: '10px', borderColor: '#3DBDFF', borderStyle: 'solid'}} onClick={this.handleClickOpen}>
                                <div>
                                    <CardMedia
                                        component="img"
                                        image="http://2.bp.blogspot.com/-dPhIDZ-7USY/UETz33rBt4I/AAAAAAAAApI/gegoZuHDjuE/s1600/Blue+abstract++PiCsHoliC.Blogspot.jpg"
                                        title="Model 1"
                                    />
                                    <div style={{backgroundColor: "#3DBDFF", color: "white"}}>
                                        <div className="card-heading">
                                            Model 1
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi u
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} style={{padding: '5vw'}}>
                            <div style={{borderWidth: '10px', borderColor: '#3DBDFF', borderStyle: 'solid'}}>

                                <div>
                                    <CardMedia
                                        component="img"
                                        image="http://2.bp.blogspot.com/-dPhIDZ-7USY/UETz33rBt4I/AAAAAAAAApI/gegoZuHDjuE/s1600/Blue+abstract++PiCsHoliC.Blogspot.jpg"
                                        title="Model 2"
                                    />
                                    <div style={{backgroundColor: "#3DBDFF", color: "white"}}>
                                        <div className="card-heading">
                                            Model 2
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi u
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} style={{padding: '5vw'}}>
                            <div style={{borderWidth: '10px', borderColor: '#3DBDFF', borderStyle: 'solid'}}>

                                <div>
                                    <CardMedia
                                        component="img"
                                        image="http://2.bp.blogspot.com/-dPhIDZ-7USY/UETz33rBt4I/AAAAAAAAApI/gegoZuHDjuE/s1600/Blue+abstract++PiCsHoliC.Blogspot.jpg"
                                        title="Model 3"
                                    />
                                    <div style={{backgroundColor: "#3DBDFF", color: "white"}}>
                                        <div className="card-heading">
                                            Model 3
                                        </div>
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi u
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Dialog
                        fullScreen
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Transition}>
                        <AppBar position="fixed">
                            <Toolbar>
                                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                    <CloseIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit">
                                    Sound
                                </Typography>
                                <Button color="inherit" onClick={this.handleClose}>
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                    </Dialog>
                </Grid>
            </div>
        )
    };

    render() {
        return this.renderDesktopView();
    };
}

export default Package;