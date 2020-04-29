import styled from 'styled-components'

const Dropdown = styled.div`
  position: absolute;
  top: 3.2em;
  right: 0;
  left: 0;
  background: #fff;
  padding-top: 1em;
  max-height: 300px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 0.25em;
  overflow: scroll;
  z-index: 99;
`
const Tab = styled.a`
  display: block;
  padding: 0.5em;
  margin-bottom: 0.5em;
  color: #aaa;
  cursor: pointer;
  :hover {
    background: #ccc;
  }
`
export const Styled = { Tab, Dropdown }
