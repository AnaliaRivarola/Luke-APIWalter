
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import PersonDetails from './components/PersonDetails';
import NotFound from './components/NotFound';

const App = () => {
  const [resource, setResource] = useState('people'); // Default resource
  const [id, setId] = useState('');

  const handleResourceChange = (e) => {
    setResource(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/${id}`}>Person Details</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home
          resource={resource}
          id={id}
          handleResourceChange={handleResourceChange}
          handleIdChange={handleIdChange}
        />} />
        <Route path="/:id" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
