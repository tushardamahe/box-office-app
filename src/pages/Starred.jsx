import { useStarredShow } from '../lib/useStarShows';

const Starred = () => {
  const [starredShows] = useStarredShow();

  return <div>Starred {starredShows.length}</div>;
};

export default Starred;
