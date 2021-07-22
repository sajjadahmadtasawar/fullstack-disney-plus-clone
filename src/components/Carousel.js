import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Img_Carousel {...settings}>
      <Wraper>
        <a>
          <img src="../images/slider-badag.jpg" />
        </a>
      </Wraper>
      <Wraper>
        <a>
          <img src="../images/slider-badging.jpg" />
        </a>
      </Wraper>
      <Wraper>
        <a>
          <img src="../images/slider-scale.jpg" />
        </a>
      </Wraper>
      <Wraper>
        <a>
          <img src="../images/slider-scales.jpg" />
        </a>
      </Wraper>
    </Img_Carousel>
  );
}

const Img_Carousel = styled(Slider)`
  margin-top: 20px;
  object-fit: contain;
  & > button {
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
  }
  &:hover {
    & > button {
      opacity: 1;
    }
    cursor: pointer;
  }

  ul li button {
    &:before {
      color: white;
      font-size: 10px;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
`;

const Wraper = styled.div`
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.8s;
  position: relative;

  a {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    object-fit: contain;
  }

  &:hover {
    z-index: 3;
    transform: scale(1.1);
  }
`;

export default Carousel;
