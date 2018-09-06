import React from 'react';
import './index.css';
import {Timeline, TimelineEvent} from 'react-event-timeline';

import Stepper from "@material-ui/core/es/Stepper/Stepper";
import Step from "@material-ui/core/es/Step/Step";
import StepLabel from "@material-ui/core/es/StepLabel/StepLabel";
import Grid from "@material-ui/core/es/Grid/Grid";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import Typography from "@material-ui/core/es/Typography/Typography";

class Process extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            width: props.width,
            activeStep: 0
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

    renderDesktopView = () => {
        return (
            <div style={{backgroundColor: "#3DBDFF"}}>
                <Grid container>

                    <Grid container xs={8} style={{padding: '3vw'}}>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                iconStyle={{background: 'white', color: '#fff'}} position="left"
                                position="left"

                            >
                                <Grid container>
                                    <Grid iem xs={12}>
                                        <div className="process-header">
                                            Product Enquiry
                                        </div>
                                    </Grid>
                                    <Grid iem xs={12}>
                                        <div className="process-description" style={{marginTop: 0}}>
                                            Give us an enquiry
                                        </div>
                                    </Grid>
                                </Grid>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{background: 'white', color: '#fff'}}
                                position="left"
                            >
                                <Grid container>
                                    <Grid iem xs={12}>
                                        <div className="process-header">
                                            Product Installation
                                        </div>
                                    </Grid>
                                    <Grid iem xs={12}>
                                        <div className="process-description" style={{marginTop: 0}}>
                                            Install the product
                                        </div>
                                    </Grid>
                                </Grid>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{background: 'white', color: '#fff'}}
                                position="left"
                            >
                                <Grid container>
                                    <Grid iem xs={12}>
                                        <div className="process-header">
                                            KYC Verification
                                        </div>
                                    </Grid>
                                    <Grid iem xs={12}>
                                        <div className="process-description" style={{marginTop: 0}}>
                                            Fulfill the necessary KYC information
                                        </div>
                                    </Grid>
                                </Grid>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{background: 'white', color: '#fff'}}
                                position="left"
                            >
                                <Grid container>
                                    <Grid iem xs={12}>
                                        <div className="process-header">
                                            Use the Product
                                        </div>
                                    </Grid>
                                    <Grid iem xs={12}>
                                        <div className="process-description" style={{marginTop: 0}}>
                                            Track your vehicles on the go
                                        </div>
                                    </Grid>
                                </Grid>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Grid>
                    <Grid item xs={4} style={{padding: '3vw'}}>
                        <div className="process-main-text-right">
                            Wondering how to get started?
                        </div>
                        <div className="process-sub-text-right">
                            Give us an enquiry and start tracking your vehicles seamlessly
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    };

    renderMobileView = () => {
        return (
            <div style={{backgroundColor: "#3DBDFF"}}>
                <Grid container>

                    <Grid item xs={12} style={{padding: '3vw'}}>
                        <div className="process-main-text-right">
                            Wondering how to get started?
                        </div>
                        <div className="process-sub-text-right">
                            Give us an enquiry and start tracking your vehicles seamlessly
                        </div>
                    </Grid>
                    <Grid container xs={12} style={{padding: '3vw'}}>
                        <Grid container xs={12} style={{marginBottom:'2vw'}}>
                            <Grid item xs={12}>
                                <div className="process-header">
                                    Product Enquiry
                                </div>
                                <div className="process-description" style={{marginTop: 0}}>
                                    Give us an enquiry
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} style={{marginBottom:'2vw'}}>
                            <Grid item xs={12}>
                                <div className="process-header">
                                    Product Installation
                                </div>
                                <div className="process-description" style={{marginTop: 0}}>
                                    Install the Product
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} style={{marginBottom:'2vw'}}>
                            <Grid item xs={12}>
                                <div className="process-header">
                                    KYC Verification
                                </div>
                                <div className="process-description" style={{marginTop: 0}}>
                                    Fulfill the KYC required information
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} style={{marginBottom:'2vw'}}>
                            <Grid item xs={12}>
                                <div className="process-header">
                                    Use the Product
                                </div>
                                <div className="process-description" style={{marginTop: 0}}>
                                    Start tracking your vehicles at ease
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
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

    // render() {
    //     return this.renderDesktopView();
    // };
}

export default Process;
