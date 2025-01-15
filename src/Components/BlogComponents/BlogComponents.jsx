import { useState, useMemo } from "react";
import CategoryFilter from "./CategoryFilter";
import BlogCard from "./BlogCard/BlogCard";
import { useFetchBlogsQuery } from "../../redux/api/blogApi/blogApi";
import BlogCategories from "../Blog/BlogCategories";
import Navbar from "../Pages/Share/Navbar";
import HeaderNav from "../HeaderNav/HeaderNav";
import BlogNav from "../BlogNav/BlogNav";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 2;

  // Fetch blogs dynamically
  const { data: blogs = [], isLoading, error } = useFetchBlogsQuery();

  // Filter Blogs by Search and Category
  const filteredBlogs = useMemo(() => {
    return blogs
      .filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((blog) =>
        selectedCategory ? blog.tags.includes(selectedCategory) : true
      );
  }, [blogs, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Paginate blogs
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );
  // Extract Categories
  const categories = useMemo(() => {
    const tags = blogs.flatMap((blog) => blog.tags);
    return Array.from(new Set(tags));
  }, [blogs]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching blogs.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <BlogNav />
      </div>
      <div className=" ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Our Blog"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
            <div className="space-y-4">
              {blogs.slice(0, 5).map((blog) => (
                <div key={blog.id} className="flex items-center space-x-4">
                  <img
                    src={blog.photoUrl}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-sm font-medium">{blog.title}</p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Filter */}
            {/* <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          /> */}

            <div className="mt-10">
              <BlogCategories
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </aside>

          {/* Blog List */}
          <main className="col-span-3">
            <div className="grid grid-cols-1 gap-6">
              {currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === i + 1
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}>
                  {i + 1}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
