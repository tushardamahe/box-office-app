import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePresistedReducer = (reducer, intialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, intialState, inital => {
    const presistedValue = localStorage.getItem(localStorageKey);

    return presistedValue ? JSON.parse(presistedValue) : inital;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowsReducer = (currrentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currrentStarred.concat(action.showId);
    case 'UNSTAR':
      return currrentStarred.filter(showId => showId !== action.showId);
    default:
      return currrentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePresistedReducer(
    starredShowsReducer,
    [],
    'starred Shows'
  );

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
        ></ShowCard>
      ))}
    </div>
  );
};

export default ShowGrid;
