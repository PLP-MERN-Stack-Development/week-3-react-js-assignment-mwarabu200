import PostList from '../components/PostList';

function ApiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">API Posts</h1>
      <PostList />
    </div>
  );
}

export default ApiPage;
