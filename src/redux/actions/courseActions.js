import * as courseActions from './actionTypes'
import * as courseApi from "../../api/courseApi";


function loadCoursesSuccess(courses) {
  return { type: courseActions.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

function updateCourseSuccess(course) {
  return { type: courseActions.UPDATE_COURSE_SUCCESS, course: course };
}

function createCourseSuccess(course) {
  return { type: courseActions.CREATE_COURSE_SUCCESS, course };
}
export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then((savedCourse) => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    });
  };
}