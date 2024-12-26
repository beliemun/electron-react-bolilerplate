import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Hello() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-[#7a2c9e] via-[#dd5789] to-[#fedc2a]">
      <h1 className="text-4xl font-bold text-white">Hello, TailwindCSS!</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
