import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class CarouselPage extends React.Component {
    render(){
        return(
            <div style={{paddingTop:'6vw'}}>
                <Carousel showThumbs={false} autoPlay interval={4000} showIndicators={false}
                          infiniteLoop>
                    <div>
                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"/>
                    </div>
                    <div>
                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" />
                    </div>
                    <div>
                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarouselPage;