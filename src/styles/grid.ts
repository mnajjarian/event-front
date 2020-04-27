import styled from 'styled-components'

type Props = {
  xs?: string
  sm?: string
  md?: string
  lg?: string
}

function getWidthString(span: string): string {
  if (!span) return ''
  const width = (Number(span) / 12) * 100
  return `${width}%`
}
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`
const Row = styled.div`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`
const Column = styled.div`
  float: left;
  width: ${(props: Props): string => (props.xs ? getWidthString(props.xs) : '100%')};
  @media only screen and (min-width: 768px) {
    width: ${(props: Props): string => (props.sm ? getWidthString(props.sm) : '')};
  }
  @media only screen and (min-width: 992px) {
    width: ${(props: Props): string => (props.md ? getWidthString(props.md) : '')};
  }
  @media only screen and (min-width: 1200px) {
    width: ${(props: Props): string => (props.lg ? getWidthString(props.lg) : '')};
  }
`

export const GridStyle = {
  Row,
  Column,
  Container,
}
