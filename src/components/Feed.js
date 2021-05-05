import Tweet from "./Tweets";
import Trending from "./Trending";

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
