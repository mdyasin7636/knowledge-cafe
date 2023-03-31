import React from 'react';
import { BsBookmark } from "react-icons/bs";

const SingleBlog = ({blog}) => {
    return (
      <div className="border-b-2 border-zinc-200 mb-7">
        <div>
          <img className="rounded" src={blog.blogCoverImage} alt="" />
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex">
            <img
              className="rounded-full object-cover w-12 h-12"
              src={blog.authorImage}
              alt=""
            />
            <div className="ml-2">
              <h1 className="font-bold text-base">{blog.authorName}</h1>
              <p className="font-semibold text-sm text-gray-500">
                {blog.publishDate}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-2 font-semibold text-base text-gray-500">
              {blog.readTime} min read
            </p>
            <BsBookmark size={18} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-2">{blog.blogTitle}</h1>
        <p className="text-base font-semibold text-indigo-700 mt-2 underline mb-7">
          Mark as read
        </p>
      </div>
    );
};

export default SingleBlog;