import React, { Component } from 'react';
import { matchPath } from 'react-router';
import CourseDataService, { INSTRUCTOR } from '../service/CourseDataService';
import { createBrowserHistory } from 'history';
import { Formik, Form, Field } from 'formik';

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
          <div className="container">
            <Formik initialValues={{ id, description }}>
              {
                (props) => (
                  <Form>
                    <fieldset className="form-group">
                      <label>Id</label>
                      <Field className="form-control" type="text" name="id" disabled />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Description</label>
                      <Field className="form-control" type="text" name="description" />
                    </fieldset>
                    <button className="btn btn-success" type="submit">Save</button>
                  </Form>

                )
              }
            </Formik>
          </div>
      </div>
    );
  }
}

export default CourseComponent;