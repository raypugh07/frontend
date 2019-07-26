import React from "react";
import Enzyme from "enzyme";
import Bar from './Bar';

const { shallow } = Enzyme; 



test("component exists", () => {
  expect(Bar).toBeDefined();
});