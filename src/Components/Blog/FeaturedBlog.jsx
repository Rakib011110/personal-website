const FeaturedBlog = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="backdrop-blur-2xl p-6 rounded-lg mb-10">
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <p className="text-gray-400 mt-2">{blog.content.slice(0, 100)}...</p>
      {blog.photoUrl && (
        <img
          src={blog.photoUrl}
          alt={blog.title}
          className="w-full h-52 object-cover mt-4 rounded"
        />
      )}
    </div>
  );
};
export default FeaturedBlog;
