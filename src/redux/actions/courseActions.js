import * as courseActions from './actionTypes'

export function createCourse(course){
    return {type: courseActions.CREATE_COURSE, course}
}