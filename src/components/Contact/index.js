import React from 'react';
import './index.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import Divider from "@material-ui/core/es/Divider/Divider";

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

    renderDesktopView = () => {

        return (
            <div style={{backgroundColor: "#3DBDFF"}}>
                <Grid container style={{padding:'2vw'}}>
                    <Grid container item={12}>
                        <Grid item xs={6}>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="center" className="address-text">
                                M.N. Auto Products Pvt Ltd<br/>
                                5/644C, Thadagam Road<br/>
                                Kanuvai PO<br/>
                                Coimbatore
                            </div>
                            <br/>
                            <br/>
                            <div className="address-text">
                                email :sales@supermnauto.com
                            </div>
                            <br/>
                            <br/>
                            <div className="address-text">
                                Phone: 95974 20222
                            </div>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container xs={12}>
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