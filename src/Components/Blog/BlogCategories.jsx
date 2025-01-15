const BlogCategories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => (
  <div className="flex flex-wrap gap-3 mb-6">
    <button
      className={`backdrop-blur-2xl px-4 py-2 rounded ${
        !selectedCategory ? "bg-blue-500" : " border"
      }`}
      onClick={() => setSelectedCategory("")}>
      All
    </button>
    {categories.map((category, index) => (
      <button
        key={index}
        className={`px-4 py-2 rounded ${
          selectedCategory === category ? "bg-blue-500" : "border"
        }`}
        onClick={() => setSelectedCategory(category)}>
        {category}
      </button>
    ))}
  </div>
);
export default BlogCategories;
