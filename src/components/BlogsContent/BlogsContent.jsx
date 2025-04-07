import React, { use } from "react";
import Blog from "../Blog/Blog";
const loadData = fetch("blogs.json").then((res) => res.json());

const BlogsContent = () => {
  const blogs = use(loadData);
  return (
    <div className="grid  grid-cols-2 gap-10 xl:px-20">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default BlogsContent;
