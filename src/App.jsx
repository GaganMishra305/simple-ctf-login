import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials
  const correctUsername = 'username';
  const correctPassword = 'password';

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setError('');
      navigate('/success');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-[100vw] bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-900 text-white"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-900 text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>
    </div>
  );
}

function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-[100vw] bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold py-2">You cracked it!</h1>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/021/596/317/small_2x/a-digital-intelligence-hacker-cat-research-with-a-computer-generative-ai-photo.jpg' className=' w-64 h-44 rounded-md'></img>
    </div>
  );
}

export default App;
