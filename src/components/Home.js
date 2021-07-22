import React, { useEffect } from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trendings from './Trending';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import {
  newDisneyAction,
  originalsAction,
  recommendedAction,
  trendingAction,
} from '../actions';
function Home() {
  const [{ user, recommended, newDisney, originals, trending }, dispatch] =
    useStateValue();

  let dbRecommended = [];
  let dbNewDisney = [];
  let dbOriginals = [];
  let dbTrending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommended':
            dbRecommended = [...dbRecommended, { id: doc.id, ...doc.data() }];
            break;
          case 'newDisney':
            dbNewDisney = [...dbNewDisney, { id: doc.id, ...doc.data() }];
            break;
          case 'originals':
            dbOriginals = [...dbOriginals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            dbTrending = [...dbTrending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(recommendedAction(recommended, dbRecommended));
      dispatch(newDisneyAction(newDisney, dbNewDisney));
      dispatch(originalsAction(originals, dbOriginals));
      dispatch(trendingAction(trending, dbTrending));
    });
  }, [user]);

  return (
    <Container>
      <Carousel />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  top: 40px;
  display: block;
  min-height: 86vh;
  overflow-x: hidden;
  padding: 30px;
  background: url('/images/home-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Home;
