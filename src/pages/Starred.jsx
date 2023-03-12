import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows && starredShows.length === 0) {
    return <div>No shows were Starred</div>;
  }

  if (starredShows && starredShows.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if( starredShowsError) {
    return <div>Error Occured: {starredShowsError.message}</div>
  }

  return <div>Show are loading..</div>;
};

export default Starred;
