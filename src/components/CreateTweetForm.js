import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/CreateTweetForm.scss';
import { createTweet } from '../redux/tweets/tweetsSlice';

function validateTweet(tweet) {
  const trimmedTweet = `${tweet}`.trim();
  return trimmedTweet.length !== 0;
}

function CreateTweetForm() {
  const dispatch = useDispatch();
  const [inputTweet, setInputTweet] = useState('');
  const [tweetButtonDisabled, setTweetButtonDisabled] = useState(true);

  const resetForm = () => {
    setInputTweet('');
    setTweetButtonDisabled(true);
  };

  const handleCreateTweet = () => {
    const tweet = {
      userName: 'anonymouspanda',
      displayName: 'The Panda',
      timeElapsed: '1d',
      content: `${inputTweet}`.trim(),
    };

    dispatch(createTweet(tweet));
    resetForm();
  };

  const handleInputTweet = (event) => {
    const tweet = event.target.value;

    setTweetButtonDisabled(!validateTweet(tweet));
    setInputTweet(tweet);
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
          />

          <div
            className={classNames(
              'd-flex',
              'flex-row',
              'align-items-start',
            )}
          >
            <span className="text-black-50 ml-2">
              280/280
            </span>

            <button
              className="btn btn-success rounded ml-auto"
              onClick={handleCreateTweet}
              disabled={tweetButtonDisabled}
            >
              <strong>Tweet</strong>
            </button>
          </div>
        </div>
  );
}

export default CreateTweetForm;
