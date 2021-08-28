import styled from 'styled-components';

export const VideoContainer = styled.div`
  width: 100%;
  padding: 15% 0 10%;
  display: flex;
  justify-content: space-evenly;
  align-item: center;
  flex-wrap: wrap;
  position: relative;
`
export const Modal = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  top:0;
  left:0;
  background-color: rgba(132,132,132,.5);
`

export const ModalVideo = styled.div`
  width: 95%;
  height: 75%;
  padding: 8px;
  border-radius: 8px;
  border:1px solid #bfbcbc;
  box-shadow: 10px 0 10px rgba(0,0,0,.5),
              0 10px 10px rgba(225,225,225,.5),
              10px 0 20px rgba(0,0,0,.5),
              0 10px 20px rgba(225,225,225,.5),
              inset 10px 0 10px rgba(0,0,0,.5),
              inset 0 10px 10px rgba(225,225,225,.5),
              inset 10px 0 20px rgba(0,0,0,.5),
              inset 0 10px 20px rgba(225,225,225,.5);
  box-sizing: border-box;
`