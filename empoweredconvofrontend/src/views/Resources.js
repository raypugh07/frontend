import React from 'react';
import { Stage, StageLeft, LimeCard, LowInfoBox } from '../styles/ResStyling';

class Resources extends React.Component {
  render() {
    return (
      <Stage>
        <StageLeft>
          <LimeCard />
        </StageLeft>
        <LowInfoBox />
      </Stage>
    );
  };
};

export default Resources;