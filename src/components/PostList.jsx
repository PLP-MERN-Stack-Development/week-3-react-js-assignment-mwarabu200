import { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        className="mb-4 px-4 py-2 border rounded w-full"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {paginatedPosts.map(post => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage(p =>
              p * postsPerPage < filteredPosts.length ? p + 1 : p
            )
          }
          disabled={currentPage * postsPerPage >= filteredPosts.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostList;
