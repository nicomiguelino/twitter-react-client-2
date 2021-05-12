import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/CreateTweetForm.scss';
import {
  createTweet,
  setInputTweet,
  setTweetButtonDisabled,
  updateCharactersLeft,
  maxCharPerTweet,
} from '../redux/tweets/tweetsSlice';

function validateTweet(tweet) {
  const trimmedTweet = `${tweet}`.trim();
  return trimmedTweet.length > 0 && trimmedTweet.length <= maxCharPerTweet;
}

function Spinner({loading}) {
  if (loading) {
    return (
      <span class="spinner-border spinner-border-sm ml-2">
      </span>
    );
  } else {
    return (
      <></>
    );
  }
};

function CreateTweetForm() {
  const dispatch = useDispatch();
  const {
    createTweetLoading,
    inputTweet,
    tweetButtonDisabled,
    charactersLeft,
  } = useSelector(state => state.tweets);

  const handleCreateTweet = () => {
    const tweet = {
      userName: 'anonymouspanda',
      displayName: 'The Panda',
      timeElapsed: '1d',
      content: `${inputTweet}`.trim(),
    };

    dispatch(createTweet(tweet));
  };

  const handleInputTweet = (event) => {
    const tweet = event.target.value;

    dispatch(setTweetButtonDisabled(!validateTweet(tweet)));
    dispatch(setInputTweet(tweet));
    dispatch(updateCharactersLeft());
  };

  return (
        <div
          className={classNames(
            'CreateTweetForm',
            'form-group',
            'mb-5',
          )}
        >
          <textarea
            id="create-tweet"
            placeholder="What's happening?"
            name="create-tweet"
            rows="4"
            className="form-control mb-3 p-3"
            style={{
              'font-size': '1.3em',
              'resize': 'none'
            }}
            value={inputTweet}
            onChange={handleInputTweet}
            disabled={createTweetLoading}
          />

          <div
            className={classNames(
              'd-flex',
              'flex-row',
              'align-items-start',
            )}
          >
            <span className="text-black-50 ml-2">
              {charactersLeft}/{maxCharPerTweet}
            </span>

            <button
              className="btn btn-success rounded ml-auto"
              onClick={handleCreateTweet}
              disabled={tweetButtonDisabled || createTweetLoading}
            >
              <div className="d-flex align-items-center">
                <strong>Tweet</strong>
                <Spinner loading={createTweetLoading} />
              </div>
            </button>
          </div>
        </div>
  );
}

export default CreateTweetForm;
