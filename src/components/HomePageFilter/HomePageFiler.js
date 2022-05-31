import './HomePageFilter.scss';

function HomePageFilter() {
  return (
    <div className="homePage__filter">
      <div className="homePage__genres">
        <button className="homePage__genre">Action</button>
        <button className="homePage__genre">Adventure</button>
        <button className="homePage__genre">Animation</button>
        <button className="homePage__genre">Comedy</button>
        <button className="homePage__genre">Crime</button>
        <button className="homePage__genre">Documentary</button>
        <button className="homePage__genre">Drama</button>
        <button className="homePage__genre">Family</button>
        <button className="homePage__genre">Fantasy</button>
        <button className="homePage__genre">History</button>
        <button className="homePage__genre">Music</button>
        <button className="homePage__genre">Mystery</button>
        <button className="homePage__genre">Romance</button>
        <button className="homePage__genre">Science Fiction</button>
        <button className="homePage__genre">Thriller</button>
        <button className="homePage__genre">War</button>
        <button className="homePage__genre">Western</button>
      </div>
      <div className="homePage__year">
        <p className="homePage__paragraph">Year</p>
        <input className="homePage__input" type="text" />
      </div>
      <div className="homePage__sortBy">
        <p className="homePage__paragraph">Sort by</p>
        <select className="homePage__select">
          <option>Popularity descending</option>
          <option>Popularity ascending</option>
          <option>Relase date descending</option>
          <option>Relase date ascending</option>
          <option>Vote average descending</option>
          <option>Vote average ascending</option>
        </select>
      </div>
    </div>
  );
}

export default HomePageFilter;
