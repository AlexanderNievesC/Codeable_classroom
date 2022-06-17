import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import ChatBox from "./chatbox";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  max-height: 10%;
  height: 100vh;
`;

const VideoStyled = styled.video`
  display: auto;
  width: 950px;
`;

const ChatStyled = styled.div`
  display: block;
  padding: 1px;
  margin: 1 px;
`;

function Classroom() {
  return (
    <Container>
      <VideoStyled controls>
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
      </VideoStyled>

      <ChatBox />
    </Container>
  );
}

export default Classroom;
