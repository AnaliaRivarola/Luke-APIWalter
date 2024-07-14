import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        setPerson(response.data);
      } catch (error) {
        console.error('Error fetching person details:', error);
      }
    };

    fetchPerson();
  }, [id]);

  return (
    <div>
      {person && (
        <div>
          <h2>{person.name}</h2>
          {person.homeworld && (
            <p>Homeworld: {person.homeworld}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonDetails;
