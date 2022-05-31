import './Card.scss';
import Star from '../../iconComponents/Star';
import PropTypes from 'prop-types';
function Card({ title, src }) {
  const imgSrc = `https://images.tmdb.org/t/p/w400${src}`;
  return (
    <div className="card">
      <div className="card__img">
        <img src={imgSrc} />
      </div>
      <div className="card__footer">
        <h3 className="card__title">{title}</h3>
        <Star className="card__star" />
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string
};

export default Card;
