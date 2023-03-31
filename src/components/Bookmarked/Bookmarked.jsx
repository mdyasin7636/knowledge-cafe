import React from 'react';

const Bookmarked = () => {
    return (
      <div>
        <div className="border-2 rounded-md border-indigo-400 text-xl font-bold p-4 bg-indigo-100 text-indigo-700 text-center">
          <h1>Spent time on read : 177 min</h1>
        </div>
        <div className="border-2 rounded-md text-xl font-bold p-4 text-center bg-gray-100 mt-4">
          <h1>Bookmarked Blogs : 8</h1>
          <div className="border-1 rounded-md bg-white mt-4 p-2 font-medium">
            <h1>Master Microsoft Power Platform and Become an In-Demand!</h1>
          </div>
        </div>
      </div>
    );
};

export default Bookmarked;