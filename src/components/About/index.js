import React from 'react';
import {Parallax} from 'react-parallax';
import Typography from "@material-ui/core/es/Typography/Typography";
import './index.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const image1 = "http://www.landw.co.za/wp-content/uploads/2017/04/parallax.jpg";
// const image1 = "https://themes.muffingroup.com/be/parallax/wp-content/uploads/2015/01/home-parallax-section-works.jpg";
const image2 = "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headingVariant: "display4",
            height: props.height,
            width: props.width,
            headingHeight: 150
        }
    }

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


    renderDesktopView= () =>{
        return (<div className="banner" style={{padding:"2vw",backgroundColor:"#3DBDFF"}}>
            <Grid container>
                <Grid container xs={6}>
                    <Grid item xs={12}>
                        <div className="banner-main-text-lefty">
                            Realtime location
                            information at your fingertips
                        </div>
                        <div className="banner-sub-text-lefty">
                            always stay connected to your car with MN Auto LivePin smart web and mobile applications.
                        </div>
                    </Grid>
                    <Grid container xs={12} style={{margin:"0vw"}}>
                        <Grid item xs={4}>
                            <div className="real-time-tracking-icon">
                            </div>
                            <div className="feature-texty">
                                Real Time Tracking
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="route-deviation-alert-icon">
                            </div>
                            <div className="feature-texty">
                                Route Deviation Alert
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="high-speed-alert-icon">
                            </div>
                            <div className="feature-texty">
                                Over speed Alerts
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} style={{margin:"0vw"}}>
                        <Grid item xs={4}>
                            <div className="multi-vehicle-tracking-icon">
                            </div>
                            <div className="feature-texty">
                                Multi Vehicle tracking
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="engine-immobiliser-icon">
                            </div>
                            <div className="feature-texty">
                                Engine immobiliser
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="theft-alert-icon">
                            </div>
                            <div className="feature-texty">
                                Theft Alerts
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <div className="iphone-img">

                    </div>
                </Grid>
            </Grid>
        </div>)
    };

    renderMobileView = () =>{
        return (<div className="banner" style={{padding:"3vw",backgroundColor:"#3DBDFF"}}>
            <Grid container>
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <div className="banner-main-text-lefty">
                            Realtime location
                            information at your fingertips
                        </div>
                        <div className="banner-sub-text-lefty">
                            always stay connected to your car with matchpointGPS smart web and mobile applications.
                        </div>
                    </Grid>
                    <Grid container xs={12} className="feature-container">
                        <Grid item xs={4}>
                            <div className="real-time-tracking-icon">
                            </div>
                            <div className="feature-texty">
                                Real Time Tracking
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="route-deviation-alert-icon">
                            </div>
                            <div className="feature-texty">
                                Route Deviation Alert
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="high-speed-alert-icon">
                            </div>
                            <div className="feature-texty">
                                Over speed Alerts
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} style={{margin:"2vw"}}>
                        <Grid item xs={4}>
                            <div className="multi-vehicle-tracking-icon">
                            </div>
                            <div className="feature-texty">
                                Multi Vehicle tracking
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="engine-immobiliser-icon">
                            </div>
                            <div className="feature-texty">
                                Engine immobiliser
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="theft-alert-icon">
                            </div>
                            <div className="feature-texty">
                                Theft Alerts
                            </div>
                        </Grid>
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
    }
}

export default About;