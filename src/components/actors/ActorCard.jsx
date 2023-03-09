import { Link } from 'react-router-dom';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name} {!!gender && `(${gender})`}</h1>

      <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>

      {!!birthday && <p>Born: {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>

      <div>
        <Link to="">Read More</Link>
        <button type="buttom">Star Me</button>
      </div>
    </div>
  );
};
export default ActorCard;
