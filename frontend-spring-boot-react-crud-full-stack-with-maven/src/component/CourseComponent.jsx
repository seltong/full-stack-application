import React, { Component } from 'react';
import { matchPath } from 'react-router';
import CourseDataService, { INSTRUCTOR } from '../service/CourseDataService';
import { createBrowserHistory } from 'history';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this)
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

  onSubmit(values) {
    console.log(values)
  }

  validate(values) {
    let errors = {}
    
    if (!values.description) {
      errors.description = 'Enter a Description'
    } else if (values.description.length < 5) {
      errors.description = 'Enter atleast 5 Characters in Description'
    }

    return errors
  }

  render() {
    let { description, id} = this.state

    return (
      <div>
          <h3>Course</h3>
          <div className="container">
            <Formik 
              initialValues={{ id, description }}
              onSubmit={this.onSubmit}
              validateOnChange={false}
              validateOnBlur={true}
              validate={this.validate}
              enableReinitialize={true}
            >
              {
                (props) => (
                  <Form>
                    <ErrorMessage 
                        name="description"
                        component="div"
                        className="alert alert-warning" />

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