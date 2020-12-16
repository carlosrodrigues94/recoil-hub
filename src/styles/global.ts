import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    padding:0;
    box-sizing:border-box;
    margin:0;
    -webkit-font-smoothing:antialiased;

  }

  body,html,#root {
    height:100%;
    font-family:sans-serif;

  }

  #root {
    background:rgba(0,0,0,0.8);
  }


`


