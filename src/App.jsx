import React from 'react';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import BlogQuestions from './components/BlogQuestions/BlogQuestions';
const App = () => {

  return (
    <div className="container mx-auto">
      <div>
        <Header></Header>
      </div>
        <Home></Home>
        <BlogQuestions></BlogQuestions>
    </div>
  );
};

export default App;