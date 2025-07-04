import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './pages/TaskManager';
import ApiPage from './pages/ApiPage'; // ✅ Import your new page

function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <h1 className="text-3xl font-bold text-blue-500">Tailwind is working!</h1>
    </div>
  );
}
function AboutPage() {
  return <h1 className="text-2xl font-bold">About Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}

export default App;
