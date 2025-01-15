const BlogPagination = ({
  totalBlogs,
  blogsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  return (
    <div className="flex justify-center mt-6 space-x-3">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === index + 1 ? "bg-blue-500" : "bg-gray-700"
          }`}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};
export default BlogPagination;
