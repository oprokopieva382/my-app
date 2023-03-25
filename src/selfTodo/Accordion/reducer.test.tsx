import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer";

test("collapsed should be true", () => {
  //date
  const state: StateType = {
    collapsed: false,
  };

  ///action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });

  ///expectation
  expect(newState.collapsed).toBe(true);
});

test("collapsed should be false", () => {
  //date
  const state: StateType = {
    collapsed: true,
  };

  ///action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });

  ///expectation
  expect(newState.collapsed).toBe(false);
});

test("collapsed should trow error", () => {
  //date
  const state: StateType = {
    collapsed: true,
  };

  ///action
  expect(() => {
    reducer(state, { type: "FAKETYPE" });
  }).toThrowError();

  ///expectation
});
