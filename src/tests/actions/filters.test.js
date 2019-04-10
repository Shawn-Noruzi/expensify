import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from "../../actions/filters";
import moment from "moment";

test("should make set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should make set start end action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should set the text filter", () => {
    const text = 'text input here';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should set the text filter", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text : ''
  });
});

test("should sort by date", () => {
  expect( sortByDate()).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should sort by amount", () => {
  expect( sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
