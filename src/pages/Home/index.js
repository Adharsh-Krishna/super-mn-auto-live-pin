import NavBar from '../../components/NavBar';
import CarouselPage from '../../components/Banner';
import About from '../../components/About';
import Package from '../../components/Package';
import Process from '../../components/Process';
import Contact from '../../components/Contact';
import Application from '../../components/Application';

import React from "react";

class Home extends React.Component {

    render() {
        return (<div>
            <NavBar/>
            <CarouselPage/>
            <About/>
            <Package/>
            <Process/>
            <Application/>
            <Contact/>
        </div>);
    }
}

export default Home;