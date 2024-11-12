import React from 'react';
import CourseListRow from './CourseList/CourseListRow';

function App() {
  return (
    <div>
      <h1>Welcome to Course List</h1>
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Course Description" />
          <CourseListRow isHeader={false} textFirstCell="React Basics" textSecondCell="Introduction to React" />
          <CourseListRow isHeader={false} textFirstCell="Advanced React" textSecondCell="Hooks and Context" />
        </tbody>
      </table>
    </div>
  );
}

export default App;