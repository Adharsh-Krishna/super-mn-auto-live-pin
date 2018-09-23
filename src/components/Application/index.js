import React from 'react';
import './index.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import Fade from "@material-ui/core/es/Fade/Fade";
import TrackVisibility from 'react-on-screen';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            width: props.width,
            activeStep: 0,
            checked: false
        }
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    componentDidMount() {
        this.handleChange();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    };

    handleChange = () => {
        this.setState(state => ({checked: !state.checked}));
    };

    renderDesktopView = () => {
        const {checked} = this.state;
        return (
            <div className="hero-bkg-animated">
                <Grid container>
                    <Grid item xs={12}>
                        <div className="application-text">
                            Our LivePin has a variety of applications in the following domains
                        </div>
                    </Grid>


                    <Grid container xs={12} className="application-container">
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={2}>
                            <TrackVisibility once>
                                {({isVisible}) => isVisible &&
                                    <Fade in={checked} timeout={3000}>
                                        <div>
                                            <div className="school-icon">
                                            </div>
                                            <div className="icon-text">
                                                Schools and Colleges
                                            </div>
                                        </div>
                                    </Fade>
                                }
                            </TrackVisibility>
                        </Grid>
                        <Grid item xs={2}>
                            <TrackVisibility once>
                                {({isVisible}) => isVisible &&
                                    <Fade in={checked} timeout={3000}>
                                        <div>
                                            <div className="logistics-icon">
                                            </div>
                                            <div className="icon-text">
                                                Logistics
                                            </div>
                                        </div>
                                    </Fade>
                                }
                            </TrackVisibility>
                        </Grid>
                        <Grid item xs={2}>
                            <TrackVisibility once>
                                {({isVisible}) => isVisible &&
                                    <Fade in={checked} timeout={3000}>
                                        <div>
                                            <div className="fleet-icon">
                                            </div>
                                            <div className="icon-text">
                                                Fleet Management
                                            </div>
                                        </div>
                                    </Fade>
                                }
                            </TrackVisibility>
                        </Grid>
                        <Grid item xs={2}>
                            <TrackVisibility once>
                                {({isVisible}) => isVisible &&
                                    <Fade in={checked} timeout={3000}>
                                        <div>
                                            <div className="taxi-dispatch-icon">
                                            </div>
                                            <div className="icon-text">
                                                Taxi Dispatch
                                            </div>
                                        </div>
                                    </Fade>
                                }
                            </TrackVisibility>

                        </Grid>
                        <Grid item xs={2}>

                        </Grid>
                    </Grid>


                </Grid>
            </div>
        )
    };


    renderMobileView = () => {
        const {checked} = this.state;
        return (<div className="hero-bkg-animated">
            <Grid container>
                <Grid item xs={12}>
                    <div className="application-text">
                        Our LivePin has a variety of applications in the following domains
                    </div>
                </Grid>


                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <TrackVisibility once>
                            {({isVisible}) => isVisible &&
                                <Fade in={checked} timeout={3000}>
                                    <div>
                                        <div className="school-icon">
                                        </div>
                                        <div className="icon-text">
                                            Schools and Colleges
                                        </div>
                                    </div>
                                </Fade>
                            }
                        </TrackVisibility>
                    </Grid>
                    <Grid item xs={12}>
                        <TrackVisibility once>
                            {({isVisible}) => isVisible &&
                                <Fade in={checked} timeout={3000}>
                                    <div>
                                        <div className="logistics-icon">
                                        </div>
                                        <div className="icon-text">
                                            Logistics
                                        </div>
                                    </div>
                                </Fade>
                            }
                        </TrackVisibility>
                    </Grid>
                    <Grid item xs={12}>
                        <TrackVisibility once>
                            {({isVisible}) => isVisible &&
                                <Fade in={checked} timeout={3000}>
                                    <div>
                                        <div className="fleet-icon">
                                        </div>
                                        <div className="icon-text">
                                            Fleet Management
                                        </div>
                                    </div>
                                </Fade>
                            }
                        </TrackVisibility>
                    </Grid>
                    <Grid item xs={12}>
                        <TrackVisibility once>
                            {({isVisible}) => isVisible &&
                                <Fade in={checked} timeout={3000}>
                                    <div>
                                        <div className="taxi-dispatch-icon">
                                        </div>
                                        <div className="icon-text">
                                            Taxi Dispatch
                                        </div>
                                    </div>
                                </Fade>
                            }
                        </TrackVisibility>

                    </Grid>
                </Grid>


            </Grid>
        </div>)
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

export default Application;