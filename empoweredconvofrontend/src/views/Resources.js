import React from 'react';
import {
  Scenery, Stage, StageLeft, LimeCard,
  FloatPlane, FloatTitle, FloatBox,
  Empower
} from '../styles/ResStyling';

class Resources extends React.Component {
  render() {
    return (
      <Scenery>
        <Stage>
          <StageLeft>
            <FloatTitle>
              <h1>Resources that . . .</h1>
              <Empower/>
              <h5><i>Tools to move forward.</i></h5>
              <p>
                "You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?"
                –Jeff Goldblum
              </p>
            </FloatTitle>
            <LimeCard />
          </StageLeft>
        </Stage>
        <FloatPlane>
          <FloatBox>
            <h3>Jeffism One</h3>
            <p>
              Remind me to thank John for a lovely weekend. Did he just throw my cat out of the window? So you
              two dig up, dig up dinosaurs? My dad once told me, laugh and the world laughs with you, Cry, and
              I'll give you something to cry about you little ███████!
            </p>
          </FloatBox>
          <FloatBox>
            <h3>Jeffism Two</h3>
            <p>
              They're using our own satellites against us. And the clock is ticking. What do they got in there?
              King Kong? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE!
              'Cause maybe if we screw up this planet enough, they won't want it anymore!
            </p>
          </FloatBox>
          <FloatBox>
            <h3>Jeffism Three</h3>
            <p>
              We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe
              if we screw up this planet enough, they won't want it anymore! You really think you can fly that
              thing? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop
              to think if they should.
            </p>
          </FloatBox>
          <FloatBox>
            <h3>Jeffism Four</h3>
            <p>
              You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?
              Checkmate... You really think you can fly that thing? They're using our own satellites against us.
              And the clock is ticking. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys
              God. Man creates Dinosaurs.
            </p>
          </FloatBox>
          <FloatBox>
            <h3>Jeffism Five</h3>
            <p>
              Just my luck, no ice. Do you have any idea how long it takes those cups to decompose. Did he just
              throw my cat out of the window? Do you have any idea how long it takes those cups to decompose.
              You really think you can fly that thing? Yeah, but your scientists were so preoccupied with whether
              or not they could, they didn't stop to think if they should.
            </p>
          </FloatBox>
        </FloatPlane>
      </Scenery>
    );
  };
};

export default Resources;