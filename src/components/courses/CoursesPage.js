import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.courseAction.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add a course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Submit" />
        {this.props.course.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  course: PropTypes.array.isRequired,
  courseAction: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    course: state.course,
  };
}

function mapDispachToProps(dispatch) {
  return {
    courseAction: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispachToProps)(CoursesPage);
