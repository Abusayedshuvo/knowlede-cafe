import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
  const {
    cover,
    title,
    author,
    posted_date,
    author_img,
    reading_time,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <>
      <div>
        <img className="rounded-lg" src={cover} alt="" />
        <div className="bg-[#f4f4f4] p-4">
          <div className="flex justify-between mt-5">
            <div className="flex gap-5">
              <div>
                <img className="w-16" src={author_img} alt="" />
              </div>
              <div>
                <p className="text-lg font-bold"> {author} </p>
                <p className="text-[#111111]/60 font-semibold">
                  {" "}
                  {posted_date}{" "}
                </p>
              </div>
            </div>
            <p className="flex gap-3 items-center">
              {reading_time} min read
              <button>
                <FaRegBookmark />
              </button>
            </p>
          </div>
          <div className="">
            <p className="text-2xl font-semibold">{title}</p>
          </div>
          <div className="text-[#111111]/60 font-semibold my-2">
            {hashtags.map((item, index) => (
              <span className="pr-2" key={index}>
                #{item}
              </span>
            ))}
          </div>
          <button className="text-[#6047EC] font-semibold border-b-[#6047EC] border-b-2">
            Mark as read
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
