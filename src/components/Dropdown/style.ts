import styled from 'styled-components'

const Dropdown = styled.div`
  position: absolute;
  background: #fff;
  padding-top: 1em;
  max-height: 300px;
  z-index: 99;
  overflow: scroll;
`
const Tab = styled.a`
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  padding: 0.5em;
  margin-bottom: 0.5em;
  color: #aaa;
  cursor: pointer;
  :hover {
    background: #ccc;
  }
`
export const Styled = { Tab, Dropdown }
