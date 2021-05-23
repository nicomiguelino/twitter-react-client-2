import Tweets from './Tweets';
import Trending from './Trending';
import CreateTweetForm from './CreateTweetForm';

function Feed() {
  return(
    <div className="container-md my-5">
      <div className="row">
        <div className="col-12 col-lg-8">
          <CreateTweetForm />
          <Tweets />
        </div>

        <div className="col-lg-4 d-none d-lg-block">
          <Trending />
        </div>
      </div>
    </div>
  );
}

export default Feed;
