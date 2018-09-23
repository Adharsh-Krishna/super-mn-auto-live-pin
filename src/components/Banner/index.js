import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

//https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg
//https://image.freepik.com/free-photo/fresh-succulent-plant-in-white-pot-on-white-background_1372-560.jpg
//https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/itCjTBE/blue-abstract-moving-flowing-waves-on-white-background-blurred-smooth-design-video-animation-ultra-hd-4k-3840x2160_rffdhgnp_thumbnail-full05.png
//https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg
class CarouselPage extends React.Component {
    render(){
        return(
            <div>
                <Carousel showThumbs={false} autoPlay interval={4000} showIndicators={false}
                          infiniteLoop>
                    <div>
                        <img src="/maps.png"/>
                    </div>
                    {/*<div>*/}
                        {/*<img src="https://ak8.picdn.net/shutterstock/videos/32813758/thumb/12.jpg" />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" />*/}
                    {/*</div>*/}
                </Carousel>
            </div>
        );
    }
}

export default CarouselPage;