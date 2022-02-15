import * as courseAction from "../actions/actionTypes"
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case courseAction.CREATE_COURSE:
      return [...state, { ...action.course }];
    case courseAction.LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state;
  }
}
