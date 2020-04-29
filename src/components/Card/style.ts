import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 100%;
  height: 270px;
  font-size: 0.9em;
  line-height: 1.5em;
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  overflow: visible;
  padding: 0.5em;
`
const Card = styled.div`
  height: 100%;
  box-shadow: 0 1em 4em -1em rgba(46, 55, 77, 0.1);
  background-color: transparent;
  display: flex;
  background: #fff;
  transition: box-shadow 0.24s cubic-bezier(0.4, 0, 0.3, 1), background-color 0.24s cubic-bezier(0.4, 0, 0.3, 1);
  :hover {
    box-shadow: 0 1em 4em -1em rgba(46, 55, 77, 0.8);
  }
`
const CardContent = styled.article`
  overflow: visible;
  border-radius: 0.25em;
  width: 100%;
`
const CardMedia = styled.aside`
  position: relative;
  overflow: visible;
  flex: 0 0 auto;
`
const Link = styled.a`
  display: block;
  outline: none;
  width: 100%;
`
const ImageHolder = styled.div`
  background-color: rgb(57, 62, 66);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
const CardImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 50%;
  border-radius: 0 !important;
  transition: none;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #eeedf2;
    border-radius: 0 !important;
    transition: border-radius 0.24s cubic-bezier(0.4, 0, 0.3, 1), border 0.24s cubic-bezier(0.4, 0, 0.3, 1);
  }
`
const Image = styled.img`
  display: block;
  border: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  transform: translateX(-50%) translateY(-50%);
`
const CardBody = styled.div`
  position: relative;
  overflow: hidden;
  word-break: break-word;
  padding: 0.5em;
  text-rendering: optimizeLegibility;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: start;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
`
const CardBodyContent = styled.div`
  flex: 1 1 auto;
  -webkit-box-flex: 1;
  word-break: break-word;
`
const CardTime = styled.time`
  font-size: 0.875em;
  line-height: 1.25em;
  font-weight: 600;
  color: #d1410c;
  padding-bottom: 0.25em;
`

const CardTitle = styled.h3`
  margin: 0;
  padding: 0.25em 0;
  color: #39364f;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
export const Styled = {
  CardWrapper,
  Card,
  CardContent,
  CardMedia,
  CardImage,
  CardTime,
  CardTitle,
  Link,
  Image,
  ImageHolder,
  CardBody,
  CardBodyContent,
}
