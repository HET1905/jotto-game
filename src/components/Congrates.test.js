import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findTestByAttr, checkProps } from "../../test/testUtils";
import Congrates from "./Congrates";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const defaultProps = { success: false };

/**
 * Factory function to create ShallowWrpper for Congrates component
 * @function setup
 * @param {object} props - Componenet props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrates {...setupProps} />);
};

test("render with out error", () => {
  const wrapper = setup();
  const component = findTestByAttr(wrapper, "component-congrates");
  expect(component.length).toBe(1);
});

test("render no text when `success` props is false", () => {
  const wrapper = setup({ success: false });
  const component = findTestByAttr(wrapper, "component-congrates");
  expect(component.text()).toBe("");
});

test("render non-empty congrates message when `success` props is true", () => {
  const wrapper = setup({ success: true });
  const message = findTestByAttr(wrapper, "congrates-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw error with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrates, expectedProps);
});
