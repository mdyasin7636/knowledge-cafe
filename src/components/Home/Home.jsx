import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import SideCart from '../SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState("")

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

    const handleAddToCart = (time) => {
      const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
      if (previousReadTime) {
        const sum = previousReadTime + time;
        localStorage.setItem("readTime", sum)
        setReadTime(sum);
      }
      else {
        localStorage.setItem("readTime", time)
        setReadTime(time);
      }
  }

  return (
    <div className="home-container row grid grid-cols-1 md:grid-cols-10 mt-6 gap-4">
      <div className="blog-container col-span-7 mb-6">
        {blogs.map((blog) => <Blogs 
        blog={blog}
        handleAddToCart={handleAddToCart}
        ></Blogs>)}
      </div>
      <div className="bookmark-container col-span-3">
        <SideCart readTime={readTime}></SideCart>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};


export default Home;