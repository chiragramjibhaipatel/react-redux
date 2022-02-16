import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import * as authorAction from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import courseReducer from "../../redux/reducers/courseReducer";

const ManageCoursePage = ({
  courses,
  authors,
  loadCourses,
  saveCourse,
  loadAuthors,
  history,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(courses.length ===0){
      loadCourses().catch((error) => {
        alert("loading courses failed", error);
      });
    } else {
      setCourse(props.course);
    }

    if(authors.length === 0){
      loadAuthors().catch((error) => {
        alert("loading authors failed", error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    console.log("saving ", course);
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  }

  return (
    <>
      <CourseForm
        course={course}
        errors={errors}
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispachToProps = {
  loadCourses: courseAction.loadCourses,
  saveCourse: courseAction.saveCourse,
  loadAuthors: authorAction.loadAuthors,
};

export default connect(mapStateToProps, mapDispachToProps)(ManageCoursePage);
