import React from 'react';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Bookmarked from './components/Bookmarked/Bookmarked';

const App = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Header></Header>
      </div>
      <div className="row grid grid-cols-1 md:grid-cols-10 mt-6 gap-4">
        <div className="blogContainer col-span-7 mb-6">
          <Home></Home>
        </div>
        <div className="bookmarked col-span-3">
          <Bookmarked></Bookmarked>
        </div>
      </div>
    </div>
  );
};

export default App;