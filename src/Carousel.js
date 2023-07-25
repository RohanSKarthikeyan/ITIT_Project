import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from './Images/Img1.jpg'
import Img2 from './Images/Img2.png'
import Img3 from './Images/Img3.png'

class CarouselComp extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Img1} />
                </div>
                <div>
                    <img src={Img2} />
                </div>
                <div>
                    <img src={Img3}  />
                </div>
            </Carousel>
        );
    }
}

export default CarouselComp;