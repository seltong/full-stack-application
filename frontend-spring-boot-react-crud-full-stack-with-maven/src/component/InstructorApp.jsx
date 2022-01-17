import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseComponent from './CourseComponent';
import ListCoursesComponent from './ListCoursesComponent';
import { createBrowserHistory } from 'history';
class InstructorApp extends Component {
  render() {
    let history = createBrowserHistory()

    return (
      <Router history={history}>
        <>
          <h1>Instructor Application</h1>
          <Routes>
            <Route path="/" exact element={<ListCoursesComponent history={history} />} />
            <Route path="/courses" exact element={<ListCoursesComponent history={history} />} />
            <Route path="/courses/:id" exact element={<CourseComponent />} />
          </Routes>
        </>
      </Router>
    )
  }
}

export default InstructorApp;