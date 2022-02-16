import * as courseAction from "../actions/actionTypes"
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case courseAction.LOAD_COURSES_SUCCESS:
      return action.courses
      case courseAction.CREATE_COURSE_SUCCESS:
        return [ ...state, {...action.course}]
        case courseAction.UPDATE_COURSE_SUCCESS:
          return state.map(course => course.id === action.course.id?action.course:course)
    default:
      return state;
  }
}
