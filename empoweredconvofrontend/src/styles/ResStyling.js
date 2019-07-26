import styled from 'styled-components';
import empower from '../assets/EMPOWER.png';

/* BACKGROUND */
export const Backdrop = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Scenery = styled.div`
  min-height: calc(100vh - 95px);
  // min-width: 100%;
  position: relative;
  z-index: -2;
  background-color: #24b4a5;
`;

export const Stage = styled.div`
  // min-height: calc(100vh - 95px);
  min-width: 100%;
  position: absolute;
  z-index: -1;
  // border: 1px solid salmon;
`;

export const StageLeft = styled.div`
  height: 44%;
  width: 64%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #ffffff;
  // border: 1px solid black;
`;

export const LimeCard = styled.div`
  height: 532px;
  width: 440px;
  background-color: #8fedc2;
  color: #ffffff;
  // border: 1px solid pink;
`;

/* BACKGROUND COVER */
export const FloatPlane = styled.div`
  // min-height: calc(100vh - 95px);
  padding: 620px 0 50px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid coral;
`;

/* TEXT, BOXES, AND FLOATERS */
export const FloatTitle = styled.div`
  width: 78%;
  margin: 140px 0 40px 50%;
  padding-right: 50px;
  // border: 1px solid purple;
`;

export const FloatBox = styled.div`
  width: 1040px;
  margin-top: 50px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.45);
  // border: 1px solid red;
`;

/* IMAGES */
export const Empower = styled.img.attrs({
  alt: "Empowered Conversations clickable logo; returns to homepage.",
  src: `${empower}`
})`
  height: auto;
  width: auto;
  margin-top: 18px;
`;