function Tweets({tweets}) {
  return (
    <>
      {tweets.map(tweet => (
        <div className="card bg-white text-black mb-2">
          <div className="card-body">
            <div>
              <span className="font-weight-bold mr-1">
                {tweet.displayName}
              </span>
              <span className="text-black-50">
                @{tweet.userName} &middot; {tweet.timeElapsed}
              </span>
            </div>
            <div>
              {tweet.content}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Tweets;
