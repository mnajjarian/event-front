import styled from 'styled-components'

const SearchField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0.7em;
  background-color: #ddd;
  outline: ${({ outline }: { outline: string }): string => (outline ? outline : 'none')};
`
const Search = styled.div``
export const Styled = { Search, SearchField }
