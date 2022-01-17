import React, { Component } from 'react';
import { matchPath } from 'react-router';
import CourseDataService, { INSTRUCTOR } from '../service/CourseDataService';
import { createBrowserHistory } from 'history';

class CourseComponent extends Component {

  constructor(props) {
    super(props);

    let history = createBrowserHistory();
    let match = matchPath({
      path: "/courses/:id",
      exact: true
    }, history.location.pathname);

    this.state = {
      id: match.params.id,
      description: ''
    }
  }

  componentDidMount() {
    // eslint-disable-next-line
    if (this.state.id == -1) {
      return
    }

    CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
      .then(response => this.setState({
        description: response.data.description
      }));
  }

  render() {
    let { description, id} = this.state

    return (
      <div>
          <h3>Course</h3>
          <div>{id}</div>
          <div>{description}</div>
      </div>
    );
  }
}

export default CourseComponent;