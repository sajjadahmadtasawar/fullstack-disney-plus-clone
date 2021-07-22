import React from 'react';
import styled from 'styled-components';
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <video loop={true} autoPlay={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 60px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  img {
    display: block;
    height: 100%;
    padding: 10px;
    width: 95%;
    object-fit: cover;
    opacity: 1;
    object-fit: contain;
    box-sizing: border-box;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    opacity: 0;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
