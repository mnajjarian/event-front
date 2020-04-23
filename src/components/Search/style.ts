import styled from 'styled-components'

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0.7em;
  background-color: #ddd;
  outline: ${({ outline }: { outline: string }): string => (outline ? outline : 'none')};
`
export const Styled = { Search }
