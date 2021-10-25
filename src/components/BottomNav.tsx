import React, {useState} from 'react';
import PortfolioIcon from '../assets/PortfolioIcon';
import SearchIcon from '../assets/SearchIcon';
import UserIcon from '../assets/UserIcon';
import HomeIcon from '../assets/HomeIcon';
import styled from 'styled-components';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 26px;
`;

const BottomNav = () => {
  const [activeIcon, setActiveIcon] = useState<string>('home');
  const isWritingPost = useSelector<RootState>(
    state => state.post.isWritingPost,
  );
  return (
    <>
      {!isWritingPost && (
        <NavContainer>
          <Link
            to={'/'}
            onClick={() => {
              console.log('return to homepage');
              setActiveIcon('home');
            }}>
            <HomeIcon activeIcon={activeIcon} />
          </Link>
          <Link
            to={'/portfolio'}
            onClick={() => {
              console.log('return to portfolio');
              setActiveIcon('portfolio');
            }}>
            <PortfolioIcon activeIcon={activeIcon} />
          </Link>
          <Link
            to={'/search'}
            onClick={() => {
              console.log('return to search');
              setActiveIcon('search');
            }}>
            <SearchIcon activeIcon={activeIcon} />
          </Link>
          <Link
            to={'/profile/12213'}
            onClick={() => {
              console.log('return to user');
              setActiveIcon('profile');
            }}>
            <UserIcon activeIcon={activeIcon} />
          </Link>
        </NavContainer>
      )}
    </>
  );
};

export default BottomNav;
