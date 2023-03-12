import { useEffect, useReducer } from 'react';

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

export const useStarredShow = () => {
  return usePresistedReducer(starredShowsReducer, [], 'starred Shows');
};
