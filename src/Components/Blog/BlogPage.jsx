import { useState, useMemo } from "react";
import { useFetchBlogsQuery } from "../../redux/api/blogApi/blogApi";
import BlogCategories from "./BlogCategories";
import BlogList from "./BlogList";
import BlogPagination from "./BlogPagination";
import BlogSearch from "./BlogSearch";
import FeaturedBlog from "./FeaturedBlog";

const BlogPage = () => {
  const { data: blogs = [], isLoading, error } = useFetchBlogsQuery({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

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

  // Paginate Blogs
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    return filteredBlogs.slice(startIndex, startIndex + blogsPerPage);
  }, [filteredBlogs, currentPage]);

  // Extract Categories
  const categories = useMemo(() => {
    const tags = blogs.flatMap((blog) => blog.tags);
    return Array.from(new Set(tags));
  }, [blogs]);

  if (isLoading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load blogs.</p>;

  return (
    <div className=" text-white min-h-screen">
      {/* Header */}
      <header className=" py-10 text-center">
        <h1 className="text-4xl font-bold">MY BLOG</h1>
        <p className=" mt-2">
          Insights, tutorials, and tips on web development and more.
        </p>
      </header>

      <main className="container mx-auto px-6 py-10">
        {/* Search Bar */}
        <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <BlogCategories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Featured Blog */}
        {/* <FeaturedBlog blog={blogs[0]} /> */}

        {/* Blog List */}
        <BlogList blogs={paginatedBlogs} />

        {/* Pagination */}
        <BlogPagination
          totalBlogs={filteredBlogs.length}
          blogsPerPage={blogsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default BlogPage;
