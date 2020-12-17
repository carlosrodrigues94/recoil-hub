import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  min-height:100vh;
  width:100%;
  transition:all 0.3s;

`
export const CardUserData = styled.div`
  display:flex;
  width:100%;
  max-width:350px;
  border-radius:5px;
  box-shadow:0 0 5px rgba(0,0,0,0.05);
  align-items:center;justify-content:flex-start;
  padding:8px;
  background:rgba(0,0,0,0.3);
  flex-direction:column;
  height:auto;


  img {
    border-radius:50%;
    width:40%;
    min-width:100px;
    border:4px solid rgba(2,235,235,1);
    margin-bottom:32px;
  }

  strong {
    margin:16px 0 0 8px;
    color:#fff;
    align-self:flex-start;
  }

  a {
    text-decoration:none;
    color: rgba(2,235,235,1);
  }

  text-align: left;

`


