import React from 'react';
import { Stage, StageLeft, LimeCard, LowInfoBox } from '../styles/ResStyling';

class Resources extends React.Component {
  render() {
    return (
      <Stage>
        <StageLeft>
          Hi.
        </StageLeft>
        <LimeCard />
        {/* <LowInfoBox /> */}
      </Stage>
    );
  };
};

export default Resources;