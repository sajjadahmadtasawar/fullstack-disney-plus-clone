import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
function Header() {
  const hisory = useHistory();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'ADD_USER',
          user: user,
        });
        hisory.push('/home');
      }
    });
  }, [user, dispatch, hisory]);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: 'ADD_USER',
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: 'REMOVE_USER',
          user: null,
        });
        hisory.push('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Nav>
      <Link to="/home">
        <Logo>
          <img src="/images/logo.svg" />
        </Logo>
      </Link>

      {!user ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <HeadersContainer>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
          </NavMenu>
          <NavMenu>
            <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
          </NavMenu>
          <NavMenu>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
          </NavMenu>
          <NavMenu>
            <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
          </NavMenu>
          <NavMenu>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
          </NavMenu>
          <NavMenu>
            <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
        </HeadersContainer>
      )}
      {user && (
        <SignOut>
          <Profile src={user?.photoURL}></Profile>
          <span onClick={handleSignOut}>LOG OUT</span>
        </SignOut>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  display: flex;
  padding: 0 36px;

  align-items: center;
  background-color: #090b13;
  z-index: 3;
  letter-spacing: 5px;
  font-size: 18px;
`;

const Logo = styled.a`
  width: 100px;
  img {
    display: flex;
    width: 45%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-top: 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    width: 25px;
    margin-bottom: 5px;
    margin-right: 3px;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 18px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
  }
  &:hover {
    span:before {
      visibility: visible;
      width: 100%;
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

const HeadersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Login = styled.a`
  border: 1px solid #f9f9f9;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 16px;
  color: #f9f9f9;
  margin-left: auto;
  letter-spacing: 1.5px;
  transition: all ease-out 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 60px;
  margin-left: auto;
  margin-top: 7px;
`;

const SignOut = styled.div`
  margin-left: auto;

  span {
    visibility: hidden;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    color: white;
    position: absolute;
    bottom: -43px;
    right: 10px;
    opacity: 0;
    transition: all ease-out 0.4s;
    padding: 10px;
    letter-spacing: 1.5px;

    &:hover {
      background-color: #f9f9f9;
      color: #000;
      cursor: pointer;
    }
  }
  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export default Header;
