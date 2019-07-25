import styled from 'styled-components';

export const Backdrop = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Stage = styled.div`
  min-height: calc(100vh - 95px);
  z-index: 0;
  background-color: #24b4a5;
  // border: 1px solid salmon;
`;

export const StageLeft = styled.div`
  height: 1024px;
  width: 64%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #ffffff;
  // border: 1px solid black;
`;

export const LimeCard = styled.div`
  height: 532px;
  width: 440px;
  // margin: 490px 0 0 480px;
  z-index: 2;
  background-color: #8fedc2;
  color: #ffffff;
  // border: 1px solid pink;
`;

export const LowInfoBox = styled.div`
  height: 430px;
  width: 775px;
  margin: 365px 0 110px 250px;
  z-index: 3;
  color: #ffffff;
  font-size: 25px;
  font-weight: 300;
  border: 1px solid red;
`;