import styled from 'styled-components';

export const VideoContainer = styled.div`
  width: 100%;
  padding-top: 10%;
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
  background-color:black
`

export const ModalVideo = styled.div`
  width: 75%;
  height: 600px;
  padding: 8px;
  border-radius: 8px;
  border:1px solid #fff;
  box-sizing: border-box;
`