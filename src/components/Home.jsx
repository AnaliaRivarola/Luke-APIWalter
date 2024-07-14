
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({ resource, id, handleResourceChange, handleIdChange }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
      setData(response.data);
      setError('');
    } catch (error) {
      setData(null);
      setError('Estos no son los droides que está buscando');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Elija el recurso:
          <select value={resource} onChange={handleResourceChange}>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
          </select>
        </label>
        <br />
        <label>
          Ingrese el ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <button type="submit">Bearch</button>
      </form>

      {error && (
        <div>
          <p>{error}</p>
          <img src="https://i.imgur.com/6MrcOVK.jpg" alt="Estos no son los droides que está buscando" />
        </div>
      )}

      {data && (
        <div>
          <p>Resultados:</p>
          <ul>
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
