import React from "react";

const BookMark = ({ bookMark, time }) => {
  return (
    <>
      <div className="bg-[#6047EC]/10 border-[#6047EC] border p-5 rounded-lg">
        <p className="font-bold text-2xl text-[#6047EC]">
          Spent time on read : {time} min
        </p>
      </div>

      <div className="bg-[#111111]/5 p-5 rounded-md mt-10">
        <p className="text-2xl font-bold mb-8">
          Bookmarked Blogs : {bookMark.length}
        </p>

        {bookMark.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg mb-5">
            <p className="text-lg font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookMark;
