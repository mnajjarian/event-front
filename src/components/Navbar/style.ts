import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  padding: 1em;
  background: #fff;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  z-index: 99;
`

const NavBrand = styled.a`
  color: rebeccapurple;
  font-size: 1.5em;
  font-weight: 700;
`
const NavList = styled.ul``

const NavItem = styled.li``

const NavLink = styled.a``

const NavSearch = styled.div`
  width: 100%;
  padding: 1em;
`
const LangSwitch = styled.div``
export const Styled = { Nav, NavBrand, NavList, NavItem, NavLink, NavSearch, LangSwitch }
