import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box
}
html {
    scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  background: #ffffff;
}
p {
    margin-top: 0;
}
a {
    text-decoration: none;
    color: #3659e3;
    background-color: transparent;
}
 h1, h1, h2, h3, h4, h5 {
   text-transform: capitalize;
 }

/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
`
