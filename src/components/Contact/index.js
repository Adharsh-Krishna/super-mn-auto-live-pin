import React from 'react';
import './index.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import Divider from "@material-ui/core/es/Divider/Divider";
import GoogleMapReact from 'google-map-react';

class Contact extends React.Component {
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

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    renderDesktopView = () => {

        return (
            <div style={{backgroundColor: "#3DBDFF"}}>
                <Grid container>
                    <Grid container item={12} style={{padding: '2vw'}}>
                        <Grid container xs={4}>
                            <Grid item xs={12}>
                                <div className="main-text-right">
                                    Reach out to us<br/>
                                    We are happy to help
                                </div>
                            </Grid>
                            <Grid container xs={12} style={{marginTop: '3vw'}}>
                                <Grid item xs={6}>
                                    <div className="play-store-png"></div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="app-store-png"></div>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid container xs={4}>
                            <Grid container xs={12}>
                                <Grid item xs={4}>
                                    <div className="phone-icon">
                                    </div>
                                </Grid>
                                <Grid item xs={8}>
                                    <div align="left" className="phone-text">
                                        95974 20222
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={4}>
                                    <div className="email-icon">
                                    </div>
                                </Grid>
                                <Grid item xs={8}>
                                    <div align="left" className="phone-text">
                                    sales@supermnauto.com
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container xs={4}>

                            <Grid item xs={12}>
                                <div className="address-text">
                                    M.N. Auto Products Pvt Ltd
                                </div>
                                <div className="address-text">
                                    5/644C, Thadagam Road,
                                </div>
                                <div className="address-text">
                                    Kanuvai PO
                                </div>
                                <div className="address-text">
                                    Coimbatore
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container xs={12} style={{padding: '1vw', backgroundColor: '#2196F3', color: 'white'}}>
                        <div align="right" className="footer-text">
                            This website was designed by DaVinci Design Studios
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

export default Contact;