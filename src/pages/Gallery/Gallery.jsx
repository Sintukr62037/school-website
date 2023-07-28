import React from 'react';
import {Carousel} from 'react-bootstrap'
import Ending from '../../components/Ending'
import '../page-styles.scss';
import './Gallery.scss';
import Top from '../Top'

const Gallery = () => {
  return (
    <div className="gallerybg">
      <Top title="Gallery" />
    <div className="page-styles Gallery">
      <div className="head">Preschool Gallery</div>
    <Carousel className="gallery-section">
   <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 image"
      src={require('../../assets/images/kids.jpg')}
      alt="First slide"
    />
    <Carousel.Caption >
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 image"
      src={require('../../assets/images/girl.jpg')}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src={require('../../assets/images/bg1.png')}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src={require('../../assets/images/bee.png')}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item><Carousel.Item>
    <img
      className="d-block w-100 image"
      src={require('../../assets/images/tom.png')}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
    </div>
    <Ending />
    </div>
  );
};

export default Gallery;
