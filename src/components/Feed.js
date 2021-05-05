let trendingTags = [
  "FreeMassTestingPH",
  "ShopeeCashbackTuesday",
  "LaborDaySale",
];

let tweets = [
  {
    userName: "anthonyedwardstark",
    displayName: "Tony Stark",
    timeElapsed: "4h",
    content: "Time to upgrade my Mark V.",
  },
  {
    userName: "peterparker",
    displayName: "Peter Parker",
    timeElapsed: "23s",
    content: "I'm super excited on my first day at the Stark internship.",
  },
  {
    userName: "brucebanner",
    displayName: "Hulk",
    timeElapsed: "4h",
    content: "Gotta go to dinner date with Nat.",
  },
];


function Feed() {
  return(
    <div class="container-md mt-5">
      <div class="row">
        <div className="col-12 col-lg-8">
          {
            tweets.map(tweet => (
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
            ))
          }
        </div>

        <div className="col-lg-4 d-none d-lg-block">
          <div className="sticky-top" style={{top: "6.5em"}}>
            <h5 className="text-black-30 font-weight-bold">
              Trending
            </h5>

            {
              trendingTags.map(tag => (
                <div className="text-black-50 font-weight-bold">
                  #{tag}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
