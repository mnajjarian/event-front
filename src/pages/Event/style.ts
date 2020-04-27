import styled from 'styled-components'

const Card = styled.article`
  height: 100%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  padding: 3em 1em;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`
const Summary = styled.p`
  line-height: 1.5em;
  font-size: 1.2em;
  font-weight: 400;
`
const More = styled.a``

const Date = styled.div`
  display: flex;
  flex-direction: column;
`
const DateGroup = styled.div`
  padding-bottom: 0.5em;
`
const Address = styled.address`
  padding: 1em 0;
`

const Label = styled.span`
  padding-right: 0.5em;
  text-transform: capitalize;
`

const Image = styled.img`
  width: 100%;
`

const Info = styled.div`
  padding: 1em;
`

const Title = styled.h2`
  text-transform: capitalize;
  margin-top: 0;
`

const Time = styled.time``
const Description = styled.div`
  font-size: 1.2em;
  padding: 4em 0;
  letter-spacing: 0.25px;
  line-height: 1.8em;
  word-break: break-word;
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`
const Tag = styled.li`
  text-transform: capitalize;
  margin: 0.25em;
  background: #ccc;
  border-radius: 2em;
  max-width: fit-content;
  cursor: pointer;
  :hover {
    background: #aaa;
  }
`
const TagLink = styled.a`
  padding: 0.5em 0.8em;
`
export const Styled = {
  Card,
  Image,
  Content,
  Summary,
  Label,
  Time,
  More,
  Description,
  Date,
  Address,
  DateGroup,
  Info,
  Title,
  TagList,
  Tag,
  TagLink,
}
