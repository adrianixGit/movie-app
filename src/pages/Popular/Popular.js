import Card from '../../components/Card/Card';
import './Popular.scss';
import { useEffect, useState } from 'react';
function Popular() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=aa42bd98aeb70d5f7d3505a50bc26805')
      .then((response) => response.json())
      .then((data) => setFilms([...data.results]));
    //const data = res.data;
  }, []);
  console.log(films);

  return (
    <div className="popular">
      {films.map((film) => (
        <Card title={film.title} src={film.poster_path} key={film.id} />
      ))}
    </div>
  );
}

export default Popular;
