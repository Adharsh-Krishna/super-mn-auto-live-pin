import NavBar from '../../components/NavBar';
import PrivacyPolicyContent from '../../components/Privacy';

import React from "react";
import Contact from "../../components/Contact";

class PrivacyPolicy extends React.Component {

    render() {
        return (<div>
            <NavBar/>
            <PrivacyPolicyContent/>
            <Contact/>
        </div>);
    }
}

export default PrivacyPolicy;