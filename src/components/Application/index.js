import React from 'react';
import './index.css';
import Grid from "@material-ui/core/es/Grid/Grid";

class Application extends React.Component {
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
            <div style={{backgroundColor: "white"}}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="application-text">
                            Our LivePin has a variety of applications in the following domains
                        </div>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item xs={3}>
                            <div className="school-icon">
                            </div>
                            <div className="icon-text">
                                Schools and Colleges
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="logistics-icon">
                            </div>
                            <div className="icon-text">
                                Logistics
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="fleet-icon">
                            </div>
                            <div className="icon-text">
                                Fleet Management
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="taxi-dispatch-icon">
                            </div>
                            <div className="icon-text">
                                Taxi Dispatch
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    };

    render() {
        return this.renderDesktopView();
    };
}

export default Application;