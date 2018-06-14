import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './App.css';

class App extends Component {
  render() {
    if (this.props.courses && this.props.courses.loading) {
      return <div>Loading</div>;
    }

    if (this.props.courses && this.props.courses.error) {
      return <div>Error</div>;
    }

    const coursesToRender = this.props.courses.allCourses;

    return (
      <div>
        <h1>List Courses Here</h1>
        { coursesToRender.map(course => <div key={course.id}>{ course.title } <br /></div>) }
      </div>
    );
  }
}

const ALL_COURSES_QUERY = gql`
  query AllCourses{
    allCourses(searchTerm: ""){
      id
      title
      author
      description
      topic
      url
      voteCount
    }
  }
`;

export default graphql(ALL_COURSES_QUERY, { name: 'courses' })(App);
