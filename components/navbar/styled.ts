import styled, { css } from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 70px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const LogoText = styled.h3`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.015em;
  margin-left: 13px;
`;

export const MenuContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
`;

export const MenuItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 80px;
  }
`;

type MenuItemLinkProps = {
  isActive?: boolean;
};

const menuItemActiveStyle = `
  color: #459d8c;
  border-bottom: 7px solid #459d8c;
`;

export const MenuItemLink = styled.a<MenuItemLinkProps>`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #808080;
  height: 100%;
  display: flex;
  align-items: center;
  transition: color 0.3s ease, border-color 0.3s ease;
  border-bottom: 7px solid transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      ${menuItemActiveStyle}
    `}

  &:hover {
    ${menuItemActiveStyle}
  }
`;

export const UserDropDown = styled.div``;
