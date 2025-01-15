import React from "react";

const BlogCard = ({ blog }) => (
  <div className="shadow-lg rounded-lg overflow-hidden bg-gray-800 transform hover:scale-105 transition-transform duration-300">
    <div>
      <img src={blog.photoUrl} alt={blog.title} className="" />
    </div>
    <div className="p-6">
      {/* Date and Tags */}
      <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
        <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
        <div className="flex gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Blog Title */}
      <h3 className="font-semibold text-2xl text-white mb-4">{blog.title}</h3>

      {/* Blog Content */}
      <p className="text-gray-300 text-base line-clamp-3">{blog.content}</p>
    </div>

    {/* Read More Button */}
    <div className="px-6 pb-6">
      {/* <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-200">
        Read More
      </button> */}
    </div>
  </div>
);

export default BlogCard;
