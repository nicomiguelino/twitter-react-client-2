import { gql, useQuery } from '@apollo/client';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function getProcessedTweet(content) {
  return `${content}`.split('\n').map(line => (
    <span>
      {line}<br/>
    </span>
  ));
}

function Tweets() {
  const GET_TWEETS = gql`
    query {
      allTweets {
        id
        content
        createdAt
        updatedAt
        user {
          username
          firstName
          lastName
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TWEETS);

  if (loading) {
    return (
      <div className="bg-white text-black-50 text-center">
          <span className="spinner-border">
          </span>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div className="bg-white text-black-50 text-center">
          {error.message}
        </div>

        <div className="d-flex justify-content-center">
          {
            (error.statusCode === 401) ?
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
      {data.allTweets.map(tweet => (
        <div key={tweet.id} className="card bg-white text-black mb-2">
          <div className="card-body">
            <div className="mb-2">
              <span className="font-weight-bold mr-1">
                {tweet.user.firstName} {tweet.user.lastName}
              </span>
              <span className="text-black-50">
                @{tweet.user.username} &middot; Oct 29
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
