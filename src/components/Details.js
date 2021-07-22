import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VideocamIcon from '@material-ui/icons/Videocam';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  console.log(movieDetails);

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovieDetails(doc.data());
        } else {
          alert('Movie Not Found');
        }
      })
      .catch((error) => alert('an unexpected error occured', error));
  }, [id]);

  return (
    <Container>
      <BackgroundImg>
        <img src={movieDetails.backgroundImg} />
      </BackgroundImg>
      <ContentMeta>
        <Controls>
          <Player>
            <p>PLAY</p> <PlayArrowIcon />{' '}
          </Player>
          <Trailer>
            <p>TRAILER</p> <VideocamIcon />
          </Trailer>
          <Plus>
            <AddIcon />
          </Plus>
          <GroupWatch>
            <GroupIcon />
          </GroupWatch>
        </Controls>
        <Subtitle>{movieDetails.subtitle}</Subtitle>
        <Description>{movieDetails.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  height: 99.7vh;
  width: 100%;
  overflow-x: hidden;
  position: absolute;
  overflow-y: hidden;
  bottom: 0;
  right: 0;
  left: 0;
`;

const BackgroundImg = styled.div`
  opacity: 0.8;
  z-index: -1;
  position: fixed;
  img {
    width: 100vw;
    height: 99.7vh;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 0 30px;
  height: 130vh;
  @media (max-width: 768px) {
    height: 160vh;
  }
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 20px;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 17px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
    border-color: rgb(198, 198, 198);
    cursor: pointer;
  }
`;

const Trailer = styled(Player)`
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: white;
    color: black;
  }
  color: white;
  p {
    margin-right: 3px;
  }
`;

const Plus = styled(Trailer)`
  border-radius: 50%;
  padding: 10px;
  border: 3px solid white;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const GroupWatch = styled(Plus)``;

const Subtitle = styled.div`
  position: absolute;
  top: 73vh;
  left: 2vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Description = styled(Subtitle)`
  margin-top: 1px;
  top: 77vh;
  width: 40vw;
  color: #f9f9f9;
  font-size: 22px;
  line-height: 1.3;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
`;

export default Details;
