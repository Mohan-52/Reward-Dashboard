import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  background: #282c34;
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &.active {
    border-bottom: 2px solid #61dafb;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 1rem;
  background: #f5f5f5;
`;

const Layout = () => {
  return (
    <Container>
      <Nav>
        <NavList>
          <NavItem>
            <StyledNavLink to="/users">Users</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/activities">Activities</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/rewards">Rewards</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/admin">Admin</StyledNavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default Layout;
