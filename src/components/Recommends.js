import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
function Recommends() {
  const [{ recommended }, dispatch] = useStateValue();

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {recommended?.map((movie, key) => (
          <Wrapper key={key}>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.cardImg} />
            </Link>
          </Wrapper>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 75px;
`;
const Content = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  object-fit: contain;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;

  img {
    transition: all 0.5s;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export default Recommends;
