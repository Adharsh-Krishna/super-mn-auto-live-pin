import NavBar from '../../components/NavBar';
import Question from '../../components/Questions';

import React from "react";
import Contact from "../../components/Contact";

class Faq extends React.Component {

    render() {
        return (<div>
            <NavBar/>
            <Question/>
            <Contact/>
        </div>);
    }
}

export default Faq;