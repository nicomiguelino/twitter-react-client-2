import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTweets } from 'redux/tweets/tweetsSlice';

function getProcessedTweet(content) {
  return `${content}`.split('\n').map(line => (
    <span>
      {line}<br/>
    </span>
  ));
}

function Tweets() {
  const {
    list,
    tweetsLoading,
    tweetsLoadingError,
    tweetsError,
  } = useSelector(state => state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  if (tweetsLoading) {
    return (
      <div className="bg-white text-black-50 text-center">
          <span className="spinner-border">
          </span>
      </div>
    );
  }

  if (tweetsLoadingError) {
    return (
      <>
        <div className="bg-white text-black-50 text-center">
          {tweetsError.message}
        </div>

        <div className="d-flex justify-content-center">
          {
            (tweetsError.statusCode === 401) ?
              (
                <Link to="/login"
                  style={{
                    borderRadius: '2rem'
                  }}
                  className={classNames(
                    'btn',
                    'btn-success',
                    'login-button',
                    'font-weight-bold',
                    'mt-3',
                  )}
                >
                  Log In
                </Link>
              ) :
              (<></>)
          }
        </div>
      </>
    );
  }

  return (
    <>
      {list.map(tweet => (
        <div key={tweet.id} className="card bg-white text-black mb-2">
          <div className="card-body">
            <div className="mb-2">
              <span className="font-weight-bold mr-1">
                {tweet.displayName}
              </span>
              <span className="text-black-50">
                @{tweet.username} &middot; {tweet.timeElapsed}
              </span>
            </div>
            <div>
              {getProcessedTweet(tweet.content)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Tweets;
