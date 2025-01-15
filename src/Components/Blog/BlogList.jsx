import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => (
  <div className="grid backdrop-blur-3xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
    {blogs.map((blog) => (
      <div
        key={blog.id}
        className=" p-1  border-blue-600 shadow-blue-800 text-white flex flex-col rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Blog Image */}
        <div className="relative h-56 w-full">
          {blog.photoUrl ? (
            <img
              src={blog.photoUrl}
              alt={blog.title}
              className="w-full h-full "
            />
          ) : (
            <div className="h-full w-full  flex items-center justify-center">
              <span className="text-gray-400">No Image Available</span>
            </div>
          )}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        </div>

        {/* Blog Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold truncate">{blog.title}</h3>
          <p className="text-gray-400 mt-4 line-clamp-3 leading-relaxed">
            {blog.content}
          </p>

          {/* Divider */}
          {/* <div className="mt-4 border-t border-gray-700"></div> */}

          {/* Author and Date */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span className="font-medium">By {blog.author}</span>
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <Link to={"/blogs"}>
              <button className="w-full backdrop-blur-lg text-white font-medium py-2 rounded-lg hover:backdrop-blur-2xl transition-colors">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default BlogList;
