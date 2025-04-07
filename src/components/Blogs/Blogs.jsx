import React, { Suspense, useState } from "react";
import BlogsContent from "../BlogsContent/BlogsContent";
import BookMark from "../BookMark/BookMark";

const Blogs = () => {
  const [bookMark, setBookMark] = useState([]);
  const [time, setTime] = useState(0);

  const handleBookMark = (blog) => {
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark);
  };

  const handleMark = (id, reading_time) => {
    const filterBookMark = bookMark.filter((item) => item.id !== id);
    setBookMark(filterBookMark);
    setTime(time + reading_time);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-10 xl:px-20">
        <div className="col-span-8">
          <Suspense
            fallback={
              <p className="text-5xl text-center">
                Data is loading ...........
              </p>
            }
          >
            <BlogsContent
              handleBookMark={handleBookMark}
              handleMark={handleMark}
            ></BlogsContent>
          </Suspense>
        </div>
        <div className="col-span-4">
          <BookMark bookMark={bookMark} time={time}></BookMark>
        </div>
      </div>
    </>
  );
};

export default Blogs;
