import React from 'react';
import './index.css';
import {Timeline, TimelineEvent} from 'react-event-timeline';

import Stepper from "@material-ui/core/es/Stepper/Stepper";
import Step from "@material-ui/core/es/Step/Step";
import StepLabel from "@material-ui/core/es/StepLabel/StepLabel";
import Grid from "@material-ui/core/es/Grid/Grid";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
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
                    <Grid container xs={6} style={{padding: '3vw'}}>
                        <Grid item xs={12}>
                            <div className="process-main-text-left">
                                Give us an enquiry
                            </div>
                            <div className="process-sub-text-left">
                                Reach out to us to know more about our product
                            </div>
                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                    <Grid item xs={6} style={{padding: '3vw'}}>
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

    render() {
        return this.renderDesktopView();
    };
}

export default Process;