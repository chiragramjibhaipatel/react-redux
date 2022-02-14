import * as courseAction from "../actions/actionTypes"

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case courseAction.CREATE_COURSE:
      return [...state, { ...action.course }];

    default:
      return state;
  }
}
