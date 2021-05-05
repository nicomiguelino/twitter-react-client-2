import { useSelector } from 'react-redux';

import Tweet from './Tweets';
import Trending from './Trending';
import CreateTweetForm from './CreateTweetForm';

function Feed() {
  const tweets = useSelector(state => state.tweets);
  const trendingTags = useSelector(state => state.trendingTags);

  return(
    <div class="container-md mt-5">
      <div class="row">
        <div className="col-12 col-lg-8">
          <CreateTweetForm />
          <Tweet tweets={tweets} />
        </div>

        <div className="col-lg-4 d-none d-lg-block">
          <Trending tags={trendingTags} />
        </div>
      </div>
    </div>
  );
}

export default Feed;
