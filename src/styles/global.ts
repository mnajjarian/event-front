import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box
}

p {
    margin-top: 0;
}
a {
    text-decoration: none;
    color: #3659e3;
    background-color: transparent;
}
`
