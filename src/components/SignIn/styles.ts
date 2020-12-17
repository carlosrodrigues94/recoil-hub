import styled from "styled-components";


export const Container  =styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100vh;
  width:100%;
  transition:all 0.3s;

  h4{
    margin:0 0 16px 0;
    color:#fff;
    text-align:center;
  }

`

export const Form = styled.form`
  display:flex;
  height:450px;
  width:100%;
  max-width:350px;
  border-radius:5px;
  box-shadow:0 0 5px rgba(0,0,0,0.05);
  align-items:center;justify-content:flex-start;
  padding:8px;
  background:rgba(0,0,0,0.3);
  flex-direction:column;

  >img {
    max-width:50%;
    border-radius:5px;
    margin:16px 0;
  }

  input {
    height:60px;
    width:80%;
    border-radius:5px;
    box-shadow:0 0 5px rgba(0,0,0,0.02);
    background:none;
    border:0;
    margin:8px 0;
    border:2px solid rgba(100,100,100,1);
    padding:0 0 0 8px;
    color:#fff;
    font-size:16px;
    background:rgba(0,0,0,0.2);
  }



  button {
    height:45px;
    width:65%;
    border-radius:5px;
    box-shadow:0 0 5px rgba(0,0,0,0.02);
    background:rgba(2,235,235,0.8);
    border:0;
    color:#fff;
    font-weight:bold;
    font-size:16px;
    margin:40px 0 0 0;

    &:hover {
    background:rgba(2,235,235,0.6);
    cursor: pointer;
    }

  }
`
