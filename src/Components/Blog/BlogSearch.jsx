const BlogSearch = ({ searchQuery, setSearchQuery }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Search blogs..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-3 rounded bg-white text-slate-950 placeholder-gray-900"
    />
  </div>
);
export default BlogSearch;
