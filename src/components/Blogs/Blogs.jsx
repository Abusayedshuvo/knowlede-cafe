import React, { Suspense } from "react";
import BlogsContent from "../BlogsContent/BlogsContent";

const Blogs = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <Suspense
            fallback={
              <p className="text-5xl text-center">
                Data is loading ...........
              </p>
            }
          >
            <BlogsContent></BlogsContent>
          </Suspense>
        </div>
        <div className="col-span-4">
          <p>Bookmarked Blogs : 8</p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
