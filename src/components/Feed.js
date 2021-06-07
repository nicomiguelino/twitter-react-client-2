import Tweets from 'components/Tweets';
import Trending from 'components/Trending';
import CreateTweetForm from 'components/CreateTweetForm';

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
