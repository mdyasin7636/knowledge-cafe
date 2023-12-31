import React, { useEffect, useState } from 'react';

const SideCart = ({readTime, bookmarkedBlogs}) => {
  const [time, setTime] = useState(readTime)

  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  }, [readTime])

  return (
    <div>
      <div className="border-2 rounded-md border-indigo-400 text-xl font-bold p-4 bg-indigo-100 text-indigo-700 text-center">
        <h1>Spent time on read : {time} min</h1>
      </div>
      <div className="border-2 rounded-md text-xl font-bold p-4 text-center bg-gray-100 mt-4">
        <h1>Bookmarked Blogs : {bookmarkedBlogs.count} </h1>
        {bookmarkedBlogs.titles.map((title) => (
          <div className="border-1 rounded-md bg-white mt-4 p-2 font-medium" key={title}>
            <h1>{title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCart;


 