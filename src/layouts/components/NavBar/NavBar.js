import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from 'components/List';
import ListItem from 'components/ListItem';
import { slideIn, slideOut, show, hide } from 'utils/style-utils';

const StyledList = styled(List)`
  padding: 0 1em;
  margin: 0 1.5rem;

  animation: ${props => (props.show ? slideIn : slideOut)} 1s;
  ${props => (props.show ? show : hide)};
`;

const StyledListItem = styled(ListItem)`
  margin-right: 2.25rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
`;

const NavBar = props => (
  <nav>
    <StyledList show={props.show}>
      <StyledListItem>
        <StyledNavLink exact to="/profile" >profile</StyledNavLink>
      </StyledListItem>
      <StyledListItem>
        <StyledNavLink to="/playground" >playground</StyledNavLink>
      </StyledListItem>
    </StyledList>
  </nav>
);

NavBar.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default NavBar;
