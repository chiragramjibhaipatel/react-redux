import  React  from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <p>React, Redux and React Router for </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
};

export default HomePage;
