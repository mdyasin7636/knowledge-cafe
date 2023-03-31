import React from 'react';
import { BsBookmark } from "react-icons/bs";

const Blog = () => {
    return (
      <div>
        <div>
          <img
            src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex mt-3">
          <div className="w-8">
            <img
              className="rounded-full"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1>Jones Clark</h1>
              <p>Mar 14 (4 days to go)</p>
            </div>
            <div>
              <p>5 min read </p> <BsBookmark size={25} />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-2">
          How to get your first job as a self-taught programmer
        </h1>
        <p className="text-base font-semibold text-indigo-700 mt-2 underline">
          Mark as read
        </p>
      </div>
    );
};


export default Blog;