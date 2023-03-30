import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
  const filledStars = [...Array(rating).keys()].map((i) => (
    <FontAwesomeIcon key={i} icon={filledStar} />
  ));
  const emptyStars = [...Array(5 - rating).keys()].map((i) => (
    <FontAwesomeIcon key={i} icon={emptyStar} />
  ));
  return (
    <div className="star-rating">
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default StarRating;